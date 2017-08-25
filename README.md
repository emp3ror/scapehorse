Scapehorse
=========

a small library providing utiltiy methods to escape and unescape HTML entities

following <a href="https://quickleft.com/blog/creating-and-publishing-a-node-js-module/">this tutorial</a>

## Installation

```shell
  npm install scapehorse --save
```

## Usage

```js
  var scapehorse = require('scapehorse')
      escape = scapehorse.escape,
      unescape = scapehorse.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);
```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release