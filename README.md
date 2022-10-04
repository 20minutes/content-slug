# @20minutes/content-slug

[![Build status](https://github.com/20minutes/content-slug/actions/workflows/tests.yml/badge.svg)](https://github.com/20minutes/content-slug/actions/workflows/tests.yml)
[![NPM](https://img.shields.io/npm/v/@20minutes/content-slug)](https://www.npmjs.com/package/@20minutes/content-slug)

URL slugification used by 20 Minutes for content URL.

## Installation

```bash
npm install @20minutes/content-slug
```

## Usage

```javascript
import { toContentSlug, unaccentize} from '@20minutes/content-slug'

toContentSlug('j'ai mangé des pommes et des poires et c'était bon !')
// mange-pommes-poires-bon

unaccentize('mangé')
// mange
```

## License

[The MIT License](./LICENSE)
