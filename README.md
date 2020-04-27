# indices
> Work with the immutable arrays in a more convenient way.

[![Latest Stable Version](https://img.shields.io/npm/v/indices.svg)](https://www.npmjs.com/package/indices)
[![NPM Downloads](https://img.shields.io/npm/dm/indices.svg)](https://www.npmjs.com/package/indices)
[![GitHub issues](https://img.shields.io/github/issues-raw/yamankatby/indices.svg)](https://github.com/yamankatby/indices/issues)
[![Used Languages](https://img.shields.io/github/languages/top/yamankatby/indices.svg)](https://github.com/yamankatby/indices/issues)

<h2 id='section_table_of_contents'>
🚧 Table of Contents
</h2>

- [🚀 Motivation](#section_motivation)
- [⬇️ Installation](#section_installation)
- [☘️ Examples](#section_examples)
- [🔌 API](#section_api)
    - [push()](#push_method) method
    - [unshift()](#unshift_method) method
    - [pop()](#pop_method) method
    - [shift()](#shift_method) method
    - [concat()](#concat_method) method
    - [replace()](#replace_method) method
    - [insertAfter()](#insert_after_method) method
    - [insertBefore()](#insert_before_method) method
    - [remove()](#remove_method) method
- [🤝 Contributing](#section_contributing)
- [💡 FAQ](#section_faq)
- [👍 Support](#section_support)
- [📝 License](#section_license)
- [📄 Release Notes](#release_notes)

<h2 id='section_motivation'>
🚀 Motivation
</h2>

<h2 id='section_installation'>
⬇️ Installation
</h2>

<h2 id='section_examples'>
☘️ Examples
</h2>

<h2 id='section_api'>
🔌 API
</h2>

<h3 id="push_method">
    push()
</h3>

This method works like `Array.prototype.push()` method which allows you to insert an element to the end of the array but this method does not mutate the original array. For example: 
```js
import { indices } from "indices";

const current = [1, 2, 3];
const next = indices(current).push(4).toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [1, 2, 3, 4];
```
The `next` variable will contain the new array where the `current` variable still has the same value as initialized.

Also, it's possible to insert multi-element to the end of the array using the `push` method by passing them as separate arguments. For example:
```js
const current = [1, 2, 3];
const next = indices(current).push(4, 5, 6).toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [1, 2, 3, 4, 5, 6];
```

<h3 id="unshift_method">
    unshift()
</h3>

This method works like `Array.prototype.unshift()` method which allows you to insert an element to the beginning of the array but this method does not mutate the original array. For example: 
```js
import { indices } from "indices";

const current = [1, 2, 3];
const next = indices(current).unshift(0).toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [0, 1, 2, 3];
```
The `next` variable will contain the new array where the `current` variable still has the same value as initialized.

Also, it's possible to insert multi-element to the beginning of the array using the `unshift` method by passing them as separate arguments. For example:
```js
const current = [1, 2, 3];
const next = indices(current).unshift(-2, -1, 0).toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [-2, -1, 0, 1, 2, 3];
```

<h3 id="pop_method">
    pop()
</h3>

This method works like `Array.prototype.pop()` method which allows you to remove an element from the end of the array but this method does not mutate the original array. For example: 
```js
import { indices } from "indices";

const current = [1, 2, 3];
const next = indices(current).pop().toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [1, 2];
```
The `next` variable will contain the new array where the `current` variable still has the same value as initialized.

Also, it's possible to remove multi-element from the end of the array using the `pop` method by passing number of elements you want to remove as the first parameter. For example:
```js
const current = [1, 2, 3];
const next = indices(current).pop(2).toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [1];
```

<h3 id="shift_method">
    shift()
</h3>

This method works like `Array.prototype.shift()` method which allows you to remove an element from the beginning of the array but this method does not mutate the original array. For example: 
```js
import { indices } from "indices";

const current = [1, 2, 3];
const next = indices(current).shift().toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [2, 3];
```
The `next` variable will contain the new array where the `current` variable still has the same value as initialized.

Also, it's possible to remove multi-element from the beginning of the array using the `shift` method by passing number of elements you want to remove as the first parameter. For example:
```js
const current = [1, 2, 3];
const next = indices(current).shift(2).toArray();

console.log(current); // output -> [1, 2, 3];
console.log(next); // output -> [3];
```

<h3 id="concat_method">
    concat()
</h3>

The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. For example:
```js
import { indices } from "indices";

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = indices(array1).concat(array2).toArray();

console.log(array1); // output -> [1, 2, 3];
console.log(array2); // output -> [4, 5, 6];
console.log(array3); // output -> [1, 2, 3, 4, 5, 6];
```
**Note:** This method works exactly like `Array.prototype.concat()` method. We just reimplemented it inside the package to be able to use it with the other methods.

<h3 id="replace_method">
    replace()
</h3>

This method is the most powerful in the package. It allows you to edit a specific element inside an array by replacing it with a new one. This method takes two parameters first one is the `index` of the element you want to replace, and the second one is the `new element`. For example:
```js
import { indices } from "indices";

const current = ["a", "b", "c"];
const next = indices(current).replace(0, "d").toArray();

console.log(current); // output -> ["a", "b", "c"];
console.log(next); // output -> ["d", "b", "c"];
```

If you don't know the exact `index` of the element that you want to replace, You can pass a `predicate function` as the first parameter.
```js
const current = ["ab", "bc", "cd"];
const next = indices(current).replace(element => element.startsWith("a"), "de").toArray();

console.log(current); // output -> ["ab", "bc", "cd"];
console.log(next); // output -> ["de", "bc", "cd"];
```

Also, if you are calculating the new element with an expensive operation, and you want to use the previous element to calculate the new one you can pass a callback function as the second parameter to the `replace()` method.
```js
const current = ["ab", "bc", "cd"];
const next = indices(current).replace(0, prevElement => prevElement + "c").toArray();

console.log(current); // output -> ["ab", "bc", "cd"];
console.log(next); // output -> ["abc", "bc", "cd"];
```

<h3 id="insertAfter_method">
    insertAfter()
</h3>

<h3 id="insertBefore_method">
    insertBefore()
</h3>

<h3 id="remove_method">
    remove()
</h3>

<h3 id="replace_method">
    replace()
</h3>

### `insertAfter()`
```js
import { indices } from "indices";

const list = ["🐼", "🐶", "🐑"];
const newList = indices(list).insertAfter(1, "🐈").toArray(); // output => ["🐼", "🐶", "🐈", "🐑"];
```

**Also you can it a expression**
```js
const list = ["🐼", "🐶", "🐑"];
const newList = indices(list).insertAfter(animal => animal === "🐶", "🐈").toArray(); // output => ["🐼", "🐶", 🐈", "🐑"];
```

### `insertBefore()`
```js
import { indices } from "indices";

const list = ["🐼", "🐶", "🐑"];
const newList = indices(list).insertBefore(1, "🐈").toArray(); // output => ["🐼", "🐈", "🐶", "🐑"];
```

### `remove()`
```js
import { indices } from "indices";

const list = ["🐼", "🐶", "🐑"];
const newList = indices(list).remove(2).toArray(); // output => ["🐼", "🐶"];
```

**Also you can it a expression**
```js
const list = ["🐼", "🐶", "🐑"];
const newList = indices(list).remove(animal => animal === "🐑").toArray(); // output => ["🐼", "🐶"];
```

<h2 id='section_contributing'>
🤝 Contributing
</h2>

We would love to have community contributions and support! A few areas where could use help right now:
* Bug reports and/or fixes
* Writing tests
* Creating examples for the docs

If you want to contribute, please submit a pull request, or contact mohakapt@gmail.com for more information.
When you commit your messages, follow this convention:
```
Main changes subject
- Optional message
- Another optional message
```

If you do a breaking change, add an explanation preceded by `BREAKING CHANGE:` keyword. For example:
```
BREAKING CHANGE: Main changes subject
- Optional message
- Another optional message
```


<h2 id='section_faq'>
💡 FAQ
</h2>

<h2 id='section_support'>
👍 Support
</h2>

* [**Yaman Katby**](https://yaman-katby.web.app) - *Initial work*

See also the list of [contributors](https://github.com/mohakapt/react-native-native-dialog/contributors) who participated in this project.

<h2 id='section_license'>
📝 License
</h2>

This library is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

<h2 id='release_notes'>
📄 Release Notes
</h2>
