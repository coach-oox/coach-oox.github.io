---
layout: post
title: "자바스크립트 Array.prototype.forEach()"
category: [javascript]
tags: [javascript]
comments: true
---

`forEach()` 메소드는 배열 요소 각각에 인자로 받은 함수를 실행한다.

```javascript
Array.forEach(callBack[, thisArg])
```

- `callBack` : `function (currentValue[, index][, originarray])`
  - `currentValue` : 현재 값
  - `index` : 현재 인덱스
  - `originArray` : 원본 배열
- `thisArg` : `this`에 할당할 대 (생략시 `global` 객체)

```javascript
const arr = [1, 2, 3];

arr.forEach((value, index) => {
  console.log(`arr[${index}] : ${value}`);
});

// arr[0] : 1
// arr[1] : 2
// arr[2] : 3
```
