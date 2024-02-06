import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '75ch',
      },
      typography: {
        DEFAULT: {
          css: {
            '.task-list-item input[type="checkbox"]': {
              'margin-top': '0px !important',
              'margin-bottom': '0px !important',
            },
            '.data-footnote-backref': {
              'text-decoration': 'none'
            },
            '.data-footnote-backref:hover': {
              'text-decoration': 'underline'
            },
            'sup > a[data-footnote-ref="true"]': {
              'text-decoration': 'none'
            },
            'sup > a[data-footnote-ref="true"]:hover': {
              'text-decoration': 'underline'
            },
          }
        }
      }
    }
  }
}
export default config
