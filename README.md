Int32Array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array).


## Installation

``` bash
$ npm install validate.io-int32array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isInt32Array = require( 'validate.io-int32array' );
```

#### isInt32Array( value )

Validates if a value is an [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array).

``` javascript
var arr = new Int32Array( 10 );

var bool = isInt32Array( arr );
// returns true
```


## Examples

``` javascript
var isInt32Array = require( 'validate.io-int32array' );

console.log( isInt32Array( new Int32Array( 10 ) ) );
// returns true

console.log( isInt32Array( new Int8Array( 10 ) ) );
// returns false

console.log( isInt32Array( new Uint8Array( 10 ) ) );
// returns false

console.log( isInt32Array( new Uint8ClampedArray( 10 ) ) );
// returns false

console.log( isInt32Array( new Int16Array( 10 ) ) );
// returns false

console.log( isInt32Array( new Uint16Array( 10 ) ) );
// returns false

console.log( isInt32Array( new Uint32Array( 10 ) ) );
// returns false

console.log( isInt32Array( new Float32Array( 10 ) ) );
// returns false

console.log( isInt32Array( new Float64Array( 10 ) ) );
// returns false

console.log( isInt32Array( new Array( 10 ) ) );
// returns false

console.log( isInt32Array( {} ) );
// returns false

console.log( isInt32Array( null ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-int32array.svg
[npm-url]: https://npmjs.org/package/validate.io-int32array

[travis-image]: http://img.shields.io/travis/validate-io/int32array/master.svg
[travis-url]: https://travis-ci.org/validate-io/int32array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/int32array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/int32array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/int32array.svg
[dependencies-url]: https://david-dm.org/validate-io/int32array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/int32array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/int32array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/int32array.svg
[github-issues-url]: https://github.com/validate-io/int32array/issues
