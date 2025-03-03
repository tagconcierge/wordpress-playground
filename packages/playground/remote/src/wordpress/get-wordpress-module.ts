
/**
 * This file was auto generated by packages/playground/compile-wordpress/build.js
 * DO NOT CHANGE MANUALLY!
 * This file must statically exists in the project because of the way
 * vite resolves imports.
 */
import SupportedWordPressVersions from './wp-versions.json';

export { SupportedWordPressVersions };
export const SupportedWordPressVersionsList = Object.keys(
	SupportedWordPressVersions
) as any as string[];
export const LatestSupportedWordPressVersion =
	SupportedWordPressVersionsList.filter((v) => v.match(/^\d/))[0] as string;

export function getWordPressModule(wpVersion: string) {
	switch (wpVersion) {
		
		case '6.3':
			/** @ts-ignore */
			return import('./wp-6.3.js');

	}
	throw new Error('Unsupported WordPress module: ' + wpVersion);
}
