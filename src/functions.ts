export const push = <S = any>(source: S[], ...elements: S[]): S[] => {
	return [...source, ...elements];
};
export const unshift = <S = any>(source: S[], ...elements: S[]): S[] => {
	return [...elements, ...source];
};
export const pop = <S = any>(source: S[], count: number = 1): S[] => {
	return source.slice(0, source.length - count);
};
export const shift = <S = any>(source: S[], count: number = 1): S[] => {
	return source.slice(count);
};

export const replace = <S = any>(
	source: S[],
	predicate: number | ((element: S) => boolean),
	callback: S | ((prevElement: S) => S),
): S[] => {
	const index = typeof predicate === 'number' ? predicate : source.findIndex(predicate);
	if (index === -1) {
		return source;
	}
	// @ts-ignore
	const element = typeof callback === 'function' ? callback(source[index]) : callback;
	return [...source.slice(0, index), element, ...source.slice(index + 1)];
};
export const insertAfter = <S = any>(
	source: S[],
	predicate: number | ((element: S) => boolean),
	...elements: S[]
): S[] => {
	const index = typeof predicate === 'number' ? predicate : source.findIndex(predicate);
	if (index === -1) {
		return source;
	}
	return [...source.slice(0, index + 1), ...elements, ...source.slice(index + 1)];
};
export const insertBefore = <S = any>(
	source: S[],
	predicate: number | ((element: S) => boolean),
	...elements: S[]
): S[] => {
	const index = typeof predicate === 'number' ? predicate : source.findIndex(predicate);
	if (index === -1) {
		return source;
	}
	return [...source.slice(0, index), ...elements, ...source.slice(index)];
};
export const remove = <S = any>(
	source: S[],
	predicate: number | number[] | ((element: S) => boolean),
): S[] => {
	return source.filter((element, index) =>
		typeof predicate === 'number'
			? index !== predicate
			: typeof predicate === 'function'
			? !predicate(source[index])
			: Array.isArray(predicate)
				? !predicate.includes(index)
				: true,
	);
};
