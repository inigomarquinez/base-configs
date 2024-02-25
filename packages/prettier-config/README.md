# @inigomarquinez/prettier-config <!-- omit in toc -->

[![npm package][npm-badge]][npm-link]
[![license MIT][license-badge]][license-link]

> [!NOTE]
> @inigomarquinez opinionated shareable configuration for [`prettier`][prettier-link].

## 📖 Table of Contents <!-- omit in toc -->

- [Installation](#📦-installation)
- [Documentation](#📚-documentation)
- [Custom configuration](#📚-custom-configuration)
- [Contributing](#🧩-contributing)
- [Changelog](#📝-changelog)
- [License](#©️-license)

## 📦 Installation

Install this package as a `devDependencies` in your project:

```sh
# npm
npm install @inigomarquinez/prettier-config --save-dev

# Yarn
yarn add @inigomarquinez/prettier-config --dev
```

After installing it, a `.prettierrc` file will be created automatically in the project's root folder with the following configuration:

```json
"@inigomarquinez/prettier-config"
```

> [!WARNING]
> This method does **NOT** offer a way to _extend_ the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a `.prettierrc.js` file and export the modifications, e.g:
>
> ```js
> module.exports = {
>   ...require('@inigomarquinez/prettier-config'),
>   // Add custom options bellow
>   semi: true
> }
> ```

## 📚 Documentation

Read the [Prettier docs][prettier-docs-link] for more information. [Here][prettier-sharing-configurations-link] you can find specific information about sharing configurations.

## 📏 Custom options

The library customises the following options. All other options take their default value as defined [here][prettier-options-link].

| Option | Custom value |
| ------ | ------------ |
| [arrowParens][prettier-option-arrow-parens-link] | `'avoid'` |
| [experimentalTernaries][prettier-option-experimental-ternaries-link] | `true` |
| [jsxSingleQuote][prettier-option-jsx-single-quote-link] | `true` |
| [singleAttributePerLine][prettier-option-single-attribute-per-line-link] | `true` |
| [singleQuote][prettier-option-single-quote-link] | `true` |

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
[npm-link]: https://www.npmjs.com/package/@inigomarquinez/prettier-config
[prettier-docs-link]: https://prettier.io
[prettier-link]: https://github.com/prettier/prettier
[prettier-option-arrow-parens-link]: https://prettier.io/docs/en/options.html#arrow-function-parentheses
[prettier-option-experimental-ternaries-link]: https://prettier.io/docs/en/options.html#experimental-ternaries
[prettier-option-jsx-single-quote-link]: https://prettier.io/docs/en/options.html#jsx-quotes
[prettier-option-single-attribute-per-line-link]: https://prettier.io/docs/en/options.html#single-attribute-per-line
[prettier-option-single-quote-link]: https://prettier.io/docs/en/options.html#quotes
[prettier-options-link]: https://prettier.io/docs/en/options.html
[prettier-sharing-configurations-link]: https://prettier.io/docs/en/configuration#sharing-configurations
[pull-request-link]: https://github.com/inigomarquinez/base-configs/pulls

<!-- badges -->

[license-badge]: https://img.shields.io/github/license/inigomarquinez/base-configs?style=flat-square&labelColor=292a44&color=663399
[npm-badge]: https://img.shields.io/npm/v/@inigomarquinez/prettier-config?style=flat-square&labelColor=292a44&color=663399
