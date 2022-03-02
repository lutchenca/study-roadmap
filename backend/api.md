# API 
---

Because of that it’s important to understand Rest Architecture, to build the best way to make this communication happen - why should I make a Post? What is a Del request?

---

## Summary
 - [What is it?](#what-is-it)
 - [REST](#daily-plan)
 - [REST API](#rest-api)
 - [RESTful](#restful)
 
## Links used to study
- [O que é API? REST e RESTful? | Mayk Brito](https://youtu.be/ghTrp1x_1As)
- [RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express](https://youtu.be/-MTSQjw5DrM)
- [Code Your First API With Node.js and Express: Understanding REST APIs](https://code.tutsplus.com/tutorials/code-your-first-api-with-nodejs-and-express-understanding-rest-apis--cms-31697) 
- [Introduction to Restful architecture](https://www.educba.com/restful-architecture/)
 
 ### What is it API
It’s a way to computers talk to each others. It’s just like using an web browser but instead of clicking buttons you write code to explicit request data for a server.

Front-end is the interface of the product (website, app, game, etc) user is seeing/touching and back-end is the database. Front and Back didn’t communicate on a direct way, so developer needs to create something to build the communication between interface and database - this creation its called API. 

APIs can be created in many forms, using different languages and to solve different problems. 

The routes you create in the API link directly to actions performed in the database - this actions are `insert` on database, for example - 

### REST
Representational State Transfer, or REST, describes an architectural style for web services. REST consists of a set of standards or constraints for sharing data between different systems, and systems that implement REST are known as RESTful. REST is an abstract concept, not a language, framework, or type of software.

### REST API 
When an API is created on the server, the data it contains is accessed via endpoints. An endpoint is the request URL that can accept and process the GET, POST, PUT, or DELETE request.

### RESTful 
Most APIs in the world are RESTful which means they follow a certain rules or constraints knows as representational state transfer. A RESTful API organizes data entities or resources into a bunch of unique URIs. 

RESTful API is simply an API that adheres to the principles and constraints of REST. In a Web API, a server receives a request through a URL endpoint and sends a response in return, which is often data in a format such as JSON.