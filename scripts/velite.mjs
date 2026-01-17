import { build } from 'velite'

const dev = process.env.NODE_ENV !== 'production'

await build({
  watch: dev,
  clean: !dev,
})
