import { elements } from '../src/elements';
import { isElementsObject } from '../src/isElementsObject';

it('(isElementsObject) can check if the object is an elements object or not', () => {
	const source = elements();
	expect(isElementsObject(source)).toBe(true);
	expect(isElementsObject({})).toBe(false);
});
