---
layout: post
title: "자바스크립트 객체의 구조 분해 (Destructuring)"
category: [javascript]
tags: [javascript]
comments: true
---

객체를 구조 분해 할당할 때는 키를 기준으로 한다.

```javascript
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

## 2단 중첩 구조의 표현

```javascript
const {
  memo: { work, hobby },
} = obj;
```

만약 이름을 바꾸고 싶다면 다음과 같이 `origin: nickname` 형식을 사용한다.

```javascript
const {
  memo: { work: job, hobby },
} = obj;
```

## 활용

함수를 호출할 때 인자로 객체를 넘기는 경우, 사용할 부분만을 추출할 수 있다.

```javascript
const numbers = {
  a: 10,
  b: 20,
  c: 30,
};

function sum({ a, b }) {
  return a + b;
}

sum(numbers);
```
