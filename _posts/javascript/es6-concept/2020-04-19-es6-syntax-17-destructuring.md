---
layout: post
title: "모던 자바스크립트와 ES6 #7 Destructuring Assignment"
category: [javascript, es6-concept]
tags: [javascript, es6]
comments: true
---

Destructuring Assignment Syntax는 배열이나 객체를 Destructuring (비구조화)해서 각각의 요소를 개별적인 변수에 할당하는 것을 의미하며, 일반적으로 구조화된 배열이나 객체에서 특정 값만을 꺼내 변수에 할당하거나 리턴하기 위해 사용된다.

> **추천 글** : [Destructuring Assignment - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Array Destructuring

`arr`에 들어있는 요소를 각각의 변수에 할당하고자 하는 경우를 가정해보자.

```javascript
var arr = ["John", "Thomas", "David"];

var name1 = arr[0];
var name2 = arr[1];
var name3 = arr[2];

console.log(name1, name2, name3);
```

ES6에서는 다음과 같이 배열을 Destructuring하여 배열의 각 요소들을 추출할 수 있다.

```javascript
const arr = ["John", "Thomas", "David"];
const [name1, name2, name3] = arr;

console.log(name1, name2, name3);
```

라인 2에서, `name1`, `name2`, `name3`이라는 변수가 선언되고, `arr`가 Destructuring 되어 인덱스 순서에 따라 각각의 변수에 할당된다. Array Destructuring은 다음 예시와 같이 배열에서 필요한 부분만 파싱해서 쓰고 싶을 때 유용하다.

```javascript
const date = new Date();
const today = date.toISOString().substring(0, 10);
const [year, month, day] = today.split("-");

console.log([year, month, day]);
```

## Object Destructuring

ES5까지는 객체를 Destructuring 하기 위해서는 다음과 같이 각각의 Prop 이름을 사용해서 할당해야 했다.

```javascript
var obj = {
  name: "John",
  age: 20,
};

var name = obj.name;
var age = obj.age;

console.log(name, age);
```

ES6에서는 Object Destructuring을 통해 객체의 Props들을 추출해서 변수 리스트에 할당한다.

```javascript
const obj = {
  name: "John",
  age: 20,
};

// const { name: name, age: age }
const { name, age } = obj;

console.log(name, age);
```

이때 배열과의 차이점이 있다면 순서 (배열의 인덱스)와 상관없이 Props 이름 (Key)으로 할당된다는 점과 왼쪽에 배열이 아닌 객체 형태의 변수 리스트가 요구된다는 점이다.

```javascript
const datas = [
  { name: "John", age: 20, gender: "male" },
  { name: "Thomas", age: 30, gender: "male" },
  { name: "Jessica", age: 40, gender: "female" },
];

const names = datas.filter(function ({ name }) {
  return console.log(name);
});
```

Object Destructuring이 끝내주는 (?) 이유는 Props 이름을 사용해 필요한 Props만 뽑아낼 수 있기 때문이다. 만약 중첩된 객체에서 특정 Prop만 사용하고자 한다면 다음과 같이 추출할 수 있다.

```javascript
const obj = {
  name: "John",
  age: 20,
  email: "John123@gmail.com",
  subject: {
    english: true,
    korean: true,
    math: false,
  },
};

const {
  subject: { korean },
} = obj;

console.log(korean);
```
