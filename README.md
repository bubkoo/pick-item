# pick-item

> Randomly sampling a item from an array.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/pick-item/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/pick-item/master.svg?style=flat-square)](https://travis-ci.org/mock-end/pick-item)
[![coverage:?](https://img.shields.io/coveralls/mock-end/pick-item/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/pick-item)


## Install

```
$ npm install --save pick-item 
```



## Usage

> For more use-cases see the [tests](https://github.com/mock-end/pick-item/blob/master/test/spec/index.js)

```js
var pickItem = require('pick-item');

// pickItem(array);

pickItem([1, 2, 3]); // => 2
pickItem([1]);       // => 1
pickItem([]);        // => undefined
pickItem();          // => undefined
pickItem(null);      // => null
```

## Related

- [pick-items](https://github.com/mock-end/pick-items) - Randomly sampling some items from an array. 
- [is-index](https://github.com/gearcase/is-index) - Checks if the given value is a valid array-like index.
- [is-length](https://github.com/gearcase/is-length) - Checks if the given value is a valid array-like length.
- [to-length](https://github.com/gearcase/to-length) - Converts value to an integer suitable for use as the length of an array-like object.
- [drop-left](https://github.com/gearcase/drop-left) - Creates a slice of array with n elements dropped from the beginning.
- [drop-right](https://github.com/gearcase/drop-right) - Creates a slice of array with n elements dropped from the end.
- [shuffle-arr](https://github.com/mock-end/shuffle-arr) - Randomize the order of the elements in an array or array-like object. 
- [is-array-like](https://github.com/gearcase/is-array-like) - Checks if the given value is an array or array-like object.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/pick-item/issues/new).
