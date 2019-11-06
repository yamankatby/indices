import { deepFreeze } from '../src/utilities';
import { insertAfter, insertBefore, pop, push, remove, replace, shift, unshift } from '../src/functions';

it('(push) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1];

	deepFreeze(source);
	expect(push(source, 1)).toEqual(target);
});
it('(push) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1, 2];

	deepFreeze(source);
	expect(push(source, 1, 2)).toEqual(target);
});
it('(unshift) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(unshift(source, 1)).toEqual(target);
});
it('(unshift) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(unshift(source, 1, 2)).toEqual(target);
});
it('(pop) can remove single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4];

	deepFreeze(source);
	expect(pop(source)).toEqual(target);
});
it('(pop) can remove multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2];

	deepFreeze(source);
	expect(pop(source, 3)).toEqual(target);
});
it('(shift) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [2, 3, 4, 5];

	deepFreeze(source);
	expect(shift(source)).toEqual(target);
});
it('(shift) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [4, 5];

	deepFreeze(source);
	expect(shift(source, 3)).toEqual(target);
});
it('(replace) can replace an element with another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(replace(source, 1, 3)).toEqual(target);
});
it('(replace) can replace an element with another. (index, callbackfn)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(replace(source, 1, prevElement => prevElement + 1)).toEqual(target);
});
it('(replace) can replace an element with another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(replace(source, element => element === 2, 3)).toEqual(target);
});
it('(replace) can replace an element with another. (predicate, callbackfn)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(
		replace(source, element => element === 2, prevElement => prevElement + 1),
	).toEqual(target);
});
it('(insertAfter) can insert single element after another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, 1, 3)).toEqual(target);
});
it('(insertAfter) can insert multi elements after another. (index, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, 1, 3, 4, 5)).toEqual(target);
});
it('(insertAfter) can insert single element after another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, element => element === 2, 3)).toEqual(target);
});
it('(insertAfter) can insert multi elements after another. (predicate, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, element => element === 2, 3, 4, 5)).toEqual(target);
});
it('(insertBefore) can insert single element before another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, 1, 1)).toEqual(target);
});
it('(insertBefore) can insert multi elements before another. (index, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, 1, 1, 2, 3)).toEqual(target);
});
it('(insertBefore) can insert single element before another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, element => element === 2, 1)).toEqual(target);
});
it('(insertBefore) can insert multi elements before another. (predicate, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, element => element === 2, 1, 2, 3)).toEqual(target);
});
it('(remove) can remove single element, (index)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 4, 5];

	deepFreeze(source);
	expect(remove(source, 1)).toEqual(target);
});
it('(remove) can remove multi elements, (indices)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 5];

	deepFreeze(source);
	expect(remove(source, [1, 2, 3])).toEqual(target);
});
it('(remove) can remove single element, (predicate)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 4, 5];

	deepFreeze(source);
	expect(remove(source, element => element === 3)).toEqual(target);
});
it('(remove) can remove multi elements, (predicate)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3];

	deepFreeze(source);
	expect(remove(source, element => element > 3)).toEqual(target);
});
