[npm]: https://img.shields.io/npm/v/snowpack-plugin-coffeescript
[npm-url]: https://www.npmjs.com/package/snowpack-plugin-coffeescript
[size]: https://packagephobia.now.sh/badge?p=snowpack-plugin-coffeescript
[size-url]: https://packagephobia.now.sh/result?p=snowpack-plugin-coffeescript

[![npm][npm]][npm-url]
[![size][size]][size-url]
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

# snowpack-plugin-coffeescript

Snowpack plugin the compiles CoffeeScript2 into ES5 JavaScript.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Snowpack v2.0.0+.

## Install

Using npm:

```console
npm install --save-dev snowpack-plugin-coffeescript
```

## Usage

Create a `snowpack.config.js` [configuration file](https://www.snowpack.dev/reference/configuration) and insert the `'snowpack-plugin-coffeescript'` with the `plugin` property's array.

```js
const dsv = require('snowpack-plugin-coffeescript');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['snowpack-plugin-coffeescript'],
};
```

## Meta

[LICENSE (MIT)](./LICENSE.md)
