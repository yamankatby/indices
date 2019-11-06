export function push<S>(source: S[], element: S): S[];
export function push<S>(source: S[], ...elements: S[]): S[];

export function unshift<S>(source: S[], element: S): S[];
export function unshift<S>(source: S[], ...elements: S[]): S[];

export function pop<S>(source: S[]): S[];
export function pop<S>(source: S[], count: number): S[];

export function shift<S>(source: S[]): S[];
export function shift<S>(source: S[], count: number): S[];

export function replace<S>(source: S[], index: number, element: S): S[];
export function replace<S>(source: S[], index: number, callback: ((prevElement: S) => S)): S[];
export function replace<S>(source: S[], predicate: ((element: S) => boolean), element: S): S[];
export function replace<S>(source: S[], predicate: ((element: S) => boolean), callback: ((prevElement: S) => S)): S[];

export function insertAfter<S>(source: S[], index: number, element: S): S[];
export function insertAfter<S>(source: S[], index: number, ...elements: S[]): S[];
export function insertAfter<S>(source: S[], predicate: ((element: S) => boolean), element: S): S[];
export function insertAfter<S>(source: S[], predicate: ((element: S) => boolean), ...elements: S[]): S[];

export function insertBefore<S>(source: S[], index: number, element: S): S[];
export function insertBefore<S>(source: S[], index: number, ...elements: S[]): S[];
export function insertBefore<S>(source: S[], predicate: ((element: S) => boolean), element: S): S[];
export function insertBefore<S>(source: S[], predicate: ((element: S) => boolean), ...elements: S[]): S[];

export function remove<S>(source: S[], index: number): S[];
export function remove<S>(source: S[], indices: number[]): S[];
export function remove<S>(source: S[], predicate: (() => boolean)): S[];
