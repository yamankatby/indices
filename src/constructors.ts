export function toArray<S = any>(source: S[]): S[];
export function toArray<S = any, R = any>(source: S[], callback?: ((element: S) => R)): R[];
export function toArray<S = any, R = any>(source: S[], callback?: ((element: S) => R)) {
	if (callback === undefined) {
		return source;
	}
	return source.map(callback);
}

export function toSet<S = any>(source: S[]): Set<S>;
export function toSet<S = any, R = any>(source: S[], callback?: ((element: S) => R)): Set<R>;
export function toSet<S = any, R = any>(source: S[], callback?: ((element: S) => R)) {
	if (callback === undefined) {
		return new Set(source);
	}
	return new Set(source.map(callback));
}
