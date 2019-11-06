import { deepFreeze } from '../src/utilities';
import { elements } from '../src/elements';

it('(elements.push) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1];
	deepFreeze(source);

	expect(
		elements(source)
			.push(1)
			.toArray(),
	).toEqual(target);
});
it('(elements.push) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 1, 2];
	deepFreeze(source);

	expect(
		elements(source)
			.push(1, 2)
			.toArray(),
	).toEqual(target);
});
it('(elements.unshift) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.unshift(1)
			.toArray(),
	).toEqual(target);
});
it('(elements.unshift) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.unshift(1, 2)
			.toArray(),
	).toEqual(target);
});
it('(elements.pop) can remove single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4];
	deepFreeze(source);

	expect(
		elements(source)
			.pop()
			.toArray(),
	).toEqual(target);
});
it('(elements.pop) can remove multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2];
	deepFreeze(source);

	expect(
		elements(source)
			.pop(3)
			.toArray(),
	).toEqual(target);
});
it('(elements.shift) can add single element', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [2, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.shift()
			.toArray(),
	).toEqual(target);
});
it('(elements.shift) can add multi elements', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.shift(3)
			.toArray(),
	).toEqual(target);
});
it('(elements.replace) can replace an element with another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.replace(1, 3)
			.toArray(),
	).toEqual(target);
});
it('(elements.replace) can replace an element with another. (index, callbackfn)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.replace(1, prevElement => prevElement + 1)
			.toArray(),
	).toEqual(target);
});
it('(elements.replace) can replace an element with another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.replace(element => element === 2, 3)
			.toArray(),
	).toEqual(target);
});
it('(elements.replace) can replace an element with another. (predicate, callbackfn)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.replace(element => element === 2, prevElement => prevElement + 1)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertAfter) can insert single element after another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertAfter(1, 3)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertAfter) can insert multi elements after another. (index, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertAfter(1, 3, 4, 5)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertAfter) can insert single element after another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertAfter(element => element === 2, 3)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertAfter) can insert multi elements after another. (predicate, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3, 4, 5, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertAfter(element => element === 2, 3, 4, 5)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertBefore) can insert single element before another. (index, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertBefore(1, 1)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertBefore) can insert multi elements before another. (index, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertBefore(1, 1, 2, 3)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertBefore) can insert single element before another. (predicate, element)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertBefore(element => element === 2, 1)
			.toArray(),
	).toEqual(target);
});
it('(elements.insertBefore) can insert multi elements before another. (predicate, elements)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 1, 2, 3, 2, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.insertBefore(element => element === 2, 1, 2, 3)
			.toArray(),
	).toEqual(target);
});
it('(elements.remove) can remove single element, (index)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 3, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.remove(1)
			.toArray(),
	).toEqual(target);
});
it('(elements.remove) can remove multi elements, (indices)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.remove([1, 2, 3])
			.toArray(),
	).toEqual(target);
});
it('(elements.remove) can remove single element, (predicate)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 4, 5];
	deepFreeze(source);

	expect(
		elements(source)
			.remove(element => element === 3)
			.toArray(),
	).toEqual(target);
});
it('(elements.remove) can remove multi elements, (predicate)', () => {
	const source = [1, 2, 3, 4, 5];
	const target = [1, 2, 3];
	deepFreeze(source);

	expect(
		elements(source)
			.remove(element => element > 3)
			.toArray(),
	).toEqual(target);
});
