# Chakra Plugin Starter

[![A Cubefuse Project](https://img.shields.io/badge/a_project_by-cubefuse-blue.svg?style=for-the-badge)](http://cubefuse.org)
[![Code Standard Style Compliant](https://img.shields.io/badge/code-standard-green.svg?style=for-the-badge)](https://github.com/standard/standard)
[![Readme Standard Style Compliant](https://img.shields.io/badge/readme-standard-green.svg?style=for-the-badge)](https://github.com/RichardLitt/standard-readme)
[![Travis CI](https://img.shields.io/travis/cubefuse/chakra-plugin-starter.svg?style=for-the-badge)](https://travis-ci.org/cubefuse/chakra-plugin-starter)

>  Starter kit for Chakra Plugins

## Table of Contents

- [Getting Started](#getting-started)
- [Setup](#setup)
- [Building](#building)
- [Testing](#testing)
- [Linting](#linting)
- [Documentation](#documentation)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Getting Started

This is a complete starter kit for Chakra plugins. This makes plugin development a breeze, with multi-platform UMD builds,
test framework and coverage reporting, linting, documentation generation already set up.

## Setup

```sh
git clone https://github.com/cubefuse/chakra-plugin-starter.git
cd chakra-plugin-starter
npm install
``` 

## Building

The code can be built with `npm run build`. This will build a UMD bundle that works on both Node.js and the browser.
The bundle is generated with Rollup, and will be created in the `dist` folder.

## Testing

This starter kit uses `mocha` as the unit testing framework. To run the tests and generate coverage reports, use
`npm run test` and `npm run coverage`. We have configured BDD-style assertions using `chai` along with `dirty-chai`, but
you are free to use any other assertion library and style.

## Linting

Our linting setup uses [JavaScript Standard Style](https://standardjs.com/), with some custom rules. You can lint your code with `npm run lint`,
and try to fix issues automatically with `npm run lint --fix`.

## Documentation

Code documentation can be built with `npm run docs`. The documentation would be built using Documentation.js. Please see
[this document](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md) to start
documenting your code this way.

## Maintainers

[@mprasanjith](https://github.com/mprasanjith)

## Contribute

We welcome your pull requests and bug reports.

## License

MIT © 2018 Cubefuse
