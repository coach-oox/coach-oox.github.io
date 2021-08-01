---
layout: post
title: "모던 자바스크립트와 ES6 #6 Enhanced Object Literals"
category: [javascript, es6-concept]
tags: [javascript, es6]
comments: true
---

ES6에서는 향상된 객체의 Literal을 제공한다. 이는 ES5까지의 객체 정의 방식을 개선한 문법을 의미하며, 객체를 정의하거나 객체 내 메소드를 정의하는 등 자주 사용되는 문법들을 좀 더 간결하게 사용할 수 있다.

## Property Shorthand

ES6에서는 Props 값으로 변수를 사용할 때, Property 이름을 생략할 수 있는 축약 표현을 제공한다.

```javascript
const name = "John";
const age = 20;

const obj = {
  name,
  age,
};

console.log(obj);
```

## Method Shorthand

ES5까지는 객체 내부에서 메소드를 선언할 때 다음과 같이 Prop의 값으로 함수의 선언부를 할당했다.

```javascript
var obj = {
  name: "John",
  greating: function () {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greating();
```

ES6에서는 메소드를 선언할 때 `function` 키워드를 생략한 축약 표현을 제공한다.

```javascript
const obj = {
  name: "John",
  greating() {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greating();
```

## proto

ES5까지는 객체 Literal을 상속하기 위해서 `Object.create()` 함수를 사용했다.

> **추천 글** : [Object.create() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

```javascript
var first = {
  name: "John",
  greating: function () {
    console.log(`Hello, ${this.name}`);
  },
};

var second = Object.create(first);
second.name = "Thomas";

first.greating();
second.greating();
```

ES6에서는 객체 Literal에 의해 생성된 객체의 `__proto__` Prop에 다른 객체를 바인딩하여 상속을 표현할 수 있다.

```javascript
const first = {
  name: "John",
  greating() {
    console.log(`Hello, ${this.name}`);
  },
};

const second = {
  __proto__: first,
  name: "Thomas",
};

first.greating();
second.greating();
```
