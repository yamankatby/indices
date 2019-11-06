export const isElementsObject = (object: any) => {
	return object &&
		(object.push && typeof object.push === 'function') &&
		(object.unshift && typeof object.unshift === 'function') &&
		(object.pop && typeof object.pop === 'function') &&
		(object.shift && typeof object.shift === 'function') &&
		(object.replace && typeof object.replace === 'function') &&
		(object.insertAfter && typeof object.insertAfter === 'function') &&
		(object.insertBefore && typeof object.insertBefore === 'function') &&
		(object.remove && typeof object.remove === 'function') &&
		(object.toArray && typeof object.toArray === 'function');
};
