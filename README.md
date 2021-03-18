# Angular Project for Filed

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
If running in local use `ng s` and it will comiple the application and runs runs `lite-server` on port `4200` i.e` https://localhost:4200`.
or
The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
* `npm run ci` - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.


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
