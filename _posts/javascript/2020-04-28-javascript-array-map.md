---
layout: post
title: "자바스크립트 Array.prototype.map()"
category: [javascript]
tags: [javascript]
comments: true
---

`map()` 메소드는 배열의 각 요소에 주어진 함수를 실행한 결과를 새로운 배열로 리턴한다. 보통 `for`문을 돌려서 새로운 배열을 만드는 것을 목적으로 사용한다.

```javascript
Array.map(callBack[, thisArg])
```

- `callBack` : `function (currentValue[, index][, originArray])`
  - `currentValue` : 현재 값
  - `index` : 현재 인덱스
  - `originArray` : 원본 배열
- `tihsArg` : `this`에 할당할 대상 (생략시 `global` 객체)

```javascript
const arr = [1, 2, 3];
const mArr = arr.map((value) => {
  return value * 2;
});
```
