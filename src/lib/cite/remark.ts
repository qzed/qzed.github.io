import { CitePluginOptions } from "@benrbray/remark-cite";
import { citeSyntax } from "@benrbray/micromark-extension-cite";
import { citeFromMarkdown, citeToMarkdown } from "@benrbray/mdast-util-cite";

import { codes } from 'micromark-util-symbol/codes.js'
import { visit } from 'unist-util-visit'


const bibInsertMicromark = {
    flow: {
        [codes.leftSquareBracket]: {
            tokenize: tokenizeBibInsert,
        },
    },
}

function tokenizeBibInsert(effects: any, ok: any, nok: any) {
    const expected = "[^bibliography]"
    let index = 0

    return parse

    function parse(code: number) {
        if (code === codes.leftSquareBracket) {
            effects.enter('bibliography')
        }

        if (code === codes.eof || index >= expected.length) {
            return nok(code)
        }

        if (code !== expected.charCodeAt(index)) {
            return nok(code)
        }

        index += 1
        effects.consume(code)

        if (code === codes.rightSquareBracket) {
            effects.exit('bibliography')
            return ok
        }

        return parse
    }
}

const bibInsertFromMarkdown = {
    enter: {
        bibliography: enterBibliography
    },
    exit: {
        bibliography: exitBibliography
    },
}

function enterBibliography(this: any, token: any) {
    this.enter({
        type: 'bibliography',
        value: null,
        data: {}
    }, token);
}

function exitBibliography(this: any, token: any) {
    this.exit(token)
}

const bibInsertToMarkdown = {
    unsafe: [
        { character: '[', inConstruct: ["bibliography"] },
        { character: ']', inConstruct: ["bibliography"] },
    ],
    handlers: {
        bibliography: (node: any, _: any, context: any) => {
            return "[^bibliography]"
        }
    },
}


const locators: {[label: string]: string} = {
  'book': 'book',
  'bk.': 'book',
  'bks.': 'book',
  'chapter': 'chapter',
  'chap.': 'chapter',
  'chaps.': 'chapter',
  'column': 'column',
  'col.': 'column',
  'cols.': 'column',
  'figure': 'figure',
  'fig.': 'figure',
  'figs.': 'figure',
  'folio': 'folio',
  'fol.': 'folio',
  'fols.': 'folio',
  'number': 'number',
  'no.': 'number',
  'nos.': 'number',
  'line': 'line',
  'l.': 'line',
  'll.': 'line',
  'note': 'note',
  'n.': 'note',
  'nn.': 'note',
  'opus': 'opus',
  'op.': 'opus',
  'opp.': 'opus',
  'page': 'page',
  'p.': 'page',
  'pp.': 'page',
  'paragraph': 'paragraph',
  'para.': 'paragraph',
  'paras.': 'paragraph',
  'part': 'part',
  'pt.': 'part',
  'pts.': 'part',
  'section': 'section',
  'sec.': 'section',
  'secs.': 'section',
  'sub verbo': 'sub verbo',
  's.v.': 'sub verbo',
  's.vv.': 'sub verbo',
  'verse': 'verse',
  'v.': 'verse',
  'vv.': 'verse',
  'volume': 'volume',
  'vol.': 'volume',
  'vols.': 'volume',
  '¶': 'paragraph',
  '¶¶': 'paragraph',
  '§': 'section',
  '§§': 'section',
}

function parseBracedString(str: string) {
    let depth = 0

    let start = str.indexOf('{')
    let end = 0

    for (let i = start; i < str.length; i++) {
        if (str.charAt(i) == '{') {
            depth += 1
        } else if (str.charAt(i) == '}') {
            depth -= 1
        }

        if (depth == 0) {
            end = i
            break;
        }
    }

    if (depth != 0) {
        throw new Error('Unbalanced curly braces')
    }

    return {
        pfx: str.slice(0, start),
        str: str.slice(start + 1, end),
        sfx: str.slice(end + 1),
    }
}

function fixupKey(key: string) {
    if (key.startsWith('{')) {
        const {str, sfx} = parseBracedString(key)

        return {
            key: str,
            suffix: sfx,
        }

    } else if (key.includes('{')) {
        const ix = key.indexOf('{')

        return {
            key: key.slice(0, ix),
            suffix: key.slice(ix),
        }
    }

    return {
        key: key,
        suffix: '',
    }
}

