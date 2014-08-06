# sails-generate-new-gulp

A gulp generator for Sails.js that works with sails lift.

## Install

```sh
$ npm install -g sails-generate-backend-gulp
$ npm install -g sails-generate-gulpfile
$ npm install -g sails-generate-frontend-gulp
$ npm install -g sails-generate-new-gulp

```

## Usage

#### On the command line

```sh
sails generate sails-generate-new
```

#### In a node script

```javascript
var generate = require('sails-generate');
var scope = {};
generate(require('sails-generate-new'), scope, function (err) {
	if (err) throw err;

	// Log output available in `scope` for your enjoyment:
	console.log(scope);
});
```


## Contributing to this generator

See `CONTRIBUTING.md`.

## License

See `LICENSE.md`.

