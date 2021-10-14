---
layout: post
title: "타입스크립트 Less · Default Parameter"
categories: [typescript]
tags: [typescript]
comments: true
---

## 선택적 파라미터

```js
function greeting(name, age, gender) {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

greeting(name, age);
// Hello stranger, you are 24, you are a undefined
```

위 자바스크립트 예시에서, 함수 `greeting`은 3개의 인자를 사용하도록 선언되어있지만, 호출시 2개의 파라미터만 넘겨도 실행된다.

```bash
index.ts:9:1 - error TS2554: Expected 3 arguments, but got 2.
9 greeting(name, age);
  index.ts:5:30
    5 function greeting(name, age, gender) {
    An argument for 'gender' was not provided.
Found 1 error.
```

하지만 타입스크립트에서는 아예 컴파일도 되지 않는다.

```ts
function greeting(name, age, gender?) {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

greeting(name, age);
// Hello stranger, you are 24, you are a undefined
```

타입스크립트에서도 우선 동작을 하게 만드려면, `gender` 뒤에 `?` 물음표를 붙인다. `gender?`는 `gender` 파라미터가 있을 수도, 없을 수도 있다는 것을 의미한다.

## 디폴트 파라미터

```ts
function greeting(name, age, gender = "male") {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

greeting(name, age);
```

자바스크립트에서는 (타입스크립트에서도) Default Parameter를 사용할 수 있다. 즉, `gender`의 기본 값을 `male`로 정의하고, 호출 시 다른 `gender` 값이 들어온다면 그 값으로 교체한다.
