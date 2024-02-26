# @inigomarquinez/npm-package-json-lint-config-default <!-- omit in toc -->

[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license-link]

> [!NOTE]
> @inigomarquinez opinionated shareable configuration for [`npm-package-json-lint`][npm-package-json-lint-link].

## 📖 Table of Contents <!-- omit in toc -->

- [Installation](#📦-installation)
- [Documentation](#📚-documentation)
- [Custom rules](#📏-custom-rules)
- [Contributing](#🧩-contributing)
- [Changelog](#📝-changelog)
- [License](#©️-license)

## 📦 Installation

Install this package as a `devDependencies` in your project:

```sh
# npm
npm install @inigomarquinez/npm-package-json-lint-config-default --save-dev

# Yarn
yarn add @inigomarquinez/npm-package-json-lint-config-default --dev
```

After installing it, if a configuration file does not already exist, a `.npmpackagejsonlintrc` file will be created automatically in the project's root folder with the following configuration:

```json
{
  "extends": [
    "@inigomarquinez/npm-package-json-lint-config-default"
  ]
}
```

## 📚 Documentation

Read the [npm-package-json-lint docs][npm-package-json-lint-docs-link] for more information. You can find specific information about sharing configurations [here][npm-package-json-lint-sharing-configurations-link].

## 📏 Custom rules

This library extends the configuration defined in [npm-package-json-lint-config-default package][npm-package-json-lint-config-default-link] and customizes the following rules:

| Rule | Custom value |
| ------ | ------------ |
| [require-description][npm-package-json-lint-rule-require-description-link] | `error` |
| [require-license][npm-package-json-lint-rule-require-license-link] | `error` |
| [require-repository][npm-package-json-lint-rule-require-repository-link] | `error` |
| [no-repeated-dependencies][npm-package-json-lint-rule-no-repeated-dependencies-link] | `error` |
| [prefer-alphabetical-dependencies][npm-package-json-lint-rule-prefer-alphabetical-dependencies-link] | `error` |
| [prefer-alphabetical-devDependencies][npm-package-json-lint-rule-prefer-alphabetical-devDependencies-link] | `error` |
| [prefer-alphabetical-bundledDependencies][npm-package-json-lint-rule-prefer-alphabetical-bundledDependencies-link] | `error` |
| [prefer-alphabetical-optionalDependencies][npm-package-json-lint-rule-prefer-alphabetical-optionalDependencies-link] | `error` |
| [prefer-alphabetical-peerDependencies][npm-package-json-lint-rule-prefer-alphabetical-peerDependencies-link] | `error` |
| [description-format][npm-package-json-lint-rule-description-format-link] | `error` |
| [prefer-property-order][npm-package-json-lint-rule-prefer-property-order-link] | `error` |
| [no-duplicate-properties][npm-package-json-lint-rule-no-duplicate-properties-link] | `error` |


If you are extending this library but you need to override a rule to adapt it to your needs, your `.npmpackagejsonlintrc` file should look like the example below. In that example, all shared rules will be used, but `description-format` will be turned off:

```json
{
  "extends": "@inigomarquinez/npm-package-json-lint-config-default",
  "rules": {
    "description-format": "off"
  }
}
```

## 🧩 Contributing

If you are interested in helping contribute, please open an [issue][issue-link] or [pull request][pull-request-link].

## 📝 Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.

## ©️ License

Distributed under the MIT License. See [LICENSE][license-link] for more information.


<!-- links -->

[changelog-link]: ./CHANGELOG.md
[issue-link]: https://github.com/inigomarquinez/base-configs/issues
[license-link]: ./LICENSE
[npm-link]: https://www.npmjs.com/package/@inigomarquinez/npm-package-json-lint-config-default
[npm-package-json-lint-docs-link]: https://npmpackagejsonlint.org/
[npm-package-json-lint-link]: https://github.com/tclindner/npm-package-json-lint
[npm-package-json-lint-rule-require-description-link]: https://npmpackagejsonlint.org/docs/rules/required-node/require-description
[npm-package-json-lint-rule-require-license-link]: https://npmpackagejsonlint.org/docs/rules/required-node/require-license
[npm-package-json-lint-rule-require-repository-link]: https://npmpackagejsonlint.org/docs/rules/required-node/require-repository
[npm-package-json-lint-rule-no-repeated-dependencies-link]: https://npmpackagejsonlint.org/docs/rules/dependencies/no-repeated-dependencies
[npm-package-json-lint-rule-prefer-alphabetical-dependencies-link]: https://npmpackagejsonlint.org/docs/rules/dependencies/prefer-alphabetical-dependencies
[npm-package-json-lint-rule-prefer-alphabetical-devDependencies-link]: https://npmpackagejsonlint.org/docs/rules/dependencies/prefer-alphabetical-devDependencies
[npm-package-json-lint-rule-prefer-alphabetical-bundledDependencies-link]: https://npmpackagejsonlint.org/docs/rules/dependencies/prefer-alphabetical-bundledDependencies
[npm-package-json-lint-rule-prefer-alphabetical-optionalDependencies-link]: https://npmpackagejsonlint.org/docs/rules/dependencies/prefer-alphabetical-optionalDependencies
[npm-package-json-lint-rule-prefer-alphabetical-peerDependencies-link]: https://npmpackagejsonlint.org/docs/rules/dependencies/prefer-alphabetical-peerDependencies
[npm-package-json-lint-rule-description-format-link]: https://npmpackagejsonlint.org/docs/rules/format/description-format
[npm-package-json-lint-rule-prefer-property-order-link]: https://npmpackagejsonlint.org/docs/rules/package-json-properties/prefer-property-order
[npm-package-json-lint-rule-no-duplicate-properties-link]: https://npmpackagejsonlint.org/docs/rules/package-json-properties/no-duplicate-properties
[npm-package-json-lint-rules-link]: https://npmpackagejsonlint.org/docs/rules
[npm-package-json-lint-sharing-configurations-link]: https://npmpackagejsonlint.org/docs/configuration#shareable-config
[pull-request-link]: https://github.com/inigomarquinez/base-configs/pulls
[npm-package-json-lint-config-default-link]: https://github.com/tclindner/npm-package-json-lint-config-default

<!-- badges -->

[license-badge]: https://img.shields.io/github/license/inigomarquinez/base-configs?style=flat-square&labelColor=292a44&color=663399
[npm-badge]: https://img.shields.io/npm/v/@inigomarquinez/npm-package-json-lint-config-default?style=flat-square&labelColor=292a44&color=663399
