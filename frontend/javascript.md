### Resources

- [JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour by Programming with Mosh 📹](https://www.youtube.com/watch?v=W6NZfCO5SIk) 
- [JavaScript: How It's Made by Fireship 📹](https://www.youtube.com/watch?v=FSs_JYwnAdI) 
- [Site com tutoriais e documentacao](https://javascript.info/) 📄
- [Javascript Algorithms and Data Structures by Freecodecamp 🛠️](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) 
- [https://eloquentjavascript.net/](https://eloquentjavascript.net/) 📗
- [Javascript completo ES6+ by Origamid](https://www.origamid.com/slide/javascript-completo-es6/#/0101-javascript-completo-es6/1) 
---

- 🔨 Tools
    
    Edit and visualize js online: [https://jsfiddle.net/](https://jsfiddle.net/) | [https://glitch.com/](https://glitch.com/)
    

## Summary

- [What is it?](#what-is-it)
- [How and where to use it](#how-and-where-to-use-it)
- [Operators and values](#operators-and-values)
  - [Values](#values)
  - [Operators](#operators)

# What is it?

JavaScript is a interpreted programming language (in computer science, an interpreter is a computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program),  andof first-class functions and higher-order functions because you can assign functions to variables, return functions from other functions, and pass functions as parameters to other functions.

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
> 

> **WINDOW AND DOCUMENT**
They are the main objects of the DOM, much of the manipulation is done through their methods and properties.
> 
> 
> `window.alert('This is an alert');
> alert('This is an alert'); // It works`
> 
> `document.querySelector('h1'); // Select the first h1
> document.body; // Return the body`
> 
> *window is the global object, so we don't need to call it in front of its methods and properties.*
> 

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
var age = 18;                           // number 
var name = "Jane";                      // string
var name = {first:"Jane", last:"Doe"};  // object
var truth = false;                      // boolean
var sheets = ["HTML","CSS","JS"];       // array
var a; typeof a;                        // undefined
var a = null;                           // value null
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
console.log(myVar) //6 would be displayed in the console.
```

Like the += operator, -= subtracts a number from a variable.

The *= operator multiplies a variable by a number.

The /= operator divides a variable by another number

- **Comparison Operators**

![Operators](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd30cf6a-c552-4246-bebe-7db7b8781e70/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220307T132953Z&X-Amz-Expires=86400&X-Amz-Signature=fb15ed020da87f2446cf316c11183498b65383c07771c75b902c3aefc007e1e9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

Diferenças entre == e ===: enquanto o == compara diretamente dois valores, ele irá retornar true independente do tipo de dado. Exemplo 3 == '3' (retornará true), enquanto o === só retorna true se todos forem iguais. 

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

- **Operadores lógicos:**

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

![Operators](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6b4227be-d49e-42e8-acfb-9c1584fc3342/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220307T133016Z&X-Amz-Expires=86400&X-Amz-Signature=00df841d4917986ee85e65c6751b2e16d6f30e33a70689b69b35ece9aea671de&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

> **You can combine and transform values with operators.**
>