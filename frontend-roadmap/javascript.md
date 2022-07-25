### Resources

- [JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour by Programming with Mosh 📹](https://www.youtube.com/watch?v=W6NZfCO5SIk)
- [JavaScript: How It's Made by Fireship 📹](https://www.youtube.com/watch?v=FSs_JYwnAdI)
- [Site com tutoriais e documentacao](https://javascript.info/) 📄
- [Javascript Algorithms and Data Structures by Freecodecamp 🛠️](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [https://eloquentjavascript.net/](https://eloquentjavascript.net/) 📗
- [Javascript completo ES6+ by Origamid](https://www.origamid.com/slide/javascript-completo-es6/#/0101-javascript-completo-es6/1)
- [cheat sheet](https://htmlcheatsheet.com/js/)
- [Semana Js Expert Erick Wendel](https://javascriptexpert.com.br/)
- [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
- [Asynchronous JavaScript – Callbacks, Promises, and Async/Await Explained](https://www.freecodecamp.org/news/asynchronous-javascript-explained/)

---

- 🔨 Tools
  Edit and visualize js online: [https://jsfiddle.net/](https://jsfiddle.net/) | [https://glitch.com/](https://glitch.com/)

## Summary

- [What is it?](#what-is-it)
- [How and where to use it](#how-and-where-to-use-it)
- [Operators and values](#operators-and-values)
  - [Values](#values)
  - [Operators](#operators)
  - [Expressions and statements](#expressions-and-statements)
  - [Arrays](#arrays)
  - [Functions](#functions)
    - [Function Declarations](#function-declarations)
    - [Function Expressions](#function-expressions)
    - [Arrow Functions](#arrow-functions)
- [Asynchronous Javascript](#asynchronous-javascript)
  - [Async/Await](#asyncawait)
  - [Callbacks](#callbacks)
  - [Promise](#promise)
    - [**What is a Promise?**](#what-is-a-promise)

# What is it?

JavaScript is a interpreted programming language (in computer science, an interpreter is a computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program), andof first-class functions and higher-order functions because you can assign functions to variables, return functions from other functions, and pass functions as parameters to other functions.

**Characteristics:** interpreted language, of light programming and that has weak and dynamic typing because:

- The type of the variable in JavaScript is defined at the time of its assignment, this process is called type inference.
- An error or an Exception is not thrown when executing: 1 + "text".
- It is not necessary to specify the type when creating a variable in JavaScript.
- The word “dynamic” is used to describe both client-side* and server-side* JavaScript — this word refers to the ability to update the display of a web page/app to show different things under different circumstances, generating new content as requested.

# How and where to use it

Both on client (frontend) and server (nodejs) side. A very common use of JavaScript is to dynamically modify HTML and CSS to update a UI, via the Document Object Model (DOM) API.

![via Origamid Javascript course](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d75581e-dbaf-4c55-86c8-5056646d97f8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220307T132740Z&X-Amz-Expires=86400&X-Amz-Signature=db8f4281b3266825739d76d3bb118f082217b3794c67b87a8f22430b6b9ffc71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

via Origamid Javascript course

> **DOM** is an interface that represents HTML and XML documents through objects. With it, it is possible to manipulate the structure, style and content of these documents.

> **WINDOW AND DOCUMENT**
> They are the main objects of the DOM, much of the manipulation is done through their methods and properties.
>
> `window.alert('This is an alert'); alert('This is an alert'); // It works`
>
> `document.querySelector('h1'); // Select the first h1 document.body; // Return the body`
>
> _window is the global object, so we don't need to call it in front of its methods and properties._

# Operators and values

Main core concepts of JavaScript involves knowing their values, operators and types:

## Values

To create a value, you must merely invoke its name. They are:

- Numbers
- Strings
- Boolean
- Empty Values
- Arrays
- Objects

There are two special values, written `null` and `undefined`, that are used to denote the absence of a *meaningful* value. They are themselves values, but they carry no information.

Many operations in the language that don’t produce a meaningful value (you’ll see some later) yield `undefined` simply because they have to yield *some* value.

The difference in meaning between `undefined` and `null` is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.

```jsx
var age = 18; // number
var name = "Jane"; // string
var name = { first: "Jane", last: "Doe" }; // object
var truth = false; // boolean
var sheets = ["HTML", "CSS", "JS"]; // array
var a;
typeof a; // undefined
var a = null; // value null
```

[Cheat Sheet - Values](https://www.notion.so/Cheat-Sheet-Values-ece0e9abfb7b44ffb9395bbe2b94e1f2)

## Operators

Is a structure of code that models a real-life object. You can have a simple object that represents a box and contains information about its width, length, and height, or you could have an object that represents a person, and contains data about their name, height, weight, what language they speak, how to say hello to them, and more. Ex: let dog = { name : 'Spot', breed : 'Dalmatian' };

- **Arithmetic Operators**

Arithmetic operators are used to perform arithmetic on numbers. A typical arithmetic operation operates on two numbers.

![Operators](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d77f8663-462c-47b9-96b9-6cc7c60d35fe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220307T132859Z&X-Amz-Expires=86400&X-Amz-Signature=e37d51f896723d2dcb89a2bcd1eb6169b9092b4c68d6f96cecf7f756b4255c7c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- **Assignments operators**

Assignment operators assign values to JavaScript variables.

![Operators](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/56584c6a-3b49-4506-a2e6-d29554089781/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220307T132937Z&X-Amz-Expires=86400&X-Amz-Signature=782c52205377aecee075fe29076c0171ce73778132956edd425c7f6c800361f5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

```jsx
var myVar = 1;
myVar += 5;
console.log(myVar); //6 would be displayed in the console.
```

Like the += operator, -= subtracts a number from a variable.

The \*= operator multiplies a variable by a number.

The /= operator divides a variable by another number

- **Comparison Operators**

[Operators](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd30cf6a-c552-4246-bebe-7db7b8781e70/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220307T132953Z&X-Amz-Expires=86400&X-Amz-Signature=fb15ed020da87f2446cf316c11183498b65383c07771c75b902c3aefc007e1e9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

Diferenças entre == e ===: enquanto o == compara diretamente dois valores, ele irá retornar true independente do tipo de dado. Exemplo 3 == '3' (retornará true), enquanto o === só retorna true se todos forem iguais.

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

- **Logic operators:**

Sometimes you will need to test more than one thing at a time.

**AND:** operator (&&) returns true if and only if the operands to the left and right of it are true. Exemplo:

```jsx
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

**OR:** operator ( | | ) returns true if either of the operands is true. Otherwise, it returns false.

```jsx
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

**! LOGICAL NOT**

> **You can combine and transform values with operators.**

## Expressions and statements

A fragment of code that produces a value is called an *expression*. Every value that is written literally (such as `22`or `"psychoanalysis"`)is an expression. An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one.

If an expression corresponds to a sentence fragment, a JavaScript *statement* corresponds to a full sentence. A program is a list of statements.

## Arrays

## Functions

A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value. Values given to functions are called _arguments._ Different functions might need a different number or different types of arguments.

JavaScript functions are defined with the `function` keyword. You can use a function declaration or a function expression.

### Function Declarations

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

```tsx
function functionName(parameters) {
  // code to be executed
}
```

### Function Expressions

A function expression can be stored in a variable:

```tsx
const x = function (a, b) {
  return a * b;
};
```

After a function expression has been stored in a variable, the variable can be used as a function:

```tsx
const x = function (a, b) {
  return a * b;
};
let z = x(4, 3);
```

### Arrow Functions

Arrow functions allows a short syntax for writing function expressions.

You don't need the `function` keyword, the `return` keyword, and the **curly brackets**.

Arrow functions do not have their own `this`. They are not well suited for defining **object methods**.

Arrow functions are not hoisted. They must be defined **before** they are used.

```tsx
const x = (x, y) => x * y;
```

# Asynchronous Javascript

By default, JavaScript is a synchronous, single threaded programming language. This means that instructions can only run one after another, and not in parallel. This generates some problems, mainly involving the loading of information and the disposition of data.

The problems with synchronous JavaScript were addressed by introducing asynchronous JavaScript. Think of asynchronous code as code that can start now, and finish its execution later. When JavaScript is running asynchronously, the instructions are not necessarily executed one after the other. There are some ways to work with asynchronous Javascript:

## Async/Await

## Callbacks

A callback is a function that is passed inside another function, and then called in that function to perform a task.

Example:

```jsx
console.log("fired first");
console.log("fired second");

setTimeout(() => {
  console.log("fired third");
}, 2000);

console.log("fired last");
```

The snippet above is a small program that logs stuff to the console. But there is something new here. The interpreter will execute the first instruction, then the second, but it will skip over the third and execute the last.

The `setTimeout` is a JavaScript function that takes two parameters. The first parameter is another function, and the second is the time after which that function should be executed in milliseconds. Now you see the definition of callbacks coming into play.

The function inside `setTimeout` in this case is required to run after two seconds (2000 milliseconds).

Say we used this method to fetch data from a database. While the user is waiting for the database call to return results, the flow in execution will not be interrupted.

This method was very efficient, but only to a certain point. Sometimes, developers have to make multiple calls to different sources in their code. In order to make these calls, callbacks are being nested until they become very hard to read or maintain. This is referred to as Callback Hell

To fix this problem, promises were introduced.

## Promise

### **What is a Promise?**

A promise, in our context, is something which will take some time to do. There are two possible outcomes of a promise:

- We either run and resolve the promise, or
- Some error occurs along the line and the promise is rejected

Promises came along to solve the problems of callback functions. A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

Example:

```jsx
const getData = (dataEndpoint) => {
   return new Promise ((resolve, reject) => {
     //some request to the endpoint;

     if(request is successful){
       //do something;
       resolve();
     }
     else if(there is an error){
       reject();
     }

   });
};
```

The code above is a promise, enclosed by a request to some endpoint.

After making a call to the endpoint for example, if the request is successful, we would resolve the promise and go on to do whatever we want with the response. But if there is an error, the promise will get rejected.

Promises are a neat way to fix problems brought about by callback hell, in a method known as **promise chaining**. You can use this method to sequentially get data from multiple endpoints, but with less code and easier methods.
