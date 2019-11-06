export function push<S>(source: S[], ...elements: S[]): S[] {
	return [...source, ...elements];
}

export function unshift<S>(source: S[], ...elements: S[]): S[] {
	return [...elements, ...source];
}

export function pop<S>(source: S[], count: number = 1): S[] {
	return source.slice(0, source.length - count);
}

export function shift<S>(source: S[], count: number = 1): S[] {
	return source.slice(count);
}

export function replace<S>(
	source: S[],
	predicate: number | ((element: S) => boolean),
	callback: S | ((prevElement: S) => S),
): S[] {
	const index = typeof predicate === 'number' ? predicate : source.findIndex(predicate);
	if (index === -1) {
		return source;
	}
	const element =
		typeof callback === 'function' ? callback.call(undefined, source[index]) : callback;
	return [...source.slice(0, index), element, ...source.slice(index + 1)];
}

export function insertAfter<S>(
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

export function insertBefore<S>(
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

export function remove<S>(
	source: S[],
	predicate: number | number[] | ((element: S) => boolean),
): S[] {
	return source.filter((element, index) =>
		typeof predicate === 'number'
			? index === predicate
			: typeof predicate === 'function'
			? predicate.call(undefined, source[index])
			: Array.isArray(predicate)
				? predicate.includes(index)
				: false,
	);
}
