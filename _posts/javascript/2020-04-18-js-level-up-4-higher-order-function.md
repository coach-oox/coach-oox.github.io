---
layout: post
title: "자바스크립트 레벨업을 위한 주요 개념 #4 Higher Order Function"
category: [javascript]
tags: [javascript, hof]
comments: true
---

Higher Order Function (HOF, 고차 함수)는 함수를 리턴하거나 함수를 파라미터로 전달받는 함수를 의미하며, 넘겨받은 함수를 호출하거나 클로저로 리턴하는 역할을 한다. 이게 가능한 이유는 자바스크립트의 함수가 First Class이기 때문인데, 더 자세한 내용은 MDN의 [First Class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) 문서를 참고하자.

이러한 고차 함수를 사용하는 이유는 함수형 프로그래밍 지향을 위해서, 데이터가 Mutate 되는 것을 최대한 피하고자 하기 때문이다. 즉, 함수형 프로그래밍은 Pure Function + Sub Function로 로직을 구성해서, 종속성을 배제하고자 하는 패러다임이다.

> **추천 글** : [Functional Programming with JavaScript in 3 Steps](https://medium.com/@alexnault/functional-programming-with-javascript-in-3-tips-f282934947e5)

```javascript
function counter(number) {
  let count = 0;

  return function () {
    count = number(count);
    return count;
  };
}

function plus(count) {
  return ++count;
}

function minus(count) {
  return --count;
}

const zeroToPlus = counter(plus);
const zeroToMinus = counter(minus);

console.log(zeroToPlus()); // 1
console.log(zeroToPlus()); // 2
console.log(zeroToPlus()); // 3
console.log(zeroToMinus()); // -1
console.log(zeroToMinus()); // -2
```

위 코드에서 `counter()` 고차 함수는 클로저 함수를 반환하고 있으며, 아규먼트 `number()` 함수는 각각 전혀 서로에서 종속되지 않고 동작하는 것을 확인할 수 있다.

## Array.prototype

자바스크립트에서는 배열 객체와 관련된 고차 함수가 다수 제공되며 그 목록은 다음과 같다. (이 중 가장 첫 번째인 `sort()`만 원본 배열 객체를 Mutate하며, 나머지 함수들은 원본 배열을 Mutate하지 않는다.)

- [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

> **Reference** : [Array API Cheatsheet](https://gist.github.com/rauschma/f7b96b8b7274f2e2d8dab899803346c3)
