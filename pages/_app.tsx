import type { AppProps } from 'next/app'
import '../styles/_globals.scss'

import '@fontsource/playfair-display'
import '@fontsource/lora'
import '@fontsource/raleway'
import '@fontsource/source-code-pro'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
