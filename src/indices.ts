import { insertAfter, insertBefore, pop, push, remove, replace, shift, unshift } from './functions';
import { isIndices } from './isIndices';
import { deepClone, deepFreeze } from './utilities';

export class Indices<S = any> {
	constructor(source?: S[]) {
		if (source) this.source = source;
	}

	public static isIndices = isIndices;
	public static deepFreeze = deepFreeze;
	public static deepClone = deepClone;

	private source: S[] = [];

	public push(element: S): Indices<S>;
	public push(...elements: S[]): Indices<S>;
	public push(...elements: S[]) {
		this.source = push(this.source, ...elements);
		return this;
	}

	public unshift(element: S): Indices<S>;
	public unshift(...elements: S[]): Indices<S>;
	public unshift(...elements: S[]) {
		this.source = unshift(this.source, ...elements);
		return this;
	}

	public pop(): Indices<S>;
	public pop(count: number): Indices<S>;
	public pop(count = 1) {
		this.source = pop(this.source, count);
		return this;
	}

	public shift(): Indices<S>;
	public shift(count: number): Indices<S>;
	public shift(count = 1) {
		this.source = shift(this.source, count);
		return this;
	}

	public replace(index: number, element: S): Indices<S>;
	public replace(index: number, callbackfn: ((prevElement: S) => S)): Indices<S>;
	public replace(predicate: ((element: S) => boolean), element: S): Indices<S>;
	public replace(predicate: ((element: S) => boolean), callbackfn: ((prevElement: S) => S)): Indices<S>;
	public replace(
		predicate: number | ((element: S) => boolean),
		callback: S | ((prevElement: S) => S),
	) {
		this.source = replace(this.source, predicate, callback);
		return this;
	}

	public insertAfter(index: number, element: S): Indices<S>;
	public insertAfter(index: number, ...elements: S[]): Indices<S>;
	public insertAfter(predicate: ((element: S) => boolean), element: S): Indices<S>;
	public insertAfter(predicate: ((element: S) => boolean), ...elements: S[]): Indices<S>;
	public insertAfter(
		predicate: number | ((element: S) => boolean),
		...elements: S[]
	) {
		this.source = insertAfter(this.source, predicate, ...elements);
		return this;
	}

	public insertBefore(index: number, element: S): Indices<S>;
	public insertBefore(index: number, ...elements: S[]): Indices<S>;
	public insertBefore(predicate: ((element: S) => boolean), element: S): Indices<S>;
	public insertBefore(predicate: ((element: S) => boolean), ...elements: S[]): Indices<S>;
	public insertBefore(
		predicate: number | ((element: S) => boolean),
		...elements: S[]
	) {
		this.source = insertBefore(this.source, predicate, ...elements);
		return this;
	}

	public remove(index: number): Indices<S>;
	public remove(indices: number[]): Indices<S>;
	public remove(predicate: ((element: S) => boolean)): Indices<S>;
	public remove(
		predicate: number | number[] | ((element: S) => boolean),
	) {
		this.source = remove(this.source, predicate);
		return this;
	}

	public toArray() {
		return this.source;
	}
}

export function indices<S = any>(source?: S[]) {
	return new Indices(source);
}

indices.isIndices = Indices.isIndices;
indices.deepFreeze = Indices.deepFreeze;
indices.deepClone = Indices.deepClone;
