# JavaScript Learning Guide

This guide is a clean study path for learning JavaScript from scratch to practical use. It follows the standard MDN learning flow and is matched to the practice files already in this folder.

Use it like a roadmap, not a textbook.

For a quick GitHub front page, see [README.md](README.md).

## GitHub snapshot

| Item | Details |
| --- | --- |
| Format | Long-form companion guide |
| Best for | Deep practice and revision |
| Companion | [README.md](README.md) |

> Learn one idea at a time. Type it yourself. Change it. Run it again.

```text
+------------------------------------------------------+
|  MDN-BASED JAVASCRIPT LEARNING ROADMAP               |
|  Read -> Type -> Change -> Run -> Repeat             |
+------------------------------------------------------+
```

## Contents

- [MDN quick links](#mdn-quick-links)
- [Roadmap at a glance](#roadmap-at-a-glance)
- [Study rhythm](#study-rhythm)
- [Core Foundations](#core-foundations)
- [JavaScript basics](#1-javascript-basics)
- [Variables and data types](#2-variables-and-data-types)
- [Operators and comparison](#3-operators-and-comparison)
- [Strings and numbers](#4-strings-and-numbers)
- [Arrays](#5-arrays)
- [Dates and time](#6-dates-and-time)
- [Logic and Structure](#logic-and-structure)
- [Control flow](#7-control-flow)
- [Functions](#8-functions)
- [Objects](#9-objects)
- [Scope and hoisting](#10-scope-and-hoisting)
- [Arrays and objects in depth](#11-arrays-and-objects-in-depth)
- [Browser and Async](#browser-and-async)
- [Error handling](#12-error-handling)
- [DOM and events](#13-dom-and-events)
- [Async JavaScript](#14-async-javascript)
- [Modules](#15-modules)
- [Review and Projects](#review-and-projects)
- [Best practices](#16-javascript-best-practices)
- [Practice projects](#18-practice-projects)
- [Checklist](#19-checklist)
- [Week-by-week study plan](#week-by-week-study-plan)

## Quick dashboard

| Item | What to focus on |
| --- | --- |
| Goal | Learn JavaScript by reading, typing, and changing real code |
| Style | Short sessions, frequent practice, simple examples |
| Best habit | Run each file after every change |
| Final outcome | Build small browser projects with confidence |

## Progress tracker

| Stage | Topic | Status |
| --- | --- | --- |
| 1 | Basics and variables | Not started |
| 2 | Operators, comparison, strings, and numbers | Not started |
| 3 | Arrays, dates, and control flow | Not started |
| 4 | Functions, objects, and scope | Not started |
| 5 | DOM, async JavaScript, and modules | Not started |

---

## How to use this guide

- Read one topic at a time.
- Run the related `.js` file after each topic.
- Change the examples and observe the output.
- Revisit topics that feel unclear before moving on.

## MDN quick links

- [JavaScript first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/First_steps) for basics and syntax
- [Data structures and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) for variables and data types
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) for comparison rules
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for modern strings
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for string methods
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) for numbers and math
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for arrays
- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for dates and time
- [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) for decisions and branching
- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) for repetition
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) for reusable logic
- [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects) for object basics
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) for scope and hoisting-related ideas
- [DOM introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) and [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) for browser code
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) for modern JavaScript

## Roadmap at a glance

| Stage | Focus | Practice files | Result |
| --- | --- | --- | --- |
| 1 | Basics, variables, data types | [Hello.js](Hello.js), [datatype.js](datatype.js) | Understand values and declarations |
| 2 | Operators, comparison, strings, numbers | [comparison.js](comparison.js), [operation.js](operation.js), [string.js](string.js), [name_and_math.js](name_and_math.js) | Work with expressions and text |
| 3 | Arrays, dates, control flow | [myarrays.js](myarrays.js), [Dates.js](Dates.js) | Build simple logic and data handling |
| 4 | Functions, objects, scope | Add your own examples | Reuse logic clearly |
| 5 | DOM, async, modules | Add browser projects | Build real apps |

## Study rhythm

| Step | Action |
| --- | --- |
| 1 | Read the MDN link |
| 2 | Type the example yourself |
| 3 | Change one value and predict the output |
| 4 | Run it and compare the result |
| 5 | Repeat until the idea feels natural |

---

## Core Foundations

These sections cover values, text, arrays, and dates.

---

## 1. JavaScript basics

JavaScript is a programming language used in browsers and on servers.

What this section should give you:
- A first successful `console.log()`
- A clear idea of how JS code is written
- Confidence reading small examples

Learn:
- How JavaScript runs
- `console.log()`
- Comments
- Statements and semicolons
- Basic syntax

Practice file:
- [Hello.js](Hello.js)

Example:

```javascript
console.log("Hello World");
```

## 2. Variables and data types

JavaScript stores values in variables.

Key idea:
- Variables are names for values

Learn:
- `const`, `let`, and `var`
- Why `const` is usually preferred
- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Reference types: objects, arrays, functions
- `typeof`
- Truthy and falsy values
- Type conversion

Practice files:
- [Hello.js](Hello.js)
- [datatype.js](datatype.js)

Example:

```javascript
let isLoggedIn = 1;
let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue);
```

## 3. Operators and comparison

Operators let you work with values.

Key idea:
- Operators combine, compare, and update values

Learn:
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`
- Assignment operators
- Increment and decrement
- Comparison operators: `>`, `<`, `>=`, `<=`
- Equality operators: `==`, `===`
- Why strict equality is safer
- Type coercion rules

Practice files:
- [operation.js](operation.js)
- [comparison.js](comparison.js)

Important rule:
- Use `===` instead of `==` unless you have a very specific reason.

Example:

```javascript
console.log("2" == 2);
console.log("2" === 2);
```

## 4. Strings and numbers

Strings and numbers are core data types in JavaScript.

Key idea:
- Text and numbers are handled differently, even when they look similar

Learn:
- String creation with quotes and template literals
- String concatenation
- String methods
- Number objects and formatting
- Converting numbers to strings
- Random numbers

Practice files:
- [string.js](string.js)
- [name_and_math.js](name_and_math.js)
- [operation.js](operation.js)

Example:

```javascript
const name = "Ankur";
const repoCount = 5;
console.log(`My name is ${name} and I have ${repoCount} repositories`);
```

## 5. Arrays

Arrays store ordered collections of values.

Key idea:
- Arrays keep related values in order

Learn:
- Creating arrays
- Accessing items by index
- Adding and removing items
- `slice()` vs `splice()`
- `join()`
- Iterating through arrays

Practice file:
- [myarrays.js](myarrays.js)

Example:

```javascript
const myArr = [0, 1, 2, 3, 4];
const firstThree = myArr.slice(0, 3);
console.log(firstThree);
```

## 6. Dates and time

JavaScript has a built-in `Date` object for working with time.

Key idea:
- Dates can be formatted in many ways depending on the user and locale

Learn:
- Creating dates
- Formatting dates
- Local time vs UTC
- Locale-based formatting
- Time zones

Practice file:
- [Dates.js](Dates.js)

Example:

```javascript
const now = new Date();
console.log(now.toLocaleString("default", { weekday: "long" }));
```

## Logic and Structure

These sections help you make decisions and organize reusable code.

---

## 7. Control flow

Control flow decides what code runs and when.

Key idea:
- Logic makes your code behave differently in different situations

Learn:
- `if`, `else if`, `else`
- `switch`
- `for`
- `while`
- `do...while`
- `break` and `continue`

Try writing examples for:
- Checking grades
- Looping through an array
- Running code only when a condition is true

## 8. Functions

Functions help you reuse logic.

Key idea:
- Functions turn repeated code into reusable blocks

Learn:
- Function declarations
- Function expressions
- Arrow functions
- Parameters and arguments
- Default parameters
- Return values
- Scope inside functions

Example:

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

## 9. Objects

Objects group related data and behavior.

Key idea:
- Objects model real-world things and app state

Learn:
- Object literals
- Property access with dot and bracket notation
- Adding and updating properties
- Methods inside objects
- Nested objects

Example:

```javascript
const user = {
  name: "Ankur",
  age: 20,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet();
```

## 10. Scope and hoisting

This is one of the most important parts of JavaScript.

Key idea:
- Scope controls where values can be seen

Learn:
- Global scope
- Function scope
- Block scope
- Hoisting behavior
- Why `let` and `const` reduce mistakes

Focus on understanding:
- Why a variable is visible in one place but not another
- Why declarations behave differently from assignments

## 11. Arrays and objects in depth

After basics, learn the patterns used in real code.

Key idea:
- Modern JavaScript often transforms data instead of rewriting it

Learn:
- Destructuring
- Spread and rest operators
- `map()`
- `filter()`
- `reduce()`
- `find()`
- `some()` and `every()`

Example:

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

## Browser and Async

These sections move from learning syntax to building interactive browser code.

---

## 12. Error handling

Errors are normal in programming.

Key idea:
- Good code expects failures and handles them cleanly

Learn:
- `try`, `catch`, and `finally`
- Throwing errors
- Reading error messages
- Debugging with console output

Example:

```javascript
try {
  JSON.parse("invalid");
} catch (error) {
  console.log("Parsing failed");
}
```

## 13. DOM and events

If you want to build browser apps, learn the DOM.

Key idea:
- The DOM is how JavaScript talks to the page

Learn:
- Selecting elements
- Changing text and HTML
- Listening to events
- Forms and input handling
- Adding and removing classes

Useful skills:
- `document.querySelector()`
- `addEventListener()`
- `classList`

## 14. Async JavaScript

JavaScript often works with delayed or remote tasks.

Key idea:
- Async code handles work that finishes later

Learn:
- Callbacks
- Promises
- `async` and `await`
- `fetch()`
- Handling loading and errors

Example:

```javascript
async function loadData() {
  const response = await fetch("https://example.com");
  return response.text();
}
```

## 15. Modules

Modules help organize larger projects.

Key idea:
- Modules split a large codebase into smaller parts

Learn:
- `export`
- `import`
- Default exports
- Named exports
- Splitting code into files

## Review and Projects

Use this final group to tighten habits and build something real.

---

## 16. JavaScript best practices

Learn these early:
- Prefer `const` by default
- Use `let` only when values change
- Avoid `var`
- Use strict equality
- Keep functions small
- Name things clearly
- Test code in small pieces
- Read error messages carefully

Keep the code base easy to scan:
- Group related examples together
- Keep files short and focused
- Prefer readable names over clever shortcuts

## 17. Suggested learning order

1. Basics
2. Variables and types
3. Operators and comparison
4. Strings and numbers
5. Arrays
6. Dates
7. Control flow
8. Functions
9. Objects
10. Scope and hoisting
11. Arrays and objects in depth
12. DOM and events
13. Async JavaScript
14. Modules
15. Projects

## 18. Practice projects

Build these after the basics:

| Project | Status | Main topics | Next move |
| --- | --- | --- | --- |
| Calculator | Planned | Operators, functions | Start with add, subtract, multiply, and divide |
| Number guessing game | Planned | Conditions, loops, random numbers | Add a target number and retry logic |
| Todo list | Planned | Arrays, DOM, events | Build add, delete, and complete actions |
| String analyzer | Planned | Strings, methods | Count characters, words, and vowels |
| Date formatter | Planned | Date, locale, formatting | Show the current date in different formats |
| Array utilities | Planned | Arrays, map, filter, reduce | Write reusable array helper functions |
| Simple form validator | Planned | DOM, conditions, events | Check inputs before submitting |

## 19. Checklist

You should be able to:
- [ ] Declare variables correctly
- [ ] Distinguish between `==` and `===`
- [ ] Work with strings, numbers, arrays, and objects
- [ ] Use loops and conditions
- [ ] Write and call functions
- [ ] Understand `Date`
- [ ] Handle errors
- [ ] Use the DOM
- [ ] Work with promises and `async/await`

When most boxes are checked, you are ready to start building small real projects.

## Visual markers

Use these as you study:

| Marker | Meaning |
| --- | --- |
| Core | Basics, variables, types, operators |
| Build | Arrays, functions, objects, scope |
| App | DOM, events, async code, modules |
| Review | Practice projects and checklist |

## Notes from your current practice files

| File | What it teaches |
| --- | --- |
| [Hello.js](Hello.js) | Basic variable declarations |
| [datatype.js](datatype.js) | Boolean conversion and `typeof` |
| [comparison.js](comparison.js) | Equality and strict equality |
| [operation.js](operation.js) | Arithmetic and increment behavior |
| [string.js](string.js) | String methods |
| [name_and_math.js](name_and_math.js) | `Number` and `Math` usage |
| [myarrays.js](myarrays.js) | Array slicing and indexing |
| [Dates.js](Dates.js) | Date formatting and locale output |

## Week-by-week study plan

### Week 1: Basics and variables

- Read the MDN links for first steps and data structures.
- Practice with [Hello.js](Hello.js) and [datatype.js](datatype.js).
- Focus on `console.log`, `const`, `let`, `typeof`, and Boolean conversion.

**Outcome:** you can write and explain simple values

### Week 2: Operators, comparison, strings, and numbers

- Read the MDN links for equality, template literals, String, Number, and Math.
- Practice with [comparison.js](comparison.js), [operation.js](operation.js), [string.js](string.js), and [name_and_math.js](name_and_math.js).
- Focus on `===`, string methods, formatting values, and random numbers.

**Outcome:** you can compare and format data confidently

### Week 3: Arrays, dates, and control flow

- Read the MDN links for Array, Date, control flow, and loops.
- Practice with [myarrays.js](myarrays.js) and [Dates.js](Dates.js).
- Focus on `slice`, `splice`, indexing, date formatting, `if`, and loops.

**Outcome:** you can process lists and make decisions

### Week 4: Functions, objects, and scope

- Read the MDN links for Functions, Working with objects, and Closures.
- Write small examples for function declarations, arrow functions, object literals, and methods.
- Focus on parameters, return values, `this`, and variable scope.

**Outcome:** you can organize logic and data cleanly

### Week 5: DOM, async JavaScript, and modules

- Read the MDN links for DOM introduction, `addEventListener`, Promises, Fetch API, and Modules.
- Build a small browser project that reacts to user input.
- Focus on events, loading data, handling errors, and splitting code into files.

**Outcome:** you can build a small interactive app

## Final tip

> Do not try to memorize JavaScript all at once. Learn the topic, write a small example, run it, and then change the example to see what happens.

---

If you want, the next step is to turn this into a more polished study sheet with color-style sections, progress boxes, and a project tracker layout.
