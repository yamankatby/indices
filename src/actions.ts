export function push<S = any>(source: S[], element: S): S[];
export function push<S = any>(source: S[], ...elements: S[]): S[];
export function push<S = any>(source: S[], ...elements: S[]): S[] {
	return [...source, ...elements];
}

export function unshift<S = any>(source: S[], element: S): S[];
export function unshift<S = any>(source: S[], ...elements: S[]): S[];
export function unshift<S = any>(source: S[], ...elements: S[]): S[] {
	return [...elements, ...source];
}

export function pop<S = any>(source: S[]): S[];
export function pop<S = any>(source: S[], count: number): S[];
export function pop<S = any>(source: S[], count: number = 1): S[] {
	return source.slice(0, source.length - count);
}

export function shift<S = any>(source: S[]): S[];
export function shift<S = any>(source: S[], count: number): S[];
export function shift<S = any>(source: S[], count: number = 1): S[] {
	return source.slice(count);
}

export function concat<S = any>(source: S[], target: S[]): S[] {
	return source.concat(target);
}

export function replace<S = any>(source: S[], index: number, element: S): S[];
export function replace<S = any>(source: S[], index: number, callbackfn: ((prevElement: S) => S)): S[];
export function replace<S = any>(source: S[], predicate: ((element: S) => boolean), element: S): S[];
export function replace<S = any>(source: S[], predicate: ((element: S) => boolean), callbackfn: ((prevElement: S) => S)): S[];
export function replace<S = any>(source: S[], predicate: number | ((element: S) => boolean), callback: S | ((prevElement: S) => S)): S[];
export function replace<S = any>(
	source: S[],
	predicate: number | ((element: S) => boolean),
	callback: S | ((prevElement: S) => S),
): S[] {
	const index = typeof predicate === 'number' ? predicate : source.findIndex(predicate);
	if (index === -1) {
		return source;
	}
	// @ts-ignore
	const element = typeof callback === 'function' ? callback(source[index]) : callback;
	return [...source.slice(0, index), element, ...source.slice(index + 1)];
}

export function insertAfter<S = any>(source: S[], index: number, element: S): S[];
export function insertAfter<S = any>(source: S[], index: number, ...elements: S[]): S[];
export function insertAfter<S = any>(source: S[], predicate: ((element: S) => boolean), element: S): S[];
export function insertAfter<S = any>(source: S[], predicate: ((element: S) => boolean), ...elements: S[]): S[];
export function insertAfter<S = any>(source: S[], predicate: number | ((element: S) => boolean), ...elements: S[]): S[];
export function insertAfter<S = any>(
	source: S[],
	predicate: number | ((element: S) => boolean),
	...elements: S[]
): S[] {
	const index = typeof predicate === 'number' ? predicate : source.findIndex(predicate);
	if (index === -1) {
		return source;
	}
	return [...source.slice(0, index + 1), ...elements, ...source.slice(index + 1)];
}

export function insertBefore<S = any>(source: S[], index: number, element: S): S[];
export function insertBefore<S = any>(source: S[], index: number, ...elements: S[]): S[];
export function insertBefore<S = any>(source: S[], predicate: ((element: S) => boolean), element: S): S[];
export function insertBefore<S = any>(source: S[], predicate: ((element: S) => boolean), ...elements: S[]): S[];
export function insertBefore<S = any>(source: S[], predicate: number | ((element: S) => boolean), ...elements: S[]): S[];
export function insertBefore<S = any>(
	source: S[],
	predicate: number | ((element: S) => boolean),
	...elements: S[]
): S[] {
	const index = typeof predicate === 'number' ? predicate : source.findIndex(predicate);
	if (index === -1) {
		return source;
	}
	return [...source.slice(0, index), ...elements, ...source.slice(index)];
}

export function remove<S = any>(source: S[], index: number): S[];
export function remove<S = any>(source: S[], indices: number[]): S[];
export function remove<S = any>(source: S[], predicate: ((element: S) => boolean)): S[];
export function remove<S = any>(source: S[], predicate: number | number[] | ((element: S) => boolean)): S[];
export function remove<S = any>(
	source: S[],
	predicate: number | number[] | ((element: S) => boolean),
): S[] {
	return source.filter((element, index) =>
		typeof predicate === 'number'
			? index !== predicate
			: typeof predicate === 'function'
			? !predicate(source[index])
			: Array.isArray(predicate)
				? !predicate.includes(index)
				: true,
	);
}
