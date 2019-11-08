import { deepFreeze } from '../src/utilities';
import { Indices, indices } from '../src';

it('(indices.push) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1];
	deepFreeze(source);

	expect(
		indices(source)
			.push(1)
			.toArray(),
	).toEqual(target);
});
it('(indices.push) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1, 2];
	deepFreeze(source);

	expect(
		indices(source)
			.push(1, 2)
			.toArray(),
	).toEqual(target);
});

it('(indices.unshift) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.unshift(1)
			.toArray(),
	).toEqual(target);
});
it('(indices.unshift) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.unshift(1, 2)
			.toArray(),
	).toEqual(target);
});

it('(indices.pop) can remove single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4];
	deepFreeze(source);

	expect(
		indices(source)
			.pop()
			.toArray(),
	).toEqual(target);
});
it('(indices.pop) can remove multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2];
	deepFreeze(source);

	expect(
		indices(source)
			.pop(3)
			.toArray(),
	).toEqual(target);
});

it('(indices.shift) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [2, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.shift()
			.toArray(),
	).toEqual(target);
});
it('(indices.shift) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.shift(3)
			.toArray(),
	).toEqual(target);
});

it('(indices.replace) can replace an element with another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.replace(1, 3)
			.toArray(),
	).toEqual(target);
});
it('(indices.replace) can replace an element with another. (index, callbackfn)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.replace(1, prevElement => prevElement + 1)
			.toArray(),
	).toEqual(target);
});
it('(indices.replace) can replace an element with another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.replace(element => element === 2, 3)
			.toArray(),
	).toEqual(target);
});
it('(indices.replace) can replace an element with another. (predicate, callbackfn)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.replace(element => element === 2, prevElement => prevElement + 1)
			.toArray(),
	).toEqual(target);
});

it('(indices.insertAfter) can insert single element after another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertAfter(1, 3)
			.toArray(),
	).toEqual(target);
});
it('(indices.insertAfter) can insert multi elements after another. (index, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertAfter(1, 3, 4, 5)
			.toArray(),
	).toEqual(target);
});
it('(indices.insertAfter) can insert single element after another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertAfter(element => element === 2, 3)
			.toArray(),
	).toEqual(target);
});
it('(indices.insertAfter) can insert multi elements after another. (predicate, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertAfter(element => element === 2, 3, 4, 5)
			.toArray(),
	).toEqual(target);
});

it('(indices.insertBefore) can insert single element before another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertBefore(1, 1)
			.toArray(),
	).toEqual(target);
});
it('(indices.insertBefore) can insert multi elements before another. (index, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertBefore(1, 1, 2, 3)
			.toArray(),
	).toEqual(target);
});
it('(indices.insertBefore) can insert single element before another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertBefore(element => element === 2, 1)
			.toArray(),
	).toEqual(target);
});
it('(indices.insertBefore) can insert multi elements before another. (predicate, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.insertBefore(element => element === 2, 1, 2, 3)
			.toArray(),
	).toEqual(target);
});

it('(indices.remove) can remove single element, (index)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.remove(1)
			.toArray(),
	).toEqual(target);
});
it('(indices.remove) can remove multi elements, (indices)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.remove([1, 2, 3])
			.toArray(),
	).toEqual(target);
});
it('(indices.remove) can remove single element, (predicate)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 4, 5];
	deepFreeze(source);

	expect(
		indices(source)
			.remove(element => element === 3)
			.toArray(),
	).toEqual(target);
});
it('(indices.remove) can remove multi elements, (predicate)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3];
	deepFreeze(source);

	expect(
		indices(source)
			.remove(element => element > 3)
			.toArray(),
	).toEqual(target);
});

it('(indices.isIndices) can check if the object is an elements object or not', () => {
	expect(indices.isIndices(indices())).toBe(true);
	expect(indices.isIndices({})).toBe(false);
	expect(Indices.isIndices(indices())).toBe(true);
	expect(Indices.isIndices({})).toBe(false);
});
