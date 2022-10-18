# RxJS

### Resources

- [https://www.learnrxjs.io/](https://www.learnrxjs.io/)
- [https://rxjs.dev/api/operators/map](https://rxjs.dev/api/operators/map)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description)
- [https://www.w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp) - JS Arrays
- [https://www.javascripttutorial.net/javascript-array-methods/](https://www.javascripttutorial.net/javascript-array-methods/) - JavaScript Array Methods
- [https://www.youtube.com/watch?v=T9wOu11uU6U&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi](RxJS - What and Why? Academind course)

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
