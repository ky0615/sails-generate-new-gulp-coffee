![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
# sails-generate-new-gulp
-----------------------------------------------
[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![Dependency Status][dependency-image]][dependency-url] [![MIT License][license-image]][license-url]

A gulp generator for Sails.js that works with sails lift.

## Install

```sh
$ npm install -g sails-generate-backend-gulp-coffee
$ npm install -g sails-generate-gulpfile-coffee
$ npm install -g sails-generate-frontend-gulp-coffee
$ npm install -g sails-generate-new-gulp-coffee

```

## .sailsrc

.sailsrc needs to be added to the working dir with the following:

```sh
{
    "generators": {
        "modules": {
            "new": "sails-generate-new-gulp-coffee",
            "frontend": "sails-generate-frontend-gulp-coffee",
            "backend": "sails-generate-backend-gulp-coffee",
            "gulpfile": "sails-generate-gulpfile-coffee"
        }
    }
}
```

## Usage

#### On the command line

```sh
sails new <project name>
```

#### In a node script

```CoffeeScript

generate = require "sails-generate"
scope = {}
generate require('sails-generate-new-gulp-coffee'), scope, (err)->
  throw err if err
  console.log scope
```


## Contributing to this generator

See `CONTRIBUTING.md`.

## License

**[MIT](./LICENSE)**
&copy; 2014 [Karnith](http://github.com/Karnith)

[Sails](http://sailsjs.org) is free and open-source under the [MIT License](http://sails.mit-license.org/).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/sails-generate-new-gulp-coffee
[npm-version-image]: http://img.shields.io/npm/v/sails-generate-new-gulp-coffee.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/sails-generate-new-gulp-coffee.svg?style=flat

[dependency-image]: https://gemnasium.com/ky0615/sails-generate-new-gulp-coffee.svg?style=flat
[dependency-url]: https://gemnasium.com/ky0615/sails-generate-new-gulp-coffee

[coverage-image]: http://img.shields.io/coveralls/ky0615/sails-generate-new-gulp-coffee/master.svg?style=flat
[coverage-url]: https://coveralls.io/r/ky0615/sails-generate-new-gulp-coffee?branch=master
