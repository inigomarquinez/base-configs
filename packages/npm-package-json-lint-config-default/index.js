'use strict'

// https://npmpackagejsonlint.org/docs/rules
module.exports = {
  extends: 'npm-package-json-lint-config-default',
  rules: {
    // Require node rules
    'require-description': 'error',
    'require-license': 'error',
    'require-repository': 'error',
    // Dependency rules
    'no-repeated-dependencies': 'error',
    'prefer-alphabetical-dependencies': 'error',
    'prefer-alphabetical-devDependencies': 'error',
    'prefer-alphabetical-bundledDependencies': 'error',
    'prefer-alphabetical-optionalDependencies': 'error',
    'prefer-alphabetical-peerDependencies': 'error',
    // Format rules
    'description-format': ['error', {
      'requireCapitalFirstLetter': true,
      'requireEndingPeriod': true
    }],
    // Package.json property rules
    'prefer-property-order': ['error', []],
    'no-duplicate-properties': 'error'
  }
}
