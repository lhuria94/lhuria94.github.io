---
layout: post
title: "ECMAScript - Past, Current and the future"
date: 2020-11-25 00:00:00
image: "/assets/img/2020-11-25-ecmascript-past-present-and-future"
description: ""
main-class: "js"
tags:
  - javascript
  - ecmascript
  - code-standards
  - specifications
categories:
  - Javascript
  - EcmaScript
  - Design
  - Code Standards
twitter_text: "ECMAScript - Past, Current and the future"
---

> You folks probably know what is Javascript and how popular it is now, but this was not the case in its early stages, and went through so many troubles to reach where it is now. When I started writing this post, it was intended to only talk about the latest features introduced by ECMAScript but during my research; I felt that it's a little hard to directly jump to features before setting the stage. 🙂 Here you go.

# Introduction

## History of Javascript

In the early days, Netscape navigator was gaining traction on the web as a competitor to NCSA Mosaic (The first popular web browser).
It was Netscape’s vision that the web should be more dynamic along with interactive animations which led birth to a scripting language called “Mocha”. It was created by "Brendan Eich" in 1995, a language which could be embedded and parsed directly into HTML document without any need for compilation.

The idea behind “Mocha” was plain and simple i.e all it had to do is be fast, dynamic, accessible to non-developers at that point in time.

During the same time, Java was emerging too; but it felt too big for a simple requirement. Hence, the efforts in putting “Mocha”  on the runway were justified. And it was clear that “Java” to be used for big enterprises and complex components where “Mocha” to be used for small scripting tasks.

“Mocha" was first bundled with Netscape Navigator in May 1995. After a short period of time, it was renamed “LiveScript”. Later in December 1995, after a deal was worked out between Sun and Netscape communications, it was renamed to JavaScript with a marketing strategy that fits with “Java” for small scripting tasks.

## Evolution of ECMAScript

During the initial phase, while Javascript was still evolving, Netscape took Javascript to “ECMA standards organization” in order to have cross-browser support and bring in some standardization which was a wise call.
ECMA also referred to as the “European Computer manufacturers association" formed a technical committee (known as TC39) to evolve the language, and ultimately releasing the first edition in June 1997.

# Recap (ES1 - ES6)

## ECMAScript 1, 2 & 3 - The beginnings
- ECMAScript 1 was the first version released as a JavaScript standard in June 1997, although there were major misses in terms of features such as exceptions, regular expressions, etc.
- ECMAScript 2 was released in June 1998 as a fix for inconsistencies b/w ECMA and ISO standards for JavaScript. No new changes were brought in.
- ECMAScript 3 was released In December 1999 and it was the most interesting one of the three, as it brought in the first major changes which were long-awaited. It spreader like fire and reached a much wider audience since it was supported by all major browsers in the market.
  - Exceptions along with try/catch blocks
  - Better error handling
  - Regular expressions
  - New in-built functions
  - Do-while blocks
  - ..so on


## ECMAScript 4 - The struggles
1. As soon as the work started on ECMAScript 4 (In 1999), there was a difference of opinions started to appear. Few folks were inclined towards taking the language to a large-scale development needs. And few thought that this is not what “Javascript” was intended to do which pushed the release for a while. 
2. The discussion took way longer than expected and days, months turned to years and the set of features grew bigger and bigger.
3. At that point in time, ES4 had the following features in the scope:
    1. Classes
    2. Interfaces
    3. Namespaces
    4. Packages
    5. Optional type annotations
    6. Optional static type checking
    7. Structural types
    8. Type definitions
    9. Multimethods
    10. Parameterized types
    11. Proper tail calls
    12. Iterators
    13. Generators
    14. Introspection
    15. Type discriminating exception handlers
    16. Constant bindings
    17. Proper block scoping
    18. Destructuring
    19. Succinct function expressions
    20. Array comprehensions

In conclusion ES4 took 8 years of development, and in the end, it was completely scrapped.

## ECMAScript 5 - Rebirth
1. After the long struggles, Javascript finally made it and became the most supported version.
2. Big giants were supporting it like Mozilla, Chrome, Opera, etc.
3. ES5 came up with the following features:
    1. Getter/setters
    2. trailing commas in an array and object literals
    3. Reserved words as property names
    4. New Object methods (create, defineProperty, keys, seal, freeze, getOwnPropertyNames, etc.)
    5. New Array methods (isArray, indexOf, every, some, map, filter, reduce, etc.)
    6. String.prototype.trim and property access
    7. New Date methods (toISOString, now, toJSON)
    8. Function bind
    9. JSON
    10. Immutable global objects (undefined, NaN, Infinity)
    11. Strict mode
    12. Other minor changes (parseInt ignores leading zeroes, thrown functions have proper these values, etc.)

