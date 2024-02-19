'use strict'

const fs = require('fs')
const path = require('path')

const initCwd = process.env.INIT_CWD

if (initCwd) {
  const fileConfigObject = '@inigomarquinez/prettier-config'

  // https://prettier.io/docs/en/configuration.html
  const fileName = '.prettierrc'
  const filePath = path.join(process.env.INIT_CWD, fileName)

  // Posible config files
  // .prettierrc
  // .prettierrc.json
  // .prettierrc.yml
  // .prettierrc.yaml
  // .prettierrc.json5
  // .prettierrc.js
  // .prettierrc.mjs
  // .prettierrc.cjs
  // .prettierrc.toml
  // prettier.config.js
  // prettier.config.mjs
  // prettier.config.cjs
  if (
    fs
      .readdirSync(process.env.INIT_CWD)
      .filter(
        file =>
          file.match(
            /^(prettier\.config\.(js|cjs|mjs)|\.prettierrc(\.(json|json5|yaml|yml|js|cjs|mjs))?)$/
          ) !== null
      ).length === 0
  ) {
    fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
    console.info(`\x1b[36m ${fileName} created \x1b[0m`)
  } else {
    console.info(
      `\x1b[33m prettier configuration file already exists, skipping creation. Remember to extend '@inigomarquinez/prettier-config'. \x1b[0m`
    )
  }
} else {
  console.error('\x1b[31m INIT_CWD environment variable is not defined \x1b[0m')
}
