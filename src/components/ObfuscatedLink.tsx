'use client'

import { useEffect } from "react"

type Props = {
  href: string,
  children?: JSX.Element,
  className?: string,
}

function deobfuscate(text: string): string {
  return Buffer.from(text, 'base64').toString('utf-8')
}

export default function ObfuscatedLink({ href, children, className }: Props) {
  useEffect(() => {
    var elem = document.getElementById("obflink") as HTMLAnchorElement;
    elem.href = deobfuscate(href);
  });

  return (
    <a href="" id="obflink" className={className}>
      {children}
    </a>
  )
}