## ECMAScript 6 - Write less do more
ES6 brought in a completely new way of writing javascript which was pretty exciting and the code felt more readable, new syntaxes helped to do things with small chunks of code. It was a major update after ES5 which was release in 2009. ES6 was released in 2015, that’s why you may see people calling ES2015 and ES6 interchangeably.

ES6 came up with the following features:
1. Let (lexical) and const (unrebindable) bindings
2. Arrow functions (shorter anonymous functions) and lexical this (enclosing scope this)
3. Classes (syntactic sugar on top of prototypes)
4. Object literal improvements (computed keys, shorter method definitions, etc.)
5. Template strings
6. Promises
7. Generators, iterables, iterators and for..of
8. Default arguments for functions and the rest operator
9. Spread syntax
10. Destructuring
11. Module syntax
12. New collections (Set, Map, WeakSet, WeakMap)
13. Proxies and Reflection
14. Symbols
15. Typed arrays
16. Support for subclassing built-ins
17. Guaranteed tail-call optimization
18. Simpler Unicode support
19. Binary and octal literals


# Present and the future

## ECMAScript 7 (ES2016)
After the huge gap in the release of ES4, the committee decided to release one version every year even if it's a small update starting with ES6. The idea was not to do humongous releases like ES6 rather have small ones.

So, ES7 came up with only two new features:
1. Exponential operator: In addition to existing arithmetic operators (-, *, +) which already exists in Javascript; they added a new operator (**) called the exponential operator. What it does is raises the first operand to the power of value from the second operand.
```js
// 5 to the power of 2 i.e 25 
console.log(5 ** 2); // 25
```
2. Array.prototype.includes(): This returns true if the existing array includes a passed value. As simple as that; but really handy.
```js
let sportsList = [‘cricket’, ‘volleyball’, ‘hockey’];
sportsList.includes(sportsList, ‘cricket’); // true

## ECMAScript 8 (ES2017)
As part of the regular update, ES8 was released in 2017, and it came up with some really cool features. So, let’s explore them together:

1. `Object.values():` In order to iterate through objects, this is one of the cool features ES8 introduced. It helps with looping through an object with a single line of code that returns the array with the respective values.
```js
const music = {rock: 'Rock', heavyMetal: 'Heavy Metal', classical: 'Classical Music', jazz: 'Jazz'};
Object.values(music);
(4) ["Rock", "Heavy Metal", "Classical Music", "Jazz"]
```
2. `Object.entries():` This one help to convert your object to array with key value pair.
```js
 const music = {rock: 'Rock', heavyMetal: 'Heavy Metal', classical: 'Classical Music', jazz: 'Jazz'};
