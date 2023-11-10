/**
 * @typedef {Object} PhpVersion
 * @property {string} version
 * @property {string} loaderFilename
 * @property {string} wasmFilename
 * @property {string} lastRelease
 */

/**
 * @type {PhpVersion[]}
 * @see https://www.php.net/releases/index.php
 */
export const phpVersions = [
	{
		version: '8.2',
		loaderFilename: 'php_8_2.js',
		wasmFilename: 'php_8_2.wasm',
		lastRelease: '8.2.0',
	},
];
