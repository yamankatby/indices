import * as functions from './functions';
import * as utilities from './utilities';

export class Indices<S = any> {
	public static push = functions.push;
	public static unshift = functions.unshift;
	public static pop = functions.pop;
	public static shift = functions.shift;
	public static replace = functions.replace;
	public static insertAfter = functions.insertAfter;
	public static insertBefore = functions.insertBefore;
	public static remove = functions.remove;

	public static isIndices = utilities.isIndices;
	public static deepFreeze = utilities.deepFreeze;
	public static deepClone = utilities.deepClone;

	constructor(source?: S[]) {
		if (source) this.source = source;
	}

	public source: S[] = [];

	public push(element: S): Indices<S>;
	public push(...elements: S[]): Indices<S>;
	public push(...elements: S[]) {
		this.source = functions.push(this.source, ...elements);
		return this;
	}

	public unshift(element: S): Indices<S>;
	public unshift(...elements: S[]): Indices<S>;
	public unshift(...elements: S[]) {
		this.source = functions.unshift(this.source, ...elements);
		return this;
	}

	public pop(): Indices<S>;
	public pop(count: number): Indices<S>;
	public pop(count = 1) {
		this.source = functions.pop(this.source, count);
		return this;
	}

	public shift(): Indices<S>;
	public shift(count: number): Indices<S>;
	public shift(count = 1) {
		this.source = functions.shift(this.source, count);
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
		this.source = functions.replace(this.source, predicate, callback);
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
		this.source = functions.insertAfter(this.source, predicate, ...elements);
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
		this.source = functions.insertBefore(this.source, predicate, ...elements);
		return this;
	}

	public remove(index: number): Indices<S>;
	public remove(indices: number[]): Indices<S>;
	public remove(predicate: ((element: S) => boolean)): Indices<S>;
	public remove(
		predicate: number | number[] | ((element: S) => boolean),
	) {
		this.source = functions.remove(this.source, predicate);
		return this;
	}

	public toArray(): S[] {
		return this.source;
	}
}

export function indices<S = any>(source?: S[]) {
	return new Indices(source);
}

export declare namespace indices {
	let push: typeof functions.push;
	let unshift: typeof functions.unshift;
	let pop: typeof functions.pop;
	let shift: typeof functions.shift;
	let replace: typeof functions.replace;
	let insertAfter: typeof functions.insertAfter;
	let insertBefore: typeof functions.insertBefore;
	let remove: typeof functions.remove;

	let isIndices: typeof utilities.isIndices;
	let deepFreeze: typeof utilities.deepFreeze;
	let deepClone: typeof utilities.deepClone;
}

indices.push = functions.push;
indices.unshift = functions.unshift;
indices.pop = functions.pop;
indices.shift = functions.shift;
indices.replace = functions.replace;
indices.insertAfter = functions.insertAfter;
indices.insertBefore = functions.insertBefore;
indices.remove = functions.remove;

indices.isIndices = utilities.isIndices;
indices.deepFreeze = utilities.deepFreeze;
indices.deepClone = utilities.deepClone;