Object.entries(music);
["rock", "Rock”],  ["heavyMetal", "Heavy Metal”], ["classical", "Classical Music”],  ["jazz", "Jazz"]
```
3. `Async Functions:` Assuming that we already know what is asynchronous programming, Async functions basically work as syntactic sugar on top of promises, making it easy to read/write. So there are two parts to it:
    1. `Async keyword:` This keyword, we put in front of a function to make the complete wrapper asynchronous. It expects an await keyword to invoke the asynchronous code.
    ```js
    let helloWorld = async () => { return "Hello World" };
    helloWorld() // returns a promise
    ```
    2. `Await keyword:` The real advantage of using the async keyword is to combine with the await keyword. It halts your code until the promise fulfills, then ultimately coming up with the resultant and it can only be used inside an async function.
    ```js
    const handleVersionUpdate = async () => {
      const getValueFromStore = await AsyncStorage.getItem(‘your_key');
      // do you handling
      console.log(’This will trigger once we have the value from storage, i.e the promise fulfills')
    }
    handleVersionUpdate();
    ```
4. `String padding:` This is kind of similar to what we have in CSS, with some padding left and right. Likewise, we have got a function in JS that can add some padding either at the start or at the end of the string making the output having the desired length.
    1. `padStart(targetLength, string):` As the name suggests, it adds up the padding at the start of the string.
    ```js
    'world'.padStart(20, 'hello'); // "hellohellohelloworld"
    ```
    2. `padEnd(targetLength, string):` This one is applied at the end of the string.
    ```js
    'hello'.padEnd(20, 'world’); // “helloworldworldworld"
    ```
5. `Object.getOwnPropertyDescriptors():` This is an added tool that can help to return the property descriptors of a given object. The most useful use case is for cloning an existing object thoroughly.
```js
const obj = {
  hello: 'hello',
  world: 'world'
}
let value = Object.getOwnPropertyDescriptors(obj);
console.log(value);
{
  hello: { value: 'hello', writable: true, enumerable: true, configurable: true },
  World: { value: 'world', writable: true, enumerable: true, configurable: true },
}
const clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);
console.log(clone);
// {hello: "hello", world: "world"}
```
6. `Trailing commas (Also called final commas):` This update was mostly to improve the dev experience to allow trailing commas in the params list. The intention is to have a practice in a place where if we need to add a new property, we don't need to modify the last added value with a comma ending up in cleaner version control.
```js
let arr = [
  ‘car’, 
  ‘bike’,
  ’truck’, 
];
console.log(arr); // [‘car’, ‘bike’, ’truck’];
```

## ECMAScript 9 (ES2018)
ES9 was released in June 2018; coming up with a lesser number of features than the last two years but maintaining a consistent yearly release cycle. Without further ado, let go through them one by one:

1. `Regular Expression changes:` In regular expressions, it takes a test method that expects a string and pattern to search against. If you have used regular expressions in the past, you may know that the dot operator is used to match a single character. But the issue we generally face is it skips line break characters like  \n, \r, etc. So it introduced:
    1. `DotAllFlag (\s):` This operator can be used to match line breaks.
    ```js
    console.log(/Hello.World/.test('Hello\nWorld')); //false
    console.log(/Hello.World/s.test('Hello\nWorld')); // true
    ```
    2. `Unicode property escapes:` To match any unicode character/number etc, we can now use ‘\p{type}’. For example:
    ```js
    const str = '40';
    console.log(/\p{Number}/u.test(str)); // true
    ```
    3. `Lookbehind Assertions:` There are two types of assertions in this: positive and negative.
        1. `Positive (?<=..):` This one says that the word must start with `%` and replace the word with `*****`
        ```js
        '@hello %hello'.replace(/(?<=%)hello/g, '*****’); // "@hello %*****"
        ```
        2. `Negative (?<!..):` This one says that the word must start with `%` and replace the rest of words with `*****`
        ```js
        '@hello %hello'.replace(/(?<!%)hello/g, '*****’); // "@***** %hello"
        ```
    4. `Named capture groups:` In some cases, referencing a group in terms of numbers can be a bit confusing, ES9 came up with a better syntax to divide things into groups.
    ```js
    // How it used to be
    const re = /(\d{4})-(\d{2})-(\d{2})/;
    const match = re.exec('2020-11-21');
    console.log(match[0]);    // → 2020-11-21
    console.log(match[1]); // → 2020
    // With new syntax
    const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
    const match = re.exec(‘2020-11-21');
    console.log(match.groups);          // → {year: "2020", month: "11", day: "21"}
    console.log(match.groups.year);     // → 2020
    ```
2. `Promise.finally:` We used to see the promises in terms of .then and .catch, but since the ES9 release; we seem to be able to have .finally in place which executes always at the end of promise execution. This is usually helpful in case you want to do some clean up at the end of your promise call.
```js
doSomething(‘xx’).then().catch().finally(() => console.log(‘I am executed always’));
```
3. `Rest/Spread Operator:` ES9 came up with two new operators i.e Rest and Spread operators.
    1. `Rest operator:` This one is used for object de-structuring.
    ```js
    let object = {
      hello: 'hello',
      world: 'world',
      blabla: 'blah blah',
    }
    const { blabla, ...rest } = object;
    console.log(blabla); // "blah blah"
    console.log(rest); // {hello: "hello", world: "world"}
    ```
    2. `Spread operator:` This helps to insert its own properties of an object into a new one. Basically combining multiple objects.
    ```js
    let object = {
      hello: 'hello',
      world: 'world',
      blabla: 'blah blah',
    }
    let object2 = {
      blablaagain: 'blah blah again'
    }
    let object3 = {…object1, …object2};
    console.log(object3); // {hello: "hello", world: "world", blabla: "blah blah", blablaagain: "blah blah again"}
    ```
4. `Asynchronous Iteration:` As Synchronous iteration was already introduced with ES6, people felt the need to have iterations possible in asynchronous as well. As they can not be iterated using for…of loop since they return promises. ES9 came up with a new for await..of the loop.
```js
async function hello() {
  for await (const val of [‘hello', ‘world']){
    console.log(val)
  }
}
hello(); 
// hello 
// world
```

## ECMAScript 10 (ES2019)
ES10 was not as big as ES6, but it did introduce some really powerful features which made our lives a bit easy. This version was released in June 2019.
1. `Object.fromEntries():` This one takes a list of key-value pair and transforms into an object.
```js
const blaObj = new Map([
  ['bla', 'blah'],
  ['bla2', 'blah2']
]); 
const obj = Object.fromEntries(blaObj);
console.log(obj); // {bla: "blah", bla2: "blah2"}
```
2. `Optional Catch Binding:` Earlier we had this parameter which had to be passed to the catch block. But now, it has been made optional.
```js
try {
  throw "Some error";
} catch {
  console.log("Don't care what it is about!")
}
```
3. `Array:` In ES10, there were a couple of additions Array bucket. Here you go:
    1. `Array.flat():` As the name suggests, it basically helps to flat down the subarray elements as per the specified depth.
    ```js
    const blahArray = ['hello', ['world']];
    blahArray.flat(1); // (2) ["hello", "world”]
    ```
    2. `Array.flatMap():` This one is kind of on the same lines as flat() along with map() features. It map through the array of items and then flatten the result in one go.
    ```js
    const blahArr = [1, 2, 3, 4];
    blahArr.flatMap(value=>value*2); // (4) [2, 4, 6, 8]
    ```
    3. `Stable Array.sort():` Earlier, it used to have the Quicksort algorithm as a base for arrays containing more than 10 elements. But that is no longer the case, now it uses the stable TimSort algorithm.
4. `Changes in toString():` In ES6, when this was introduced, it used to give a string like a representation of the function in the result when run. This has been made much more cleaner now.
```js
Function blahFunction() {
  //do your magic here
}
console.log(blahFunction.toString());
function blahFunction() {
  // Hello, I'm an ordinary function
}
```
5. `Changes in Symbol data type:` As we know, “Symbol” is a primitive data type and it returns a value of type “symbol” when declared. Earlier to get the symbol description, we used to use “toString”, but now we have a getter for it to access.
```js
const symbolExample1 = Symbol("Symbol description");
console.log(symbolExample1.description); //Symbol description
```
6. `String:` In ES10, there were few updates made to string methods as well.
    1. `String.trimStart():` It helps to remove whitespace from the beginning of the string. As simple as that.
    ```js
    const blahStr = '   Hello world!   ';
    blahStr.trimStart(); // "Hello world!   "
    ```
    2. `String.trimEnd():`  It helps to remove whitespace at the end of the string.
    ```js
    blahStr.trimEnd(); // "   Hello world!"
    ```

## ECMAScript 11 (ES2020)
ES11 was released this year recently, coming up with several native features as well as few other correspondings to its yearly release.

1. `Promise.AllSettled():` This returns a promise once all the promises passed are resolved does not matter if they were fulfilled or rejected with an array resulting in the status of each promise.
```js
var p1 = Promise.resolve('hey');
var p2 = new Promise((resolve, reject) => setTimeout(reject, 2000));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 5000));
Promise.allSettled([p1, p2, p3]).then(values => console.log(values));
(3) [{…}, {…}, {…}]
0: {status: "fulfilled", value: "hey"}
1: {status: "rejected", reason: undefined}
2: {status: "fulfilled", value: undefined}
```
2. `BigInt:` Till now, the maximum number in javascript was 9007199254740991, but now we can go beyond this number using BigInt. It is done by adding “n” at the end of the string.
```js
const biggestNumber = 9007199254740991n;
const biggerNumberThanBefore = BigInt(biggestNumber);
console.log(biggerNumberThanBefore); // 9007199254740991n
```
3. `Nullish Coalescing:` It works as a logical operator and helps us in checking if the left-hand operand is either null or undefined and returns the right-hand operand value.
```js
var v1 = undefined ?? 'Hey there!';
console.log(v1); // "Hey there!"
var v2 = 'Come here first' ?? 'Hey there!';
console.log(v2); // "Come here first"
```
4. `Dynamic Import:` You may have used dynamic import using JS frameworks but now this feature is available natively. This means, that now we can import modules dynamically through variables in core-js.
```js
// File 1
export blah() => console.log(‘Blah Blah’);
// File 2
import * as sayThings from ‘./file1.js’;
sayThings.blah(); // Blah Blah
```
5. `globalThis:` In Javascript, there are different ways to access global objects which makes it a bit tricky to write code which works cross environment. So, globalThis is here to rescue us all.
```js
// In browsers.
console.log(globalThis); // window {...}
// In nodejs
console.log(globalThis); // Object [global] {...}
```
6. `Optional chaining operator:` This one is my personal favorite and it's really really useful when you have a long nested chain of objects and the checking is pretty much prone to error and not readable as well.
```js
Let cricket = null;
Let getCricketTeam = cricket.teams;
// Uncaught TypeError: Cannot read property ’teams' of null
// How we can make this better
Let getCricketTeam = cricket?.teams;
console.log(getCricketTeam); // undefined
```

**Note:** It's possible that I may miss a feature or two which was introduced. However, all major features which are widely being used should be covered here.

## ECMAScript 12 (ES2021)
Now with ES12, there can be features that may not go till the final stage of the proposal. So, here we will discuss the features which have actually made it till Stage 4 of the proposal.
1. `Promise.any:` This helps in returning the first fulfilled promise of the lot. In case, all of the promises were rejected; then it ends up with an error message saying all promises were rejected.
```js
const p1 = Promise.reject(‘Fail’);
const p2 = Promise.resolve(‘Passed’);
const p3 = Promise.reject(‘Fail 2’);
const aggregatedPromises = [p1, p2, p3];
Promise.any(aggregatedPromises).then((value) => console.log(value)); // Passed
```
2. `Numeric Separators:` We usually have a hard time read large numbers, numeric separators help with that giving us an option to separate it out by “_”.
```js
let n = 100000000000000 
console.log(n); // 100000000000000
let readableN = 100_000_000_000_000; 
console.log(readableN); // 100000000000000
```
3. `Logical operators and assignments:` With ES12, they are trying to combine logical operators and assignment operators such as ??, || and &&.
    1. `?? Operator:` We already covered the use-case of the null coalescing operator in this post, now this one combines with the assignment operator as well. What it does is assigns the right-hand side value of the variable to the left-hand side incase the left-hand side variable is either null or undefined.
    ```js
    let hello;
    let helloWithValue = ‘hello’;
    hello ??=helloWithValue;
    console.log(hello); // ‘hello’
    ```
    2. `|| Operator:` It is basically somewhat similar to ?? Operator but this one also works with falsy values.
    ```js
    let hello = false;
    let helloWithValue = ‘hello’;
    hello ||=helloWithValue;
    console.log(hello); // ‘hello’
    ```
    3. `&& Operator:` This one assigns right hand side variable value if the left hand side value is truthy.
    ```js
    et hello = true;
    let helloWithValue = ‘hello’;
    hello &&=helloWithValue;
    console.log(hello); // ‘hello’
    ```
4. `String.replaceAll:` Early we had replace() method which used to replace only the first instance of the string; so this feature was a little too obvious required to replace all the matching strings.
```js
let helloWorld = 'Hello world Hello world';
let hellosOnly = helloWorld.replaceAll(‘world’);
console.log(hellosOnly); // 'Hello Hello' 
```
5. `Intl.ListFormat:` It is an constructor for objects which formats as per the passed language code in the parameter list.
```js
const Arr = [‘Hello', ‘World’];
let deObj = new Intl.ListFormat(‘de', { style: 'short', type: 'conjunction' })
console.log(deObj.format(Arr)); // Hello und World
```
6. Similarly, we have Intl.DateTimeFormat available which works in the same way as the list format.

That's all I had!

### Some references:
- Visit Auth0 to get to know a little bit more about JS [history][history].
- Standard JS documentation, click [here][mdn] to visit.

Thanks for reading. 😃

[directory-structure]: https://lhuria94.github.io/structure-react-native-project%20copy/
[history]: https://auth0.com/blog/a-brief-history-of-javascript/
[mdn]: https://developer.mozilla.org/en-US/