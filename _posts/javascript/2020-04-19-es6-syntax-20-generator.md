---
layout: post
title: "모던 자바스크립트와 ES6 #10 Generator"
category: [javascript]
tags: [javascript, es6]
comments: true
---

Generator는 Generator Function의 리턴 값으로, Iterable Protocol과 Iterator Protocol을 따르는 객체이다. 이때 Generator Function은 함수를 실행하면 내부에 정의된 처리를 함수의 끝까지 한 번에 실행하는 일반 함수와 달리, `yield`와 `next()` 등을 사용해 특정 시점에 멈출 수도 있고, 다시 시작될 수도 있으며, 상황에 따라 여러 값을 리턴할 수도 있는 함수이다.

```javascript
function* genFunction() {
  yield 100;
  yield 200;
  yield 300;
  yield 400;
  yield 500;
}

const genObject = genFunction();

console.log(genObject.next().value);
console.log(genObject.next().value);
console.log(genObject.next().value);
console.log(genObject.next().value);
console.log(genObject.next().value);
```

`yield`는 Generator Function을 일시적으로 정지시키는 키워드로, 키워드 뒤에 오는 표현식을 Generator Caller에게 리턴한다. 즉, 일반 함수의 `return`처럼 동작한다.

```javascript
function* genString() {
  yield "Hello";
  yield "World!";
}

const genObject = genString();

for (let i of genObject) {
  console.log(i);
}
```

Generator는 Iterable 하기 때문에 Spread Syntax나 `for ... of` 반복문을 사용할 수 있다.

> **추천 글** : [Understanding Generators in ES6 JavaScript with Examples](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)
