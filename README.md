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

### `push()`
This method works like `Array.prototype.push()` method which allows you to insert an element to the end of the array but this method does not mutate the original array. For example: 
```js
import { indices } from "indices";

const current = [1, 2, 3];
const next = indices(list)
  .push(4)
  .toArray(); // output -> [1, 2, 3, 4];
```
The `next` variable will contain the new array where the `current` variable still has the same value as initialized.

Also, it's possible to insert multi-element to the end of the array using the `push` method by passing them as separate arguments. For example:
```js
const current = [1, 2, 3];
const next = indices(list)
  .push(4, 5, 6)
  .toArray(); // output -> [1, 2, 3, 4, 5, 6];
```

### `unshift()`
This method works exactly like the `Array.prototype.unshift()` method which allows you to add an element to the beginning of the array but without mutating the original array. For example:
```js
import { indices } from "indices";

const list = ["🐶", "🐑", "🐈"];
const newList = indices(list)
  .unshift("🐼")
  .toArray(); // output => ["🐼", "🐶", "🐑", "🐈"];
```

As the `push()` method also the `unshift()` method allows you to add multi elements to the beginning of the array by passing the elements as separated argument as following.
```js
const list = ["🐶", "🐑", "🐈"];
const newList = indices(list)
  .unshift("🐼", "🐓", "🐇")
  .toArray(); // output => ["🐼", "🐓", "🐇", "🐶", "🐑", "🐈"];
```

### `pop()`
As the `Array.prototype.pop()` method `pop()` method allows you to remove an element from the end of the array but without mutating the original array. For example:
```js
import { indices } from "indices";

const list = ["🐼", "🐶", "🐑"];
const newList = indices(list)
  .pop()
  .toArray(); // output => ["🐼", "🐶"];
```

Also, you can remove multi elements from the of end the array by passing the count of the elements those you want to remove as following.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = array(list)
  .pop(2)
  .toArray(); // output => ["🐼"];
```

### `shift()`
As the `Array.prototype.shift()` method `shift()` method allows you to remove an element from the beginning of the array but without mutating the original array. For example:
```js
import { indices } from "indices";

const list = ["🐼", "🐶", "🐑"];
const newList = indices(list)
  .shift()
  .toArray(); // output => ["🐶", "🐑"];
```

Also, you can remove multi elements from the beginning of the array by passing the count of the elements those you want to remove as following.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = indices(list)
  .shift(2)
  .toArray(); // output => ["🐑"];
```

### `concat()`
### `replace()`
`replace()` method unlike the other methods has no synonym in the `Array.prototype` object. `replace()` method helps you to replace an element in the array with another one that you pass. `replace()` method takes two arguments. First argument the index of the element that you want to replace and the second argument the new element. For example:
```js
import { indices } from "indices";

const list = ["🐼", "🐶", "🐑"];
const newList = indices(list)
  .replace(0, "🐈")
  .toArray(); // output => ["🐈", "🐶", "🐑"];
```

If you don't know the exact index of the element that you want to replace you can pass a predicate function as the first argument. The predicate funtion is a function to execute on each value in the array until the function returns true, indicating that the satisfying element was found. The `replace()` method will use the index of that element as the `index` argument.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = indices(list)
  .replace(animal => animal === "🐼", "🐈")
  .toArray(); // output => ["🐈", "🐶", "🐑"];
```

If you calculate your new element with an expensive operation, and you want to use the previous element to calculate the new one you can pass a callback function as the second argument to the `replace()` method. The callback function is a function takes the previous element as the first argument and returns the new element.
```js
const list = ["🐼", "🐶", "🐑"];
const newList = indices(list)
  .replace(animal => animal === "🐼", prevAnimal => prevAnimal + "🐈")
  .toArray(); // output => ["🐼🐈", "🐶", "🐑"];
```

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
