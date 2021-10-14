---
layout: post
title: "자바스크립트 이터러블 (Iterable)의 이해"
category: [javascript]
tags: [javascript]
comments: true
---

내부 요소들을 공개적으로 탐색 (반복)할 수 있는 데이터 구조를 Iterable 하다고 말하며, Iterable한 데이터 구조는 모두 프로토타입에 `Symbol.iterator()` 메소드를 가지고 있다.

## Iterable한 데이터 구조

- `Array`
- `Map`
- `Set`
- `String`

## 예시

```javascript
const obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

// Symbol.iterator() 없음
console.dir(obj);
```

위에서 `obj`는 유사 배열 객체로, 배열과 유사하게 동작하지만 `Symbol.iterator()` 메소드를 가지고 있지 않다. 즉, Iterable 하지 않다.
