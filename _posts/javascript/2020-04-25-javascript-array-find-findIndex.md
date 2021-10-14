---
layout: post
title: "자바스크립트 Array.prototype.find() · findIndex()"
category: [javascript]
tags: [javascript]
comments: true
---

## find()

```javascript
const arr = ["a", "b", "c"];
arr.find((char) => char === "a"); // "a"
arr.find((char) => char === "d"); // undefined
```

`indexOf()`와 비슷하지만 인자로 함수를 받는 메소드. 값이 존재하지 않을 때 `undefined`를 출력한다.

## findIndex()

```javascript
const arr = ["a", "b", "c"];
arr.findIndex((char) => char === "a"); // 0
```

`find()`와 똑같이 동작하며, 값의 유무가 아니라 값이 위치한 인덱스를 반환한다.
