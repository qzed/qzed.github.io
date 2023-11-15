import fs from 'fs'

import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'

const Cite = require('citation-js')


type Options = {
    bibliography: string | undefined
}

type CitationRef = {
    index: number,
    html: string,
    ref: string,
}

export function rehypeCite(this: any, options: Options) {
    return (tree: any, file: any) => {
        // skip if no bibliography specified
        if (!options.bibliography) {
            return
        }

        // load bibliography via citation-js and set up citeproc engine
        const bibdata = fs.readFileSync(options.bibliography, 'utf8')
        const cite = new Cite(bibdata)

        const config = Cite.plugins.config.get('@csl')
        const citeproc = config.engine(cite.data, 'apa', 'en-US', 'html')
        citeproc.opt.development_extensions.wrap_url_and_doi = true

        // citations pass 1: generate and format all citations
        // note: text of previous citations may change when adding new one
        let citations: {[key: string]: CitationRef} = {}

        let pre: [string, number][] = []
        visit(tree, 'cite', (node) => {
            const [status, items] = citeproc.processCitationCluster(node.data.csl, pre, [])

            // forward any errors
            if (status.citation_errors.length > 0) {
                for (let i = 0; i <  status.citation_errors.length; i++) {
                    const err = status.citation_errors[i]
                    console.log(`citeproc: error processing citation: ${err}`)
                }

                throw new Error(`processing citation via citeproc failed: '${node.value}'`)
            }

            // add new entries and update existing ones
            for (let i = 0; i < items.length; i++) {
                const [index, html, ref] = items[i]

                const entry = citations[ref]
                if (entry) {        // update existing entry
                    entry.html = html
                } else {            // create new entry
                    citations[ref] = { index, html, ref }
                    pre.push([ref, index])

                    if (node.data.citeref) {
                        throw new Error(`citation reference already assigned: '${node.value}'`)
                    }

                    node.data.citeref = ref
                }
            }
        })

        // citations pass 2: replace 'cite' nodes with html nodes
        visit(tree, 'cite', (node) => {
            const citation = citations[node.data.citeref]
            const refs = node.data.csl.citationItems.map((x: any) => x.id)

            const hast = unified()
                .use(rehypeParse, {fragment: true})
                .parse(citation.html)

            // TODO:
            // - on hover: show details (title, authors, year) in tooltip
            // - can we support multiple citation links somehow?

            const newnode = h(`span.csl-ref#csl-ref-${node.data.citeref}`,
                h("a", {href: `#csl-entry-${refs[0]}`}, hast)
            )
            Object.assign(node, newnode)
        })

        // insert bibliography
        const [params, body] = citeproc.makeBibliography()

        visit(tree, 'bibliography', (node) => {
            // forward any errors
            if (params.bibliography_errors.length > 0) {
                for (let i = 0; i <  params.bibliography_errors.length; i++) {
                    const err = params.bibliography_errors[i]
                    console.log(`citeproc: error processing bibliography: ${err}`)
                }

                throw new Error(`processing bibliography via citeproc failed'`)
            }

            // TODO:
            // - add backrefs

            const proc = unified()
                .use(rehypeParse, {fragment: true});

            const entries = body.map((html: string, i: number) => {
                const entry = proc.parse(html);

                // trim whitespace nodes
                if (entry.children.length > 0) {
                    const first = entry.children[0]
                    const last = entry.children[entry.children.length - 1]

                    if (first.type == 'text' && /\s+/.test(first.value)) {
                        entry.children.shift()
                    }

                    if (last.type == 'text' && /\s+/.test(last.value)) {
                        entry.children.pop()
                    }
                }

                // transform root node into a node that we can work with
                const node: any = entry.children.length == 1
                    ? entry.children[0]
                    : h("div.csl-entry-container", entry.children)

                // set node ID to reference
                node.properties.id = `csl-entry-${params.entry_ids[i]}`

                return node
            })

            Object.assign(node, h("div.csl-bib-body", entries))
        })
    }
}
