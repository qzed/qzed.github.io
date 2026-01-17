'use client'

import * as runtime from 'react/jsx-runtime'
import dynamic from 'next/dynamic'

const components = {
  EqRef: dynamic(() => import('./blog/EqRef')),
  Note: dynamic(() => import('./blog/Note')),
  Counter: dynamic(() => import('./blog/Counter')),
  KatexMath: dynamic(() => import('./blog/KatexMath')),
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

export function Mdx({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)
  // eslint-disable-next-line react-hooks/static-components
  return <MDXContent components={components} />
}
