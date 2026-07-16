// Workaround for https://github.com/vercel/ncc/issues/1173: ncc's ESM output
// emits bare `require("fs")` etc. for unprefixed node builtins, which fails at
// runtime in ESM scope. Define `require` via the createRequire import ncc
// already adds at the top of the bundle.
import { readFileSync, writeFileSync } from 'node:fs'

const path = 'dist/index.js'
const header =
  'import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";'
const src = readFileSync(path, 'utf8')
if (!src.startsWith(header)) {
  throw new Error(`Expected ${path} to start with the ncc createRequire import`)
}
writeFileSync(
  path,
  src.replace(
    header,
    `${header}\nconst require = __WEBPACK_EXTERNAL_createRequire(import.meta.url);`
  )
)
