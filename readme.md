# js-partial-option-of

[![Recent Version][npm-badge]][npm-url]
[![Travis CI - Build Status][travis-badge]][travis-url]
[![Coveralls - Code Coverage Status][cov-badge]][cov-url]
[![David - Dependencies][dep-badge]][dep-url]
[![David - DevDependencies][dev-dep-badge]][dev-dep-url]
[![Gitter - Repository Chat][chat-badge]][chat-url]

## Synopsis

A [partial][partial-link] to get the specific **option value** from the **options object** in [UMD][umd-link].

## Install

```
npm install js-partial-option-of
```

## Usage

 - AMD (e.g.: RequireJS)
 
 ```javascript
    define(['js-partial-option-of'], function(optionOf) {        
        optionOf('option', options);
        optionOf('default', options, false);
        optionOf('width.max-width', options, 1200);
        optionOf('.default.key', options, 'default-key-value');
    });
 ```
 
 - CommonJS (e.g.: NodeJS)
 
 ```javascript
    var optionOf = require('js-partial-option-of');
    
    optionOf('option', options);
    optionOf('default', options, false);
    optionOf('width.max-width', options, 1200);
    optionOf('.default.key', options, 'default-key-value');
  ```
 
 - Browser
 
 ```javascript
    // load the source from "node_modules/js-partial-option-of/dist/js-partial-option-of.js" - for development
    // or from "node_modules/js-partial-option-of/dist/js-partial-option-of.min.js" - for production
 
    var optionOf = js_partial_optionOf; // it is available in the global namespace
    
    optionOf('option', options);
    optionOf('default', options, false);
    optionOf('width.max-width', options, 1200);
    optionOf('.default.key', options, 'default-key-value');
  ```

## Documentation

Check the source [here](https://github.com/jsopenstd/js-partial-option-of/blob/master/src/js-partial-option-of.js)
since it is very well documented.

## Issues

If you find any bugs and other issues, check the
[GSDC Guide - Issues](https://github.com/openstd/general-software-development-contribution-guide#issues)
section on how to submit issues in a standardized way on
[the project's issues page](https://github.com/jsopenstd/js-partial-option-of/issues).

In case you have any suggestions regarding the project (features, additional capabilities, etc.), check the
[GSDC Guide - Suggestions](https://github.com/openstd/general-software-development-contribution-guide#suggestions)
section on how to submit suggestions in an easy, standardized way on
[the project's issues page](https://github.com/jsopenstd/js-partial-option-of/issues).

## Contribution

In order to contribute to this project, check the
[GSDC Guide](https://github.com/openstd/general-software-development-contribution-guide)
for an easy, standardized way on how to contribute to projects.

## Support

If you **by any means** find this project useful,
[consider supporting the organization](https://github.com/jsopenstd/jsopenstd/blob/master/support.md).

There are multiple options to support the project and the developers.
Any means of support is beneficial and helpful.

## License

[MIT](license.md) @ Richard King

[npm-badge]:     https://img.shields.io/npm/v/js-partial-option-of.svg
[npm-url]:       https://www.npmjs.com/package/js-partial-option-of

[travis-badge]:  https://travis-ci.org/jsopenstd/js-partial-option-of.svg?branch=master
[travis-url]:    https://travis-ci.org/jsopenstd/js-partial-option-of

[cov-badge]:     https://coveralls.io/repos/github/jsopenstd/js-partial-option-of/badge.svg?branch=master
[cov-url]:       https://coveralls.io/github/jsopenstd/js-partial-option-of

[dep-badge]:     https://david-dm.org/jsopenstd/js-partial-option-of.svg
[dep-url]:       https://david-dm.org/jsopenstd/js-partial-option-of

[dev-dep-badge]: https://david-dm.org/jsopenstd/js-partial-option-of/dev-status.svg
[dev-dep-url]:   https://david-dm.org/jsopenstd/js-partial-option-of#info=devDependencies

[chat-badge]:    https://badges.gitter.im/jsopenstd/js-partial-option-of.svg
[chat-url]:      https://gitter.im/jsopenstd/js-partial-option-of?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

[partial-link]:  https://github.com/jsopenstd/jsopenstd/blob/master/readme.md#partial 
[umd-link]:      https://github.com/jsopenstd/jsopenstd/blob/master/readme.md#umd 
