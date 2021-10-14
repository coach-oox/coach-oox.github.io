---
layout: post
title: "자바스크립트 제네레이터 (Generator)의 이해"
category: [javascript]
tags: [javascript]
comments: true
---

- 중간에 멈췄다가 이어서 실행할 수 있는 함수
- `function` 뒤에 `*`를 붙여 표현
- 함수를 멈출 때는 `yield` 키워드를 사용

```javascript
function* gen() {
  console.log(1);
  yield 1; // value : 1, done : false;

  console.log(2);
  yield 2; // value : 2, done : false;

  console.log(3);
}

const result = gen();
// result.next();
```

Generator는 함수 실행 결과에 대해 `next()` 메소드를 호출할 때마다, 순차적으로 Generator 함수 내부의 `yield` 키워드를 만나기 전까지 실행하고 `yield` 키워드에서 일시정지한다. (다시 `next()` 메소드를 호출하면 그 다음 `yield` 키워드를 만날 때까지 함수 내부의 내용을 진행한다.)

## 선언 방식

```javascript
const obj = {
  *gen() {
    yield;
  },
};

class cl {
  *gen() {
    yield;
  }
}
```

`function` 키워드를 쓰지 않는 위와 같은 경우에는 `*` (별표)를 Generator 이름 앞에 작성한다.

## Iterator로써의 Generator

```javascript
function* gen() {
  yield 1;
  yield 2;
}

const result = gen();
console.log(...gen);
```

## yield\*

```javascript
function* gen() {
  yield* [1, 2, 3];
  yield "hello world!";
}

const result = gen();
result.next(); // value : 1, done : false
result.next(); // value : 2, done : false
result.next(); // value : 3, done : false
result.next(); // value : "hello world!", done: false
result.next(); // value : undefined, done: true;
```

`yield` 키워드 뒤에 `*` (별표)를 붙이면 뒤에 오는 값을 Iterable한 개체로 받을 수 있으며, 함수가 멈출 때 (`next()`) 해당 개체의 각각의 요소를 반환한다.
