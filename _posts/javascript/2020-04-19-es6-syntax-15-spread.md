---
layout: post
title: "모던 자바스크립트와 ES6 #5 Spread Syntax"
category: [javascript]
tags: [javascript, es6]
comments: true
---

Spread Syntax (`...`)는 점 뒤에 오는 대상을 개별 요소로 분리한다. 이때 대상은 Iterable 해야 한다.

```javascript
const arr = [1, 2, 3];
console.log(...arr, 4, 5);
```

이를 응용해 배열을 파라미터로 함수에 전달하고자 할 때, 모든 요소를 분리해서 순차적으로 전달할 수 있다.

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];

console.log(sum(...arr));
```

## 사용 예시

다음 코드는 `arr1`에 `arr2`의 각각의 요소를 `push()`하는 예시이다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

arr1.push(...arr2);
console.log(arr1);
```

다음 코드는 `slice()`를 사용하지 않고도 Spread Syntax를 사용해서 배열을 복사하는 예시이다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2);
```

다음 코드는 `arr1`에서 `arr1[3]`부터 2개의 요소를 제거하고 그 자리에 `arr2`를 추가하는 예시이다.

```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 20];

arr1.splice(3, 2, ...arr2);
console.log(arr1);
```
