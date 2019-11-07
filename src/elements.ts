import { insertAfter, insertBefore, pop, push, remove, replace, shift, unshift } from './functions';
import { isElements } from './isElements';

export class Elements<S = any> {
	constructor(source?: S[]) {
		if (source) this.source = source;
	}

	public static isElements = isElements;

	private source: S[] = [];

	public push = (...elements: S[]) => {
		this.source = push(this.source, ...elements);
		return this;
	};
	public unshift = (...elements: S[]) => {
		this.source = unshift(this.source, ...elements);
		return this;
	};
	public pop = (count = 1) => {
		this.source = pop(this.source, count);
		return this;
	};
	public shift = (count = 1) => {
		this.source = shift(this.source, count);
		return this;
	};

	public replace = (
		predicate: number | ((element: S) => boolean),
		callback: S | ((prevElement: S) => S),
	) => {
		this.source = replace(this.source, predicate, callback);
		return this;
	};
	public insertAfter = (
		predicate: number | ((element: S) => boolean),
		...elements: S[]
	) => {
		this.source = insertAfter(this.source, predicate, ...elements);
		return this;
	};
	public insertBefore = (
		predicate: number | ((element: S) => boolean),
		...elements: S[]
	) => {
		this.source = insertBefore(this.source, predicate, ...elements);
		return this;
	};
	public remove = (
		predicate: number | number[] | ((element: S) => boolean),
	) => {
		this.source = remove(this.source, predicate);
		return this;
	};

	public toArray = () => this.source;
}

export const elements = <S = any>(source?: S[]) => new Elements(source);
elements.isElements = isElements;
