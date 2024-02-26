'use strict'

const fs = require('fs')
const path = require('path')

const initCwd = process.env.INIT_CWD

if (initCwd) {
  const fileConfigObject = {
    extends: '@inigomarquinez/npm-package-json-lint-config-default'
  }

  // https://npmpackagejsonlint.org/docs/configuration#config-sources
  const fileName = '.npmpackagejsonlintrc'
  const filePath = path.join(process.env.INIT_CWD, fileName)

  // Posible config files
  // .npmpackagejsonlintrc
  // .npmpackagejsonlintrc.json
  // npmpackagejsonlint.config.js
  if (
    fs
      .readdirSync(process.env.INIT_CWD)
      .filter(
        file =>
          file.match(
            /^(npmpackagejsonlint\.config\.js|\.npmpackagejsonlintrc(\.json)?)$/
          ) !== null
      ).length === 0
  ) {
    fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
    console.info(`\x1b[36m ${fileName} created \x1b[0m`)
  } else {
    console.info(
      `\x1b[33m npm-package-json-lint configuration file already exists, skipping creation. Remember to extend '@inigomarquinez/npm-package-json-lint-config'. \x1b[0m`
    )
  }
} else {
  console.error('\x1b[31m INIT_CWD environment variable is not defined \x1b[0m')
}
