
# Demo Angular Project for Filed

This is a test project to demonstrate responsive and Angular features like reactive forms, routing, services, resuable components, Ngrx store etc.

## Get started

### Clone the repo

```shell
git clone https://github.com/utkarsh1agarwal/Filed-demo.git
cd angular-test
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install ( if already exist use npm update)
ng s
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**Details**

Scss used with responive html5 design

The application contain resulabe input component *app-input* and input attribute details are passing from the json

Reactive form tempates are used

It has the Ngrx store which save the form information and and bind with with on forward and backword navigation of pages


**Requirements**
1. Create DTO for modeling User details like below, which will be used to make requests
a. First Name (mandatory, string)
b. Last Name (mandatory, string)
c. Email (mandatory, string)
d. Monthly Advertising Budget* (mandatory, number)
e. Phone Number - CCV (mandatory, number)
2. Using NgRx, create a state management solution that will hold our user.
3. Write a Payment service with a function that creates a POST request.
4. Create a new page and a new component (to be used in this page), with inputs for the DTO,
created at point 1, use reactive forms and add validations on these inputs. Create a button with
a click event and call the payment service method and based on the http response, show a toast
notification informing the user.
5. In the app.component.html, create a button (name it any way you like) and use the Angular
router to navigate to the new page created at the previous point.
6. To make sure that our state management solution is working, get the data from the store and
display it on the app.component.html.
Obligations:
- Use the angular/typescript style guide to separate the models/dto and the services.
- Use RxJS when making requests and demonstrate some operators.
- Make sure to avoid any memory leaks.
- The design should be pixel perfect and responsive ( https://xd.adobe.com/view/f5c37cba-a980-4d71-
9630-c7ab049aa5f4-a090/screen/96da058d-3014-4ede-bee2-6993f4ca1a04/ ).

# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

