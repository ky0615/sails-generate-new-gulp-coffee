/**
 * Module dependencies
 */

var _ = require('lodash')
	, util = require('util');



/**
 * 
 * @param  {[type]} scope [description]
 * @return {[type]}       [description]
 */
module.exports = function dataForPackageJSON (scope) {

	var sailsPkg = scope.sailsPackageJSON || {};

	// To determine the sails dep. to inject in the newly created package.json,
	// use `sails.prerelease` specified in the package.json of Sails itself.
	// If a `prerelease` version no. is not specified, just use `version`
	var sailsVersionDependency = (sailsPkg.sails && sailsPkg.sails.prerelease) || ('~' + sailsPkg.version);

	return _.defaults(scope.appPackageJSON || {}, {
		name: scope.appName,
		private: true,
		version: '0.0.0',
		description: 'a Sails application',
		keywords: [],
		dependencies: {
			'ect'        : getDependencyVersion(sailsPkg, 'ect'),
			'gulp'      : "^3.8.7",
			'coffee-script': "^1.8.0",
			'gulp-autoprefixer' : "0.0.8",
			'gulp-cache': "^0.2.0",
			"gulp-changed": "^0.4.1",
			'gulp-coffee': "2.1.1",
			'gulp-concat': "^2.3.4",
			'gulp-if': "^1.2.4",
			'gulp-imagemin': "^0.6.2",
			'gulp-jade': "0.7.0",
			'gulp-jshint': "^1.8.4",
			'gulp-less': "1.3.3",
			'gulp-linker': "^0.1.7",
			'gulp-livereload': "^2.1.0",
			'gulp-load-plugins': "^0.5.3",
			'gulp-minify-css': "^0.3.7",
			'gulp-notify': "^1.4.2",
			'gulp-rename': "^1.2.0",
			'gulp-rimraf': "^0.1.0",
			'gulp-sass': "0.7.2",
			"gulp-template-compile": "^0.2.0",
			'gulp-uglify': "^0.3.1",
			'gulp-util': "3.0.0",
			'include-all': getDependencyVersion(sailsPkg, 'include-all'),
			'rc'         : getDependencyVersion(sailsPkg, 'rc'),
			'rimraf': '*',
			'run-sequence': "^0.3.6",
			'sails'      : sailsVersionDependency,
			'sails-disk' : getDependencyVersion(sailsPkg, 'sails-disk')
		},
		scripts: {
			start: 'node app.js',
			debug: 'node debug app.js'
		},
		main: 'app.coffee',
		repository: {
			type: 'git',
			url: util.format('git://github.com/%s/%s.git', scope.github.username, scope.appName)
		},
		author: scope.author || '',
		license: ''
	});
};





/**
 * getDependencyVersion
 * 
 * @param  {Object} packageJSON
 * @param  {String} module
 * @return {String}
 * @api private
 */

function getDependencyVersion (packageJSON, module) {
	return (
		packageJSON.dependencies && packageJSON.dependencies[module] ||
		packageJSON.devDependencies && packageJSON.devDependencies[module] ||
		packageJSON.optionalDependencies && packageJSON.optionalDependencies[module]
	);
}
