'use client'

import { useEffect } from "react"

type Props = {
  href: string,
  children: JSX.Element,
}

function deobfuscate(text: string): string {
  return Buffer.from(text, 'base64').toString('utf-8')
}

export default function ObfuscatedLink({ href, children }: Props) {
  useEffect(() => {
    var elem = document.getElementById("obflink") as HTMLAnchorElement;
    elem.href = deobfuscate(href);
  });

  return (
    <a href="" id="obflink">
      {children}
    </a>
  )
}
