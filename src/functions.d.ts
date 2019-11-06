export function push<S = any>(source: S[]): (element: S) => S[];
export function push<S = any>(source: S[]): (...elements: S[]) => S[];

export function unshift<S = any>(source: S[]): (element: S) => S[];
export function unshift<S = any>(source: S[]): (...elements: S[]) => S[];

export function pop<S = any>(source: S[]): () => S[];
export function pop<S = any>(source: S[]): (count: number) => S[];

export function shift<S = any>(source: S[]): () => S[];
export function shift<S = any>(source: S[]): (count: number) => S[];

export function replace<S = any>(source: S[]): (index: number, element: S) => S[];
export function replace<S = any>(source: S[]): (index: number, callbackfn: ((prevElement) => S)) => S[];
export function replace<S = any>(source: S[]): (predicate: ((element: S) => boolean), element: S) => S[];
export function replace<S = any>(source: S[]): (predicate: ((element: S) => boolean), callbackfn: ((prevElement) => S)) => S[];

export function insertAfter<S = any>(source: S[]): (index: number, element: S) => S[];
export function insertAfter<S = any>(source: S[]): (index: number, ...elements: S[]) => S[];
export function insertAfter<S = any>(source: S[]): (predicate: ((element: S) => boolean), element: S) => S[];
export function insertAfter<S = any>(source: S[]): (predicate: ((element: S) => boolean), ...elements: S[]) => S[];

export function insertBefore<S = any>(source: S[]): (index: number, element: S) => S[];
export function insertBefore<S = any>(source: S[]): (index: number, ...elements: S[]) => S[];
export function insertBefore<S = any>(source: S[]): (predicate: ((element: S) => boolean), element: S) => S[];
export function insertBefore<S = any>(source: S[]): (predicate: ((element: S) => boolean), ...elements: S[]) => S[];

export function remove<S = any>(source: S[]): (index: number) => S[];
export function remove<S = any>(source: S[]): (indices: number[]) => S[];
export function remove<S = any>(source: S[]): (predicate: ((element: S) => boolean)) => S[];
