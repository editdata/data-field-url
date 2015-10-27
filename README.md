# data-field-string

## API

### createURLField

Create a virtual-dom url data-field for use with [data-ui](https://github.com/editdata/data-ui).


**Parameters**

-   `h` **function** virtual-dom `h` function

-   `properties` **Object** an options object, including any properties you can pass to virtual-dom/h
    -   `properties.display` **Boolean** true for display mode, default is false for input mode

    -   `properties.value` **String** any url

-   `value` **String** any url



**Examples**

```javascript
var createURLField = require('data-field-string')

createURLField(h, { onclick: function (e){} }, 'example string')
```




## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install data-field-string --save
```

## Tests

```sh
npm install
npm test
```

## Dependencies

-   [xtend](https://github.com/Raynos/xtend): extend like a boss

## Dev Dependencies

-   [budo](https://github.com/mattdesl/budo): a browserify server for rapid prototyping
-   [documentation-readme](https://github.com/documentationjs/documentation-readme): inject documentation into your README.md
-   [standard](https://github.com/feross/standard): JavaScript Standard Style
-   [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha's spec reporter
-   [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
-   [virtual-raf](https://github.com/yoshuawuyts/virtual-raf): Create a RAF loop for virtual-dom

## See also

-   [data-fields](https://github.com/editdata/data-fields) – all data fields packaged together.
-   [data-ui](https://github.com/editdata/data-ui) – a collection of modules for managing data.

## License

[MIT](LICENSE.md)
