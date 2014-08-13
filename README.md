![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
# sails-generate-new-gulp
-----------------------------------------------
[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![Dependency Status][dependency-image]][dependency-url] [![MIT License][license-image]][license-url]

A gulp generator for Sails.js that works with sails lift.

## Install

```sh
$ npm install -g sails-generate-backend-gulp
$ npm install -g sails-generate-gulpfile
$ npm install -g sails-generate-frontend-gulp
$ npm install -g sails-generate-new-gulp

```

## .sailsrc

.sailsrc needs to be added to the working dir with the following:

```sh
{
    "generators": {
        "modules": {
            "new": "sails-generate-new-gulp",
            "frontend": "sails-generate-frontend-gulp",
            "backend": "sails-generate-backend-gulp",
            "gulpfile": "sails-generate-gulpfile"
        }
    }
}
```

## Usage

#### On the command line

```sh
sails generate sails-generate-new-gulp
```

#### In a node script

```javascript
var generate = require('sails-generate');
var scope = {};
generate(require('sails-generate-new-gulp'), scope, function (err) {
	if (err) throw err;

	// Log output available in `scope` for your enjoyment:
	console.log(scope);
});
```


## Contributing to this generator

See `CONTRIBUTING.md`.

## License

**[MIT](./LICENSE)**
&copy; 2014 [Karnith](http://github.com/Karnith)

[Sails](http://sailsjs.org) is free and open-source under the [MIT License](http://sails.mit-license.org/).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/sails-generate-new-gulp
[npm-version-image]: http://img.shields.io/npm/v/sails-generate-new-gulp.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/sails-generate-new-gulp.svg?style=flat

[dependency-image]: https://gemnasium.com/Karnith/sails-generate-new-gulp.svg?style=flat
[dependency-url]: https://gemnasium.com/Karnith/sails-generate-new-gulp

[coverage-image]: http://img.shields.io/coveralls/Karnith/sails-generate-new-gulp/master.svg?style=flat
[coverage-url]: https://coveralls.io/r/Karnith/sails-generate-new-gulp?branch=master
