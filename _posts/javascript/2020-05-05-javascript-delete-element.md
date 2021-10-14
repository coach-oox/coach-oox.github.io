---
layout: post
title: "자바스크립트 배열에서 특정 요소만 삭제하기"
category: [javascript]
tags: [javascript]
comments: true
---

## Destructuring 활용

```js
const user = {
  name: "John",
  age: 21,
  from: "Canada",
};

function delElement({ name, age }) {
  return { name, age };
}

const newUser = delElement(user);
// newUser는 name, age만 가지고 있다.
```

## Rest Operator 활용

```js
const user = {
  name: "John",
  age: 21,
  from: "Canada",
};

function delElement({ from, ...rest }) {
  return rest;
}

const newUser = delElement(user);
```
