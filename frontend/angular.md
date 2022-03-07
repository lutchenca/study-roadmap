# Angular 

## Summary
 - [What is it?](#what-is-it)
 - [Angular Applications](#angular-applications)
 - [Components](#components)
 - [Templates](#templates)
 - [Specific concepts](#specific-concepts)
 - [ng-template](#ng-template)
 - [Decorators](#decorators)
 
## Resources
- [**Angular’s official documentation**](https://angular.io/docs) 
- [Angular University](https://angular-university.io/)
- [Angular Basics](https://egghead.io/courses/angular-basics-888f) 
- [https://www.samjulien.com/add-routing-existing-angular-project](https://www.samjulien.com/add-routing-existing-angular-project)
- [https://angular.io/guide/architecture-components](https://angular.io/guide/architecture-components)
- [Angular ng-content and Content Projection: A Complete Guide - How To Use ng-content To Improve Component API Design](https://blog.angular-university.io/angular-ng-content/) 
- [Angular ng-template, ng-container and ngTemplateOutlet - The Complete Guide To Angular Templates](https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/) 
- [Angular Decorators](https://www.tektutorialshub.com/angular/angular-decorators/) 
- [Angular Decorators](https://www.javatpoint.com/angular-decorators) 
- - [Curso Angular #13: Reusando Componentes com Input properties](https://youtu.be/G2cBpYZ0fzk)
- [Curso Angular 8: @Output e @Input - #07](https://www.youtube.com/watch?v=lkwd9DA8RwU) 

## What is it 
> Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.


Angular is a development platform, built on TypeScript. As a platform, Angular includes:

- A component-based framework for building scalable web applications
- A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
- A suite of developer tools to help you develop, build, test, and update your code

# Angular Applications

Core ideas behind Angular:

## Components

Components are the main building block for Angular applications. Each component consists of:

- An **HTML template** that declares what renders on the page
- A **Typescript class** that defines behavior, would look like this
    
    where:
    
    `@Component` is a Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime. Basically specifies which CSS will be defined and used on Component Template. [See Decorator definition on TS.](https://www.typescriptlang.org/docs/handbook/decorators.html) 
    
    `selector: ‘app-component’` is a CSS selector for the component.
    
    `templateUrl` for HTML template that the component uses to display information and `styleUrls` for select the styles for the component's template.
    
    Add a `class` statement that includes the code for the component.
    
- A **CSS selector** that defines how the component is used in a template
- Optionally, CSS styles applied to the template

Component example:

```
tsx
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

### Create a new component

```tsx
ng g c <route>/<name>
```

## Templates

Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

A component must belong to an NgModule in order for it to be available to another component or application. To make it a member of an NgModule, list it in the `declarations` field of the `[NgModule](https://angular.io/api/core/NgModule)` metadata.

A template looks like regular HTML, except that it also contains Angular [template syntax](https://angular.io/guide/template-syntax), which alters the HTML based on your application's logic and the state of application and DOM data. Your template can use *data binding* to coordinate the application and DOM data, *pipes* to transform data before it is displayed, and *directives*  to apply application logic to what gets displayed.

```
jsx
<h2>Hero List</h2>

<p><em>Select a hero from the list to see details.</em></p>
<ul>
  <li *ngFor="let hero of heroes">
    <button type="button" (click)="selectHero(hero)">
      {{hero.name}}
    </button>
  </li>
</ul>

<app-hero-detail *ngIf="selectedHero" [hero]="selectedHero"></app-hero-detail>

```

This template uses typical HTML elements like `<h2>` and `<p>`, and also includes Angular template-syntax elements, `*[ngFor](https://angular.io/api/common/NgForOf)`, `{{hero.name}}`, `(click)`, `[hero]`, and `<app-hero-detail>`. The template-syntax elements tell Angular how to render the HTML to the screen, using program logic and data.

- The `[ngFor](https://angular.io/api/common/NgForOf)` directive tells Angular to iterate over a list.
- `{{hero.name}}`, `(click)`, and `[hero]` bind program data to and from the DOM, responding to user input. See more about [data binding](https://angular.io/guide/architecture-components#data-binding) below.
- The `<app-hero-detail>` tag in the example is an element that represents a new component, `HeroDetailComponent`. `HeroDetailComponent` (code not shown) defines the hero-detail child view of `HeroListComponent`. Notice how custom components like this mix seamlessly with native HTML in the same layouts.

# Specific concepts

## ng-template

ng-template directive represents an Angular template: this means that the content of this tag will contain part of a template, that can be then be composed together with other templates in order to form the final component template. Angular is already using ng-template under the hood in many of the structural directives that we use all the time: `ngIf`, `ngFor`and `ngSwitch`

With the ng-template tag we are simply defining a template, but we are not using it yet.

## Decorators

Decorators are design patterns used to isolate the modification or decoration of a class without modifying the source code.

In Angular, decorators are functions that allow a **service, directive,** or **filter** to be modified before it is used.

**There are four main types of angular decorators:**

- Class decorators, such as **@Component** and **@NgModule**
- Property decorators for properties inside classes, such as **@Input** and **@Output**
- Method decorators for methods inside classes, such as **@HostListener**
- Parameter decorators for parameters inside class constructors, such as **@Inject**