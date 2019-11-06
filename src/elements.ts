import { insertAfter, insertBefore, pop, push, remove, replace, shift, unshift } from './functions';

export class Elements<S = any> {
	constructor(source?: S[]) {
		if (source) this.source = source;
	}

	source: S[] = [];

	push = (...elements: S[]) => {
		this.source = push(this.source, ...elements);
		return this;
	};
	unshift = (...elements: S[]) => {
		this.source = unshift(this.source, ...elements);
		return this;
	};
	pop = (count = 1) => {
		this.source = pop(this.source, count);
		return this;
	};
	shift = (count = 1) => {
		this.source = shift(this.source, count);
		return this;
	};

	replace = (
		predicate: number | ((element: S) => boolean),
		callback: S | ((prevElement: S) => S),
	) => {
		this.source = replace(this.source, predicate, callback);
		return this;
	};
	insertAfter = (
		predicate: number | ((element: S) => boolean),
		...elements: S[]
	) => {
		this.source = insertAfter(this.source, predicate, ...elements);
		return this;
	};
	insertBefore = (
		predicate: number | ((element: S) => boolean),
		...elements: S[]
	) => {
		this.source = insertBefore(this.source, predicate, ...elements);
		return this;
	};
	remove = (
		predicate: number | number[] | ((element: S) => boolean),
	) => {
		this.source = remove(this.source, predicate);
		return this;
	};

	toArray = () => this.source;
}

export const elements = <S = any>(source?: S[]) => new Elements(source);
