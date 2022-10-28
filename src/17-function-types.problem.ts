import { Equal, Expect } from './helpers/type-utils';

/**
 * How do we type onFocusChange?
 */

type booleanFunction = (a: boolean) => void;

const addListener = (onFocusChange: booleanFunction) => {
	window.addEventListener('focus', () => {
		onFocusChange(true);
	});

	window.addEventListener('blur', () => {
		onFocusChange(false);
	});
};

addListener((isFocused) => {
	console.log({ isFocused });

	type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
