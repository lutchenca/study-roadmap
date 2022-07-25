# RxJS

### Resources

- [https://www.learnrxjs.io/](https://www.learnrxjs.io/)
- [https://rxjs.dev/api/operators/map](https://rxjs.dev/api/operators/map)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description)
- [https://www.w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp) - JS Arrays
- [https://www.javascripttutorial.net/javascript-array-methods/](https://www.javascripttutorial.net/javascript-array-methods/) - JavaScript Array Methods

### Summary

- Intro
  - JavaScript Arrays
  - Array Properties
  - Array Methods
- Major Concepts
  - Observable
  - Observer
  - Subscription
  - Operators
  - Subjects
  - Pipe
  - Schedulers
  - Marble Testing

RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the [Observable](https://rxjs.dev/guide/observable), satellite types (Observer, Schedulers, Subjects) and operators inspired by `Array` methods (`[map](https://rxjs.dev/api/index/function/map)`, `[filter](https://rxjs.dev/api/index/function/filter)`, `[reduce](https://rxjs.dev/api/index/function/reduce)`, `[every](https://rxjs.dev/api/index/function/every)`, etc) to allow handling asynchronous events as collections.

### JavaScript Arrays

The **Array objec**t, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

JavaScript arrays are re-sizable and can contain a mix of different data types.

- Constructor - `Array()`

Creates a new Array object.

get Array

**Arrays are Objects**

Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

**Array Elements Can Be Objects**

JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

```jsx
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

### Array Properties

The real strength of JavaScript arrays are the built-in array properties and methods:

```jsx
cars.length; // Returns the number of elements
cars.sort(); // Sorts the array
```

### Array Methods

**Adding / removing elements**

- [push()](https://www.javascripttutorial.net/javascript-array-push/) – add one or more elements to the end of an array.
- [unshift()](https://www.javascripttutorial.net/javascript-array-unshift/) – add one or more elements to the beginning of an array.
- [pop()](https://www.javascripttutorial.net/javascript-array-pop/) – remove an element from the end of an array.
- [shift()](https://www.javascripttutorial.net/javascript-array-shift/) – remove the first element from an array.
- [splice()](https://www.javascripttutorial.net/javascript-array-splice/) – manipulate elements in an array such as deleting, inserting, and replacing elements.

**Finding elements**

- [indexOf()](https://www.javascripttutorial.net/javascript-array-indexof/) – locate an element in an array.
- [includes()](https://www.javascripttutorial.net/es-next/javascript-array-includes/) – check if an element is in an array.
- [find()](https://www.javascripttutorial.net/es6/javascript-array-find/) – find an element in an array
- [findIndex()](https://www.javascripttutorial.net/es6/javascript-array-findindex/) – find the index of an element in an array.

**High-order methods**

- [map()](https://www.javascripttutorial.net/javascript-array-map/) – transform array elements.
- [filter()](https://www.javascripttutorial.net/javascript-array-filter/) – filter elements in an array
- [reduce()](https://www.javascripttutorial.net/javascript-array-reduce/) – reduce elements of an array to a value.
- [every()](https://www.javascripttutorial.net/javascript-every/) – check if every element in an array passes a test.
- [some()](https://www.javascripttutorial.net/javascript-array-some/) – check if at least one element in an array passed a test.
- [sort()](https://www.javascripttutorial.net/javascript-array-sort/) – sort elements in an array.
- [forEach()](https://www.javascripttutorial.net/javascript-array-foreach/) – loop through array elements.

**Manipulating Arrays**

- [concat()](https://www.javascripttutorial.net/javascript-array-concat/) – merge two arrays into an array.

**Creating Arrays**

- [of()](https://www.javascripttutorial.net/es6/array-of/) – improve array creation.
- [from()](https://www.javascripttutorial.net/es6/array-from/) – create arrays from array-like or iterable objects.

**Flattening arrays**

- [flat()](https://www.javascripttutorial.net/es-next/javascript-array-flat/) – flatten an array recursively up to a specified depth.
- [flatMap()](https://www.javascripttutorial.net/es-next/javascript-array-flatmap/) – execute a mapping function on every element and flatten the result.

The essential concepts in RxJS which solve async event management are:

- **Observable:** represents the idea of an invokable collection of future values or events.
- **Observer:** is a collection of callbacks that knows how to listen to values delivered by the Observable.
- **Subscription:** represents the execution of an Observable, is primarily useful for cancelling the execution.
- **Operators:** are pure functions that enable a functional programming style of dealing with collections with operations like `[map](https://rxjs.dev/api/index/function/map)`, `[filter](https://rxjs.dev/api/index/function/filter)`, `[concat](https://rxjs.dev/api/index/function/concat)`, `[reduce](https://rxjs.dev/api/index/function/reduce)`, etc.
- **Subject:** is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
- **Schedulers:** are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. `setTimeout` or `requestAnimationFrame` or others.
