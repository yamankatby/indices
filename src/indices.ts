import * as actions from './actions';
import * as utilities from './utilities';

export class Indices<S = any> {
	public static push = actions.push;
	public static unshift = actions.unshift;
	public static pop = actions.pop;
	public static shift = actions.shift;
	public static concat = actions.concat;
	public static replace = actions.replace;
	public static insertAfter = actions.insertAfter;
	public static insertBefore = actions.insertBefore;
	public static remove = actions.remove;

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
		this.source = actions.push(this.source, ...elements);
		return this;
	}

	public unshift(element: S): Indices<S>;
	public unshift(...elements: S[]): Indices<S>;
	public unshift(...elements: S[]) {
		this.source = actions.unshift(this.source, ...elements);
		return this;
	}

	public pop(): Indices<S>;
	public pop(count: number): Indices<S>;
	public pop(count = 1) {
		this.source = actions.pop(this.source, count);
		return this;
	}

	public shift(): Indices<S>;
	public shift(count: number): Indices<S>;
	public shift(count = 1) {
		this.source = actions.shift(this.source, count);
		return this;
	}

	public concat(target: S[]): Indices<S>;
	public concat(target: S[]) {
		actions.concat(this.source, target);
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
		this.source = actions.replace(this.source, predicate, callback);
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
		this.source = actions.insertAfter(this.source, predicate, ...elements);
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
		this.source = actions.insertBefore(this.source, predicate, ...elements);
		return this;
	}

	public remove(index: number): Indices<S>;
	public remove(indices: number[]): Indices<S>;
	public remove(predicate: ((element: S) => boolean)): Indices<S>;
	public remove(
		predicate: number | number[] | ((element: S) => boolean),
	) {
		this.source = actions.remove(this.source, predicate);
		return this;
	}

	public toArray(): S[] {
		return this.source;
	}
}
