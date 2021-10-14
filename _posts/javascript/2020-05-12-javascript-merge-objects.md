---
layout: post
title: "자바스크립트 객체 · 배열 병합하기"
category: [javascript]
tags: [javascript]
comments: true
---

```js
function mergetObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = {
  name: "John",
  age: 21,
};

const obj2 = {
  from: "Canada",
};

const obj3 = mergetObjects(obj1, obj2);
```

배열의 경우도 사용법은 동일하다.
