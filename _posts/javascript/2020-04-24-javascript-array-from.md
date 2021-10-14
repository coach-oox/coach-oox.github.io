---
layout: post
title: "자바스크립트 Array.prototype.from()"
category: [javascript]
tags: [javascript]
comments: true
---

`Array.from()` 메소드를 사용하면 유사 배열 객체나 반복 가능한 객체를 **얕은 복사**해서 새로운 배열 객체를 만든다.

```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = Array.from(arr).map((number) => {
  return (number += 1);
}); // newArr = [2, 3, 4, 5, 6]
```
