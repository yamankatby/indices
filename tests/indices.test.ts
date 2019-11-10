import { Indices } from '../src';

it('can insert an element to the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.push(1)
			.toArray()
	).toEqual(target);
});
it('can insert multi-elements to the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1, 2];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.push(1, 2)
			.toArray(),
	).toEqual(target);
});
it('can insert an element to the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.unshift(1)
			.toArray(),
	).toEqual(target);
});
it('can insert multi-elements to the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.unshift(1, 2)
			.toArray()
	).toEqual(target);
});
it('can remove an element from the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.pop()
			.toArray()
	).toEqual(target);
});
it('can remove multi-elements from the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.pop(3)
			.toArray(),
	).toEqual(target);
});
it('can remove an element from the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.shift()
			.toArray()
	).toEqual(target);
});
it('can remove multi-elements from the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.shift(3)
			.toArray()
	).toEqual(target);
});
it('can concat tow arrays', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.concat([6, 7, 8, 9])
			.toArray(),
	).toEqual(target);
});
it('can replace an element with another one by index and element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.replace(1, 3)
			.toArray(),
	).toEqual(target);
});
it('can replace an element with another one by index and callbackfn', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.replace(1, prevElement => prevElement + 1)
			.toArray(),
	).toEqual(target);
});
it('can replace an element with another one by predicate and element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.replace(element => element === 2, 3)
			.toArray(),
	).toEqual(target);
});
it('can replace an element with another one by predicate and callback', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.replace(element => element === 2, prevElement => prevElement + 1)
			.toArray(),
	).toEqual(target);
});
it('can insert an element after another on by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertAfter(1, 3)
			.toArray(),
	).toEqual(target);
});
it('can insert multi-elements after a specific element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertAfter(1, 3, 4, 5)
			.toArray(),
	).toEqual(target);
});
it('can insert an element after another on by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertAfter(element => element === 2, 3)
			.toArray(),
	).toEqual(target);
});
it('can insert multi-elements after a specific element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertAfter(element => element === 2, 3, 4, 5)
			.toArray(),
	).toEqual(target);
});
it('can insert an element before another on by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertBefore(1, 1)
			.toArray(),
	).toEqual(target);
});
it('can insert multi-elements before a specific element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertBefore(1, 1, 2, 3)
			.toArray(),
	).toEqual(target);
});
it('can insert an element after before on by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertBefore(element => element === 2, 1)
			.toArray(),
	).toEqual(target);
});
it('can insert multi-elements before a specific element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.insertBefore(element => element === 2, 1, 2, 3)
			.toArray(),
	).toEqual(target);
});
it('can remove an element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.remove(1)
			.toArray()
	).toEqual(target);
});
it('can remove multi-elements by indices', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.remove([1, 2, 3])
			.toArray(),
	).toEqual(target);
});
it('can remove an element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 4, 5];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.remove(element => element === 3)
			.toArray()
	).toEqual(target);
});
it('can remove multi-elements by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3];

	Indices.deepFreeze(source);
	expect(
		new Indices(source)
			.remove(element => element > 3)
			.toArray(),
	).toEqual(target);
});

it('can statically insert an element to the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1];

	Indices.deepFreeze(source);
	expect(Indices.push(source, 1)).toEqual(target);
});
it('can statically insert multi-elements to the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1, 2];

	Indices.deepFreeze(source);
	expect(Indices.push(source, 1, 2)).toEqual(target);
});
it('can statically insert an element to the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.unshift(source, 1)).toEqual(target);
});
it('can statically insert multi-elements to the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.unshift(source, 1, 2)).toEqual(target);
});
it('can statically remove an element from the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4];

	Indices.deepFreeze(source);
	expect(Indices.pop(source)).toEqual(target);
});
it('can statically remove multi-elements from the end of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2];

	Indices.deepFreeze(source);
	expect(Indices.pop(source, 3)).toEqual(target);
});
it('can statically remove an element from the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.shift(source)).toEqual(target);
});
it('can statically remove multi-elements from the begin of the array', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [4, 5];

	Indices.deepFreeze(source);
	expect(Indices.shift(source, 3)).toEqual(target);
});
it('can statically concat tow arrays', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	Indices.deepFreeze(source);
	expect(Indices.concat(source, [6, 7, 8, 9])).toEqual(target);
});
it('can statically replace an element with another one by index and element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.replace(source, 1, 3)).toEqual(target);
});
it('can statically replace an element with another one by index and callbackfn', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.replace(source, 1, prevElement => prevElement + 1)).toEqual(target);
});
it('can statically replace an element with another one by predicate and element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.replace(source, element => element === 2, 3)).toEqual(target);
});
it('can statically replace an element with another one by predicate and callback', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.replace(source, element => element === 2, prevElement => prevElement + 1),
	).toEqual(target);
});
it('can statically insert an element after another on by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertAfter(source, 1, 3)).toEqual(target);
});
it('can statically insert multi-elements after a specific element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertAfter(source, 1, 3, 4, 5)).toEqual(target);
});
it('can statically insert an element after another on by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertAfter(source, element => element === 2, 3)).toEqual(target);
});
it('can statically insert multi-elements after a specific element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertAfter(source, element => element === 2, 3, 4, 5)).toEqual(target);
});
it('can statically insert an element before another on by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertBefore(source, 1, 1)).toEqual(target);
});
it('can statically insert multi-elements before a specific element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertBefore(source, 1, 1, 2, 3)).toEqual(target);
});
it('can statically insert an element after before on by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertBefore(source, element => element === 2, 1)).toEqual(target);
});
it('can statically insert multi-elements before a specific element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.insertBefore(source, element => element === 2, 1, 2, 3)).toEqual(target);
});
it('can statically remove an element by index', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.remove(source, 1)).toEqual(target);
});
it('can statically remove multi-elements by indices', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 5];

	Indices.deepFreeze(source);
	expect(Indices.remove(source, [1, 2, 3])).toEqual(target);
});
it('can statically remove an element by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 4, 5];

	Indices.deepFreeze(source);
	expect(Indices.remove(source, element => element === 3)).toEqual(target);
});
it('can statically remove multi-elements by predicate', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3];

	Indices.deepFreeze(source);
	expect(Indices.remove(source, element => element > 3)).toEqual(target);
});
