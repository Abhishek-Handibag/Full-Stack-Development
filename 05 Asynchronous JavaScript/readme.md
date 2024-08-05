# Asynchronous JavaScript

This README provides an overview of asynchronous programming in JavaScript, covering key concepts and techniques.

## Table of Contents

1. [Introduction](#introduction)
2. [JavaScript Basics](#javascript-basics)
   - [Synchronous Execution](#synchronous-execution)
   - [Blocking Nature](#blocking-nature)
   - [Single-threaded Environment](#single-threaded-environment)
3. [Asynchronous Programming](#asynchronous-programming)
   - [setTimeout](#settimeout)
   - [setInterval](#setinterval)
   - [Callbacks](#callbacks)
   - [Promises](#promises)
4. [Advanced Topics](#advanced-topics)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

JavaScript is fundamentally a synchronous, blocking, single-threaded language. However, it provides mechanisms for asynchronous programming, allowing developers to create non-blocking code that can handle time-consuming operations without freezing the user interface.

## JavaScript Basics

### Synchronous Execution

By default, JavaScript executes code synchronously, line by line, from top to bottom.

```javascript
console.log('Function A start');
console.log('Function A end');
console.log('Function B start');
console.log('Function B end');
```

### Blocking Nature

JavaScript's blocking nature means that time-consuming operations can make the application unresponsive.

```javascript
function intensiveTask() {
  let start = Date.now();
  while (Date.now() - start < 10000) {
    // Busy-wait for 10 seconds
  }
  console.log('Intensive task completed');
}

intensiveTask();
console.log('Next function');
```

### Single-threaded Environment

JavaScript operates in a single-threaded environment, handling one task at a time on the main thread.

## Asynchronous Programming

### setTimeout

`setTimeout` is used to execute a piece of code after a specified delay.

```javascript
function sayHello() {
  console.log('Hello, World!');
}

setTimeout(sayHello, 2000);
```

### setInterval

`setInterval` is used to repeatedly execute code at specified intervals.

```javascript
function printTime() {
  console.log(new Date().toLocaleTimeString());
}

setInterval(printTime, 1000);
```

### Callbacks

Callbacks are functions passed as arguments to other functions, executed once an asynchronous operation completes.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
```

### Promises

Promises represent the eventual completion or failure of an asynchronous operation.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve('Data received');
      } else {
        reject('Error occurred');
      }
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
