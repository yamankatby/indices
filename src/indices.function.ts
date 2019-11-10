import { Indices } from './indices';
import * as utilities from './utilities';
import * as actions from './actions';

export function indices<S = any>(source?: S[]) {
	return new Indices(source);
}

export declare namespace indices {
	let isIndices: typeof utilities.isIndices;
	let deepFreeze: typeof utilities.deepFreeze;
	let deepClone: typeof utilities.deepClone;

	let push: typeof actions.push;
	let unshift: typeof actions.unshift;
	let pop: typeof actions.pop;
	let shift: typeof actions.shift;
	let concat: typeof actions.concat;
	let replace: typeof actions.replace;
	let insertAfter: typeof actions.insertAfter;
	let insertBefore: typeof actions.insertBefore;
	let remove: typeof actions.remove;
}

indices.isIndices = utilities.isIndices;
indices.deepFreeze = utilities.deepFreeze;
indices.deepClone = utilities.deepClone;

indices.push = actions.push;
indices.unshift = actions.unshift;
indices.pop = actions.pop;
indices.shift = actions.shift;
indices.concat = actions.concat;
indices.replace = actions.replace;
indices.insertAfter = actions.insertAfter;
indices.insertBefore = actions.insertBefore;
indices.remove = actions.remove;