function tryParseLabel(str: string) {
    // try to extract a potential label identifier
    let match = str.match(/([a-z]+)/)
    let label = undefined

    // if we have a match, check it against all known labels
    if (match) {
        let ident = match[0]

        // include trailing point in identifier (for abbreviations), if we have one
        if (str.charAt(ident.length) == '.') {
            ident = str.slice(0, ident.length + 1)
        }

        label = locators[ident]

        // if label is valid, return it
        if (label) {
            return {
                label: locators[ident],
                remainder: str.slice(ident.length)
            }
        }
    }

    // no valid label found: return full input string as remainder
    return {
        label: undefined,
        remainder: str,
    }
}

function tryParseLocator(str: string) {
    let start = 0;

    // skip leading whitespace
    while (/\s/.test(str.charAt(start))) {
        start += 1
    }

    const match = str.slice(start).match(/(\d|-|)+/g)

    if (match) {
        const locator = match[0]

        return {
            locator,
            remainder: str.slice(start + locator.length)
        }
    }

    return {
        locator: undefined,
        remainder: str,
    }
}

function parseSuffix(str: string | undefined) {
    if (!str) {
        return { label: undefined, locator: undefined, suffix: undefined }
    }

    let i = 0;

    // skip leading whitespace
    while (/\s/.test(str.charAt(i))) {
        i += 1
    }

    // skip optional comma
    if (str.charAt(i) == ',') {
        i += 1
    }

    // skip further whitespace
    while (/\s/.test(str.charAt(i))) {
        i += 1
    }

    // try to parse locator
    if (str.charAt(i) == '{') {
        // everything until closing brace is locator and locator argument,
        // everything after is suffix

        const {str: loctxt, sfx: suffix} = parseBracedString(str.slice(i))
        const {label, remainder: locator} = tryParseLabel(loctxt)

        return {
            label: label || (locator ? 'page' : undefined),
            locator: locator?.trim() || undefined,
            suffix: suffix || undefined,
        }

    } else {
        // we have either a locator or a suffix
        let j = i

        // scan until comma, everything after comma is considered suffix
        while (j < str.length && str.charAt(j) != ',') {
            j += 1
        }

        // try to parse a label and locator
        const maybeLabelAndLocator = str.slice(i, j)
        const suffix = str.slice(j)

        const {label, remainder: maybeLocator} = tryParseLabel(maybeLabelAndLocator)
        const {locator, remainder: locatorSuffix} = tryParseLocator(maybeLocator)

        if (locator) {
            return {
                label: label || 'page',
                locator: locator?.trim() || undefined,
                suffix: (locatorSuffix + suffix) || undefined,
            }
        } else {
            return {
                label: undefined,
                locator: undefined,
                suffix: str,
            }
        }
    }

}

function mapToCslEntry(x: any) {
    // move any locators appended to key to suffix and handle keys enclosed in
    // curly braces
    const {key, suffix: keySuffix} = fixupKey(x.key)

    // parse locator from suffix
    const {label, locator, suffix} = parseSuffix(keySuffix + (x.suffix || ''))

    return {
        id: key,
        prefix: x.prefix || undefined,
        label: label,
        locator: locator,
        suffix: suffix,
        'suppress-author': x.suppressAuthor || undefined,
    }
}


export function remarkCite(this: any, options: Partial<CitePluginOptions>) {
    var data = this.data()

    function add(field: string, value: any) {
        if (data[field]) data[field].push(value)
        else data[field] = [value]
    }

    // extensions for citations
    add('micromarkExtensions', citeSyntax(options.syntax || {}));
    add('fromMarkdownExtensions', citeFromMarkdown);
    add('toMarkdownExtensions', citeToMarkdown(options.toMarkdown || {}));

    // extensions for bibliography insert
    add('micromarkExtensions', bibInsertMicromark);
    add('fromMarkdownExtensions', bibInsertFromMarkdown);
    add('toMarkdownExtensions', bibInsertToMarkdown);

    return (tree: any, file: any) => {
        visit(tree, 'cite', (node) => {
            const csl = {
                properties: {
                    noteIndex: 0
                },
                citationItems: node.data.citeItems.map(mapToCslEntry),
            }

            node.data = {
                csl
            }
        })
    }
}
