# @20minutes/content-slug

[![Build status](https://github.com/20minutes/content-slug/actions/workflows/tests.yml/badge.svg)](https://github.com/20minutes/content-slug/actions/workflows/tests.yml)
[![NPM](https://img.shields.io/npm/v/@20minutes/content-slug)](https://www.npmjs.com/package/@20minutes/content-slug)

URL slugification used by 20 Minutes for content URL.

## Compatibility

- Requires Node.js >= 22.

## Installation

```bash
yarn add @20minutes/content-slug
```

## Usage

```javascript
import { toContentSlug, unaccentize} from '@20minutes/content-slug'

toContentSlug('j'ai mangé des pommes et des poires et c'était bon !')
// mange-pommes-poires-bon

unaccentize('mangé')
// mange
```

## Slug Rules

`toContentSlug` applies the following transformations:

- lowercases the input
- replaces underscores with spaces before normalization
- removes diacritics such as `é`, `Å`, or `ç`
- removes a built-in list of common French stop words
- collapses punctuation and whitespace through `url-slug`
- keeps only the slug-safe output produced by `url-slug`
- truncates the final slug to 150 characters
- removes trailing hyphens after truncation

Examples:

```javascript
toContentSlug("le et de ou à")
// ""

toContentSlug("Bonjour!!!___test??")
// "bonjour-test"

toContentSlug("À l'école des Ångströms")
// "ecole-angstroms"

toContentSlug("🍕 Café 東京")
// "cafe"
```

`unaccentize` only removes diacritics. It does not slugify, trim, or remove punctuation.

## License

[The MIT License](./LICENSE)
