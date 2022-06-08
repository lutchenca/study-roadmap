# Resources

- [https://docs.nestjs.com/](https://docs.nestjs.com/) - Nest Documentation
- [https://medium.com/teamzerolabs/introduction-to-nestjs-dependency-injections-in-typescript-94e1154f40c](https://medium.com/teamzerolabs/introduction-to-nestjs-dependency-injections-in-typescript-94e1154f40c) - Introduction to NestJS, Dependency Injections in Typescript

### Summary

- [Resources](#resources)
    - [Summary](#summary)
- [What NestJS is:](#what-nestjs-is)
    - [callback](#callback)

# What NestJS is:

Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Nest handles all kinds of responsibilities:

- Routing
- Controller input/output serialization
- Middleware (also called interceptors)
- Validators/Transforms

With NestJS, your code can be structured into finer separation of concerns. This makes reasoning/relearning what each class does simpler. Let’s look at some examples:

### callback

- what are the core fundamentals of Nest?
    
    language
    
    platform
    
- what are nest controllers?
    
    Controllers are responsible for handling incoming **requests** and returning **responses** to the client.

To define a new controller, you need:

- Expose a new class
- Using the @Controller() decorator
- Add the class in a module, even if it's in the root
- Decorate some method with @Get() or @Post() to receive a get or post request
    
    In order to create a basic controller, we use classes and decorators. Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

    ### Modules

The basic way to cohesively construct and group code blocks. To start Nest.js, we need to inform the root module of our application, so good practice says that you should organize your application in a tree format, with a root module and the following will be its functionalities.