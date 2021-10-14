---
layout: post
title: "모던 자바스크립트와 ES6 #4 Default · Rest Parameter"
category: [javascript]
tags: [javascript, es6]
comments: true
---

## Default Parameter Value

자바스크립트에서는 함수를 호출할 때 요구되는 파라미터의 개수가 부족한 경우에도 에러가 발생하지 않는다. 예를 들어 다음의 경우를 가정해보자.

```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum(10));
```

`sum()` 함수는 2개의 아규먼트를 사용하게끔 정의되어 있지만, 호출할 때 하나의 파라미터만 전달해도 에러가 발생하지 않는다. 즉, 함수가 파라미터 개수나 아규먼트 개수를 체크하지 않는다. 이렇게 아규먼트가 부족한 경우에 그 값은 `undefined`이며, 위 코드에서는 `NaN`이 출력된다.

```javascript
function sum(a, b) {
  a = a || 0;
  b = b || 0;

  return a + b;
}

console.log(sum(10));
```

따라서 ES5까지는 위 코드 예시와 같이 함수의 내부에서 모든 아규먼트가 전달되었는지를 체크하는 부분이 필요했다.

```javascript
function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(10));
```

이러한 문제를 해결하기 위해서 ES6에서는 파라미터에 디폴트 값을 지정할 수 있게 되었다. 디폴트 값은 아규먼트가 전달되지 않았을 경우에만 적용되기 때문에 `length`에는 영향을 주지 않는다.

## Rest Parameter

Rest Parameter는 아규먼트 다음과 같이 앞에 `...`을 붙여 표현한 아규먼트를 의미한다.

```javascript
function sum(...rest) {
  console.log(rest);
}

sum(1, 2, 3);
```

Rest Parameter는 함수에 전달된 파라미터들을 배열로 전달받는다.

```javascript
function sum(a, ...rest) {
  console.log(a, rest);
}

sum(1, 2, 3);
```

함수에 전달되는 파라미터들은 나열된 순서대로 할당된다. 단, 이름처럼 나머지 파라미터들이 모두 배열에 할당되는 것이기 때문에 다음과 같이 순서가 바뀌는 경우에는 Syntax Error가 발생한다.

```javascript
// DO NOT
function sum(...rest, a) {
  console.log(a, rest);
}

sum(1, 2, 3);
```

## arguments 객체

ES5까지는 가변 파라미터를 가지는 함수의 경우 `arguments` 객체를 사용했다. `arguments` 객체는 함수 호출시 전달된 파라미터들의 정보를 담고 있는 Iterable한 유사 배열 객체이다. 따라서 이러한 `arguments`에 배열 메소드를 사용하려면 다음과 같이 `Function.protorype.call`을 사용해야 했다.

```javascript
function sum() {
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (a, b) {
    return a + b;
  });
}

console.log(sum(1, 2, 3));
```

하지만 ES6부터는 Rest Parameter를 사용해서 가변 파라미터의 목록을 진짜 배열 (?)로 전달받을 수 있기 때문에, `arguments` 객체를 배열로 변환하는 과정이 필요하지 않다.

```javascript
function sum(...rest) {
  return rest.reduce(function (a, b) {
    return a + b;
  });
}

console.log(sum(1, 2, 3));
```

또한 ES6에서 도입된 화살표 함수의 경우, 함수 객체에 `arguments` Prop가 없기 때문에, 화살표 함수를 사용해서 가변 파라미터 함수를 구현해야 할 경우에는 Rest Parameter를 사용해야 한다.

```javascript
const sum = (...rest) => {
  return rest.reduce((a, b) => a + b);
};

console.log(sum(1, 2, 3));
```
