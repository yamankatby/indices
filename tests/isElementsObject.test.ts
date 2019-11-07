import { elements } from '../src/elements';
import { isElements } from '../src/isElements';

it('(isElementsObject) can check if the object is an elements object or not', () => {
	const source = elements();
	expect(isElements(source)).toBe(true);
	expect(isElements({})).toBe(false);
});
