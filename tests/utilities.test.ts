import { indices } from '../src';
import { deepClone, deepFreeze, isIndices } from '../src/utilities';

it('can check if the object is an indices object or not', () => {
	const source = indices();
	expect(isIndices(source)).toBe(true);
	expect(isIndices({})).toBe(false);
});
it('can deepFreeze an object', () => {
	const source: { [key: string]: string } = {
		a: 'a',
		b: 'b',
	};
	deepFreeze(source);
	expect(() => source.a = 'z').toThrow();
});
it('can deepClone an object', () => {
	const source: { [key: string]: string } = {
		a: 'a',
		b: 'b',
	};
	const target = deepClone(source);
	target.a = 'z';
	target.c = 'c';

	expect(source).toEqual({ a: 'a', b: 'b' });
	expect(target).toEqual({ a: 'z', b: 'b', c: 'c' });
});
