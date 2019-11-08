export function isIndices(o: any) {
	return !!o &&
		(!!o.push && typeof o.push === 'function') &&
		(!!o.unshift && typeof o.unshift === 'function') &&
		(!!o.pop && typeof o.pop === 'function') &&
		(!!o.shift && typeof o.shift === 'function') &&
		(!!o.replace && typeof o.replace === 'function') &&
		(!!o.insertAfter && typeof o.insertAfter === 'function') &&
		(!!o.insertBefore && typeof o.insertBefore === 'function') &&
		(!!o.remove && typeof o.remove === 'function') &&
		(!!o.toArray && typeof o.toArray === 'function');
}

export function deepFreeze(o: any) {
	if ((typeof o !== 'object' && typeof o !== 'function') || o === null) {
		return;
	}

	Object.freeze(o);
	Object.getOwnPropertyNames(o).forEach(function (propertyName) {
		if (
			o.hasOwnProperty(propertyName) &&
			o[propertyName] !== null &&
			(typeof o[propertyName] === 'object' || typeof o[propertyName] === 'function') &&
			!Object.isFrozen(o[propertyName])
		) {
			deepFreeze(o[propertyName]);
		}
	});
}

export function deepClone<O>(o: O) {
	if ((typeof o !== 'object' && typeof o !== 'function') || o === null) {
		return o;
	}

	let result: any;
	if (Array.isArray(o)) {
		result = [];
		o.forEach(element => {
			result.push(deepClone(element));
		});
	} else {
		result = {};
		Object.getOwnPropertyNames(o).forEach(function (propertyName) {
			result[propertyName] = deepClone(o[propertyName as keyof O]);
		});
	}
	return result as O;
}
