import { indices } from '../src';
import { isIndices } from '../src/isIndices';

it('(isElementsObject) can check if the object is an elements object or not', () => {
	const source = indices();
	expect(isIndices(source)).toBe(true);
	expect(isIndices({})).toBe(false);
});
