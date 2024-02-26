# @inigomarquinez/base-configs <!-- omit in toc -->

[![license MIT][license-badge]][license-link]

> [!NOTE]
> A collection of opinionated base configs for code quality and linting tools.

## 📖 Table of Contents <!-- omit in toc -->

- [About](#ℹ️-about)
- [Usage](#📄-usage)
- [Available Configurations](#📦-available-configurations)
- [Contributing](#🧩-contributing)
- [Changelog](#📝-changelog)
- [License](#©️-license)


## ℹ️ About

This **monorepo** provides a collection of shareable configurations for **building, linting, testing, formatting, and releasing tools** to make configurations consistent across projects and provide an easy configuration mechanism.

It is inspired by [wayofdev npm-shareable-configs][wayofdev-npm-shareable-configs-link] and [demartini base-configs][demartini-base-configs-link] projects.


## 📄 Usage

Check the `README` of each package in the [`packages`][packages-link] directory for specific usage instructions.


## 📦 Available Configurations

| Tool | Package | Version |
| ---- | ------- | ------- |
| [npm-package-json-lint][npm-package-json-lint-link] | [@inigomarquinez/npm-package-json-lint-config-default](./packages/npm-package-json-lint-config-default) | [![@inigomarquinez/npm-package-json-lint-config-default][inigomarquinez-npm-package-json-lint-config-default-badge]][inigomarquinez-npm-package-json-lint-config-default-npm] |
| [Prettier][prettier-link] | [@inigomarquinez/prettier-config](./packages/prettier-config) | [![@inigomarquinez/prettier-config][inigomarquinez-prettier-config-badge]][inigomarquinez-prettier-config-npm] |
<!-- | [Browserslist][browserslist-link] | [@inigomarquinez/browserslist-config](./packages/browserslist-config) | [![@inigomarquinez/browserslist-config][browserslist-badge]][browserslist-npm] |
| [commitLint][commitlint-link] | [@inigomarquinez/commitlint-config](./packages/commitlint-config) | [![@inigomarquinez/commitlint-config][commitlint-badge]][commitlint-npm] |
| [ESLint][eslint-link] | [@inigomarquinez/eslint-config](./packages/eslint-config) | [![@inigomarquinez/eslint-config][eslint-badge]][eslint-npm] |
| [MarkdownLint][markdownlint-link] | [@inigomarquinez/markdownlint-config](./packages/markdownlint-config) | [![@inigomarquinez/markdownlint-config][markdownlint-badge]][markdownlint-npm] |
| [semantic-release][semantic-release-link] | [@inigomarquinez/semantic-release-config](./packages/semantic-release-config) | [![@inigomarquinez/semantic-release-config][semantic-release-badge]][semantic-release-npm] |
| [stylelint][stylelint-link] | [@inigomarquinez/stylelint-config](./packages/stylelint-config) | [![@inigomarquinez/stylelint-config][stylelint-badge]][stylelint-npm] | -->


## 🧩 Contributing

If you are interested in helping contribute, please open an [issue][issue-link] or [pull request][pull-request-link].


## 📝 Changelog

See [CHANGELOG][changelog-link] for a human-readable history of changes.


## ©️ License

Distributed under the MIT License. See [LICENSE][license-link] for more information.


<!-- links -->

[changelog-link]: ./CHANGELOG.md
[contributing-link]: https://github.com/inigomarquinez/.github/blob/main/CONTRIBUTING.md
[demartini-base-configs-link]: https://github.com/demartini/base-configs
[issue-link]: https://github.com/inigomarquinez/base-configs/issues
[license-link]: ./LICENSE
[packages-link]: ./packages
[pull-request-link]: https://github.com/inigomarquinez/base-configs/pulls
[wayofdev-npm-shareable-configs-link]: https://github.com/wayofdev/npm-shareable-configs

<!-- badges -->

[license-badge]: https://img.shields.io/github/license/inigomarquinez/base-configs?style=flat-square&labelColor=292a44&color=663399

<!-- available configurations table -->
<!-- [browserslist-badge]: https://img.shields.io/npm/v/@inigomarquinez/browserslist-config?style=flat-square&labelColor=292a44&color=663399
[browserslist-link]: https://github.com/browserslist/browserslist
[browserslist-npm]: https://www.npmjs.com/package/@inigomarquinez/browserslist-config

[commitlint-badge]: https://img.shields.io/npm/v/@inigomarquinez/commitlint-config?style=flat-square&labelColor=292a44&color=663399
[commitlint-link]: https://github.com/conventional-changelog/commitlint
[commitlint-npm]: https://www.npmjs.com/package/@inigomarquinez/commitlint-config

[eslint-badge]: https://img.shields.io/npm/v/@inigomarquinez/eslint-config?style=flat-square&labelColor=292a44&color=663399
[eslint-link]: https://github.com/eslint/eslint
[eslint-npm]: https://www.npmjs.com/package/@inigomarquinez/eslint-config

[markdownlint-badge]: https://img.shields.io/npm/v/@inigomarquinez/markdownlint-config?style=flat-square&labelColor=292a44&color=663399
[markdownlint-link]: https://github.com/DavidAnson/markdownlint
[markdownlint-npm]: https://www.npmjs.com/package/@inigomarquinez/markdownlint-config -->

[npm-package-json-lint-link]: https://github.com/tclindner/npm-package-json-lint
[inigomarquinez-npm-package-json-lint-config-default-npm]: https://www.npmjs.com/package/@inigomarquinez/npm-package-json-lint-config-default
[inigomarquinez-npm-package-json-lint-config-default-badge]: https://img.shields.io/npm/v/@inigomarquinez/npm-package-json-lint-config-default?style=flat-square&labelColor=292a44&color=663399

[prettier-link]: https://github.com/prettier/prettier
[inigomarquinez-prettier-config-badge]: https://img.shields.io/npm/v/@inigomarquinez/prettier-config?style=flat-square&labelColor=292a44&color=663399
[inigomarquinez-prettier-config-npm]: https://www.npmjs.com/package/@inigomarquinez/prettier-config

<!-- [semantic-release-badge]: https://img.shields.io/npm/v/@inigomarquinez/semantic-release-config?style=flat-square&labelColor=292a44&color=663399
[semantic-release-link]: https://github.com/semantic-release/semantic-release
[semantic-release-npm]: https://www.npmjs.com/package/@inigomarquinez/semantic-release-config

[stylelint-badge]: https://img.shields.io/npm/v/@inigomarquinez/stylelint-config?style=flat-square&labelColor=292a44&color=663399
[stylelint-link]: https://github.com/stylelint/stylelint
[stylelint-npm]: https://www.npmjs.com/package/@inigomarquinez/stylelint-config -->
