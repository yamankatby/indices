import { deepFreeze } from '../src/utilities';
import { concat, insertAfter, insertBefore, pop, push, remove, replace, shift, unshift } from '../src/actions';

it('can insert an element to the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1];

	deepFreeze(source);
	expect(push(source, 1)).toEqual(target);
});
it('can insert multi-elements to the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1, 2];

	deepFreeze(source);
	expect(push(source, 1, 2)).toEqual(target);
});
it('can insert an element to the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(unshift(source, 1)).toEqual(target);
});
it('can insert multi-elements to the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(unshift(source, 1, 2)).toEqual(target);
});

it('can remove an element from the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4];

	deepFreeze(source);
	expect(pop(source)).toEqual(target);
});
it('can remove multi-elements from the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2];

	deepFreeze(source);
	expect(pop(source, 3)).toEqual(target);
});
it('can remove an element from the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [2, 3, 4, 5];

	deepFreeze(source);
	expect(shift(source)).toEqual(target);
});
it('can remove multi-elements from the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [4, 5];

	deepFreeze(source);
	expect(shift(source, 3)).toEqual(target);
});

it('can concat tow arrays', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	deepFreeze(source);
	expect(concat(source, [6, 7, 8, 9])).toEqual(target);
});

it('can replace an element with another one by index and element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(replace(source, 1, 3)).toEqual(target);
});
it('can replace an element with another one by index and callbackfn', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(replace(source, 1, prevElement => prevElement + 1)).toEqual(target);
});
it('can replace an element with another one by predicate and element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(replace(source, element => element === 2, 3)).toEqual(target);
});
it('can replace an element with another one by predicate and callback', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	deepFreeze(source);
	expect(
		replace(source, element => element === 2, prevElement => prevElement + 1),
	).toEqual(target);
});

it('can insert an element after another on by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, 1, 3)).toEqual(target);
});
it('can insert multi-elements after a specific element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, 1, 3, 4, 5)).toEqual(target);
});
it('can insert an element after another on by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, element => element === 2, 3)).toEqual(target);
});
it('can insert multi-elements after a specific element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	deepFreeze(source);
	expect(insertAfter(source, element => element === 2, 3, 4, 5)).toEqual(target);
});

it('can insert an element before another on by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, 1, 1)).toEqual(target);
});
it('can insert multi-elements before a specific element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, 1, 1, 2, 3)).toEqual(target);
});
it('can insert an element after before on by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, element => element === 2, 1)).toEqual(target);
});
it('can insert multi-elements before a specific element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	deepFreeze(source);
	expect(insertBefore(source, element => element === 2, 1, 2, 3)).toEqual(target);
});

it('can remove an element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 4, 5];

	deepFreeze(source);
	expect(remove(source, 1)).toEqual(target);
});
it('can remove multi-elements by indices', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 5];

	deepFreeze(source);
	expect(remove(source, [1, 2, 3])).toEqual(target);
});
it('can remove an element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 4, 5];

	deepFreeze(source);
	expect(remove(source, element => element === 3)).toEqual(target);
});
it('can remove multi-elements by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3];

	deepFreeze(source);
	expect(remove(source, element => element > 3)).toEqual(target);
});
