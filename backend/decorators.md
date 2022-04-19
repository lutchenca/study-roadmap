### Resources

- [https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841) - Exploring EcmaScript Decorators

[https://github.com/wycats/javascript-decorators](https://github.com/wycats/javascript-decorators)

[https://github.com/tc39/proposal-decorators](https://github.com/tc39/proposal-decorators)

### Summary

### What a Decorator is

Decorators are functions called on classes, class elements, or other JavaScript syntax forms during definition.

```tsx
@defineElement("my-class")
class C extends HTMLElement {
  @reactive accessor clicked = false;
}
```

Decorators have three primary capabilities:

1. They can **replace** the value that is being decorated with a *matching* value that has the same semantics. (e.g. a decorator can replace a method with another method, a field with another field, a class with another class, and so on).
2. They can provide **access** to the value that is being decorated via accessor functions which they can then choose to share.
3. They can **initialize** the value that is being decorated, running additional code after the value has been fully defined. In cases where the value is a member of class, then initialization occurs once per instance.

Essentially, decorators can be used to metaprogram and add functionality to a value, without fundamentally changing its external behavior

## **Detailed Design**

The three steps of decorator evaluation:

1. Decorator expressions (the thing after the `@`) are *evaluated* interspersed with computed property names.
2. Decorators are *called* (as functions) during class definition, after the methods have been evaluated but before the constructor and prototype have been put together.
3. Decorators are *applied* (mutating the constructor and prototype) all at once, after all of them have been called.

### **1. Evaluating decorators**

Decorators are evaluated as expressions, being ordered along with computed property names. This goes left to right, top to bottom. The result of decorators is stored in the equivalent of local variables to be later called after the class definition initially finishes executing.

### **2. Calling decorators**

When decorators are called, they receive two parameters:

1. The value being decorated, or `undefined` in the case of class fields which are a special case.
2. A context object containing information about the value being decorated

Using TypeScript interfaces for brevity and clarity, this is the general shape of the API:

```tsx
type Decorator = (value: Input, context: {
  kind: string;
  name: string | symbol;
  access: {
    get?(): unknown;
    set?(value: unknown): void;
  };
  isPrivate?: boolean;
  isStatic?: boolean;
  addInitializer?(initializer: () => void): void;
}) => Output | void;
```

`Input` and `Output` here represent the values passed to and returned from a given decorator. Each type of decorator has a different input and output, and these are covered below in more detail. All decorators can choose to return nothing, which defaults to using the original, undecorated value.

The context object also varies depending on the value being decorated. Breaking down the properties:

- `kind`: The kind of decorated value. This can be used to assert that the decorator is used correctly, or to have different behavior for different types of values. It is one of the following values.
    - `"class"`
    - `"method"`
    - `"getter"`
    - `"setter"`
    - `"field"`
    - `"accessor"`
- `name`: The name of the value, or in the case of private elements the *description* of it (e.g. the readable name).
- `access`: An object containing methods to access the value. These methods also get the *final* value of the element on the instance, not the current value passed to the decorator. This is important for most use cases involving access, such as type validators or serializers. See the section on Access below for more details.
- `isStatic`: Whether or not the value is a `static` class element. Only applies to class elements.
- `isPrivate`: Whether or not the value is a private class element. Only applies to class elements.
- `addInitializer`: Allows the user to add additional initialization logic. This is available for all decorators which operate per-class, as opposed to per-instance (in other words, decorators which do not have kind `"field"` - discussed in more detail below).

See the Decorator APIs section below for a detailed breakdown of each type of decorator and how it is applied.

### **3. Applying decorators**

Decorators are applied after all decorators have been called. The intermediate steps of the decorator application algorithm are not observable--the newly constructed class is not made available until after all method and non-static field decorators have been applied.

The class decorator is called only after all method and field decorators are called and applied.

Finally, static fields are executed and applied.