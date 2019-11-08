export function deepFreeze(source: any) {
	if ((typeof source !== 'object' && typeof source !== 'function') || source === null) {
		return;
	}

	Object.freeze(source);
	Object.getOwnPropertyNames(source).forEach(function (propertyName) {
		if (
			source.hasOwnProperty(propertyName) &&
			source[propertyName] !== null &&
			(typeof source[propertyName] === 'object' || typeof source[propertyName] === 'function') &&
			!Object.isFrozen(source[propertyName])
		) {
			deepFreeze(source[propertyName]);
		}
	});
}

export function deepClone<S>(source: S) {
	if ((typeof source !== 'object' && typeof source !== 'function') || source === null) {
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
		Object.getOwnPropertyNames(source).forEach(function (propertyName) {
			result[propertyName] = deepClone(source[propertyName as keyof S]);
		});
	}
	return result as S;
}
