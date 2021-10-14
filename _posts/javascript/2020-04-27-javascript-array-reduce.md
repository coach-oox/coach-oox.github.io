---
layout: post
title: "자바스크립트 Array.prototype.reduce()"
category: [javascript]
tags: [javascript]
comments: true
---

`reduce()` 메소드는 배열의 각 요소에 대해 `reducer()` 함수를 실행하고, 최종 결과를 리턴한다. `for`문을 돌려서 최종적으로 다른 무엇인가를 만드는 목적으로 사용한다.

```javascript
Array.reduce(callBack[, initValue])
```

- `callBack` : `function (accumulator, currentValue, currentIndex[, originArray])`
  - `accumulator` : 누적된 계산 값
  - `currentValue` : 현재 값
  - `currentIndex` : 현재 인덱스
  - `originArray` : 원본 배열
- `initValue` : 초기 값 (생략시 첫 번째 인자가 자동 지정되고 `currentValue`가 두 번째 인자부터 배정되게 된다.)

```javascript
const arr = [1, 2, 3];
const result = arr.reduce((acc, current) => {
  return acc + current;
});
```
