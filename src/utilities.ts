export const forIn = <S>(source: S, callbackFn: (key: keyof S, value: S[keyof S], index: number) => void) => {
	Object.getOwnPropertyNames(source).forEach((_, index) => {
		const key = _ as keyof S;
		callbackFn(key, source[key], index);
	});
};

export const mapIn = <S, R>(source: S, predicate: (key: keyof S, value: S[keyof S], index: number) => R) => {
	const result: R[] = [];
	forIn(source, ((key, value, index) => {
		result.push(predicate(key, value, index));
	}));

	return result;
};

export const deepFreeze = <T>(source: T) => {
	if (typeof source !== 'object' || source === null) {
		return;
	}

	Object.freeze(source);
	forIn(source, (key, value) => {
		// @ts-ignore
		if (source.hasOwnProperty(key) && typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
			deepFreeze(source[key]);
		}
	});
};

export const deepClone = <T>(source: T) => {
	if (typeof source !== 'object' || source === null) {
		return source;
	}

	let result: any;
	if (Array.isArray(source)) {
		result = [];
		source.forEach(element => {
			result.push(deepClone(element));
		});
	} else {
		result = {};
		forIn(source, (key, value) => {
			result[key] = deepClone(value);
		});
	}

	return result as T;
};
