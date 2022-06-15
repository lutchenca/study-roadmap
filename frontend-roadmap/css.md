[Tools](https://www.notion.so/Tools-53e71e252cf64d89afe78d647be3fd19)

## Resources

- [https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/)
- [https://css-tricks.com/complete-guide-to-css-functions/#aa-introduction](https://css-tricks.com/complete-guide-to-css-functions/#aa-introduction)
- Origamid: [https://origamid.com/projetos/flexbox-guia-completo/](https://origamid.com/projetos/flexbox-guia-completo/)
- [https://flexboxfroggy.com/](https://flexboxfroggy.com/)
- [https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/](https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/)

### Summary:

- What is it
- Flex Container
  - Flex Wrap
  -

Sempre tem o container - onde coloca o display: flex;

# Flex Container

1. display: flex;

Define o elemento como um flex container, tornando os seus filhos flex-itens.

# Flex Wrap

Vai quebrando os itens em outras linhas

# Properties:

### **`justify-content`**

property, which aligns items horizontally and accepts the following values:

- **`flex-start`**: Items align to the left side of the container.
- **`flex-end`**: Items align to the right side of the container.
- **`center`**: Items align at the center of the container.
- **`space-between`**: Items display with equal spacing between them.
- **`space-around`**: Items display with equal spacing around them.

### **`align-items`**

property aligns items vertically and accepts the following values:

- **`flex-start`**: Items align to the top of the container.
- **`flex-end`**: Items align to the bottom of the container.
- **`center`**: Items align at the vertical center of the container.
- **`baseline`**: Items display at the baseline of the container.
- **`stretch`**: Items are stretched to fit the container.

### exemplo

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce679119-52b5-42e1-9cba-1433ba8645dc/Untitled.png)

### **`flex-direction`**

this CSS property defines the direction items are placed in the container, and accepts the following values:

- **`row`**: Items are placed the same as the text direction.
- **`row-reverse`**: Items are placed opposite to the text direction.
- **`column`**: Items are placed top to bottom.
- **`column-reverse`**: Items are placed bottom to top.

> Note: Notice that when the flex direction is a column, **`justify-content`** changes to the vertical and **`align-items`** to the horizontal.

> Note: Notice that when you set the direction to a reversed row or column, start and end are also reversed.

### exemplo

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2007da59-5771-4055-b4bf-ba5fff36574a/Untitled.png)

Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the **`order`** property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af0d98d7-f651-4196-9b4b-dfb225f6451c/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6265d5bb-adc4-4271-ba67-5f11cf462af4/Untitled.png)

Use **`align-content`** to set how multiple lines are spaced apart from each other. This property takes the following values:

- **`flex-start`**: Lines are packed at the top of the container.
- **`flex-end`**: Lines are packed at the bottom of the container.
- **`center`**: Lines are packed at the vertical center of the container.
- **`space-between`**: Lines display with equal spacing between them.
- **`space-around`**: Lines display with equal spacing around them.
- **`stretch`**: Lines are stretched to fit the container.

This can be confusing, but **`align-content`** determines the spacing between lines, while **`align-items`** determines how the items as a whole are aligned within the container. When there is only one line, **`align-content`** has no effect.

# CSS Inheritance

Despite protestations by many, CSS does not only provide a global scope. If it did, everything would look exactly the same. Instead, CSS has a global scope and a local scope. Just as in JavaScript, the local scope has access to the parent and global scope. In CSS, this facilitates **inheritance**.

For instance, if I apply a `font-family` declaration to the root (read: global) `html` element, I can ensure that this rule applies to all ancestor elements within the document

## The `inherit` Keyword

Some types of properties are not inherited by default, and some elements do not inherit some properties. But you can use `[property name]: inherit` to force inheritance in some cases.

For example, the `input` element doesn’t inherit any of the font properties in the previous example. Nor does `textarea`. In order to make sure all elements inherit these properties from the global scope, I can use the universal selector and the `inherit` keyword. This way, I get the most mileage from inheritance.
