---
layout: post
title: "자바스크립트 객체의 구조 분해 (Destructuring) 활용법"
category: [javascript]
tags: [javascript]
comments: true
---

## 기본 사용법

```js
const obj = {
  name: "John",
  age: 25,
  gender: "male",
  memo: {
    work: "software developer",
    hobby: "work out",
  },
};

const { name, age } = obj;
```

객체에서 각각을 (필요한 것만) 구조 분해해서 `let`, `const` 상관없이 새로운 변수에 할당 할 수 있다.

## 중첩 객체 추출

```js
const obj = {
  name: "John",
  age: 25,
  gender: "male",
  memo: {
    work: "software developer",
    hobby: "work out",
  },
};

const {
  memo: { work, hobby },
} = obj;
```

필요한 변수만 선택적으로 원하는 이름으로 가져와 쓸 수 있다.

## Default Parameter와의 조합

```javascript
const obj = {
  age: 25,
  gender: "male",
};

const { name = "Stranger", age, gender } = obj;
```

## Rest Parameter와의 조합

```javascript
const obj = {
  name: "John",
  age: 25,
  gender: "male",
  contact: [
    { name: "mom", phone: 12345 },
    { name: "dad", phone: 12345 },
  ],
};

const {
  contact: [...family],
} = obj;
```
