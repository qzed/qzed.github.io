'use client'

import { ReactNode, useEffect, useId } from "react";

type Props = {
  href: string,
  children?: ReactNode,
  className?: string,
  title?: string,
}

function deobfuscate(text: string): string {
  return Buffer.from(text, 'base64').toString('utf-8')
}

export default function ObfuscatedLink({ href, children, className, title }: Props) {
  const id = useId();

  useEffect(() => {
    var elem = document.getElementById(id) as HTMLAnchorElement;
    elem.href = deobfuscate(href);
  });

  return (
    <a href="" id={id} className={className} title={title} aria-label={title}>
      {children}
    </a>
  )
}
