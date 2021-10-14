---
layout: post
title: "모던 자바스크립트와 ES6 #3 Arrow Function"
category: [javascript]
tags: [javascript, es6]
comments: true
---

Arrow Function (이하 화살표 함수)는 ES6에서 도입된, `function` 키워드를 사용하지 않아도 `=>` 화살표를 사용함으로써 보다 간단하게 함수를 선언할 수 있는 문법이다. 화살표 함수의 사용법은 매우 간단하지만, 다음과 같은 몇 가지 규칙이 있다.

```javascript
// 1. 아규먼트가 없을 경우 () 괄호 생략 불가
() => {};

// 2. 아규먼트가 한 개일 때는 괄호를 생략해도 되지만, 2개 이상이면 괄호를 생략할 수 없음
(a, b) => {};

// 3. 함수의 몸체가 Single Line일 경우 중괄호와 return을 생략할 수 있음
(a) => b;

// 4. 물론 이렇게 써도 허용됨
(a) => {
  return b;
};

// 5. Multi Line일 경우 중괄호를 생략할 수 없음
() => {
  const sum = a + b;
  return sum;
};
```

## Anonymous Function

화살표 함수는 오직 Anonymous Function (익명 함수)으로만 사용할 수 있다. 따라서 (이름이 없고 익명이기 때문에 불리지 못하고) 함수 표현식을 사용해서 호출되어야만 한다.

```javascript
const sum = (a, b) => a + b;
console.log(a(1, 2));
```

또한 화살표 함수는 다음과 같이 콜백 함수로써 사용될 수 있다.

```javascript
function something(number => number++;);
```

## this

화살표 함수를 쓰면서 가장 중요한 부분은 `function` 키워드로 선언한 일반 함수와 화살표 함수의 `this`가 서로 다르다는 점이라고 할 수 있다.

### 일반 함수의 this

자바스크립트에서는 함수가 어떻게 호출되느냐에 따라 `this`에 바인딩되는 객체가 동적으로 결정된다.

```javascript
const something = function (number) {
  return console.log(this);
};

something();
```

생성자 함수와 객체의 메소드를 제외한 모든 함수 내부에서의 `this`는 전역 객체인 `window`와 바인딩되기 때문에, 출력되는 위 코드에서 콜백 함수의 `this` 역시 전역 객체 `window` 이다. 이러한 문제를 회피하기 위해서는 다음과 같은 방법을 써야 한다.

```javascript
const something = function (number) {
  const that = this;

  return function (number) {
    return console.log(that);
  };
};

something();
```

또는 ES5부터 도입된 `bind()` 함수를 사용할 수도 있다.

```javascript
const something = function (number) {
  return function (number) {
    return console.log(this);
  }.bind(this);
};

something();
```

### 화살표 함수의 this

화살표 함수의 경우 일반 함수와는 다르게 함수를 선언할 때 `this`가 바인딩될 객체가 정적으로 결정된다. 화살표 함수의 `this`는 항상 자신을 포함하는 외부 Scope의 `this`를 물려받는다.

```javascript
const something = function (number) {
  console.log(this);

  return () => {
    return console.log(this);
  };
};

something();
```

따라서 위 코드 예제에서 첫 번째 콘솔 출력은 전역 객체를 가르키지만, 화살표 함수 내부에서의 콘솔 출력은 화살표 함수가 사용된 상위 Scope의 `this`를 가르킨다.

> 화살표 함수에서는 `call()`, `apply()` 또는 `bind()` 함수를 사용할 수 없다.

## Arrow Function을 사용하면 안되는 경우

화살표 함수는 분명 짧고 간결하다. 또 사용하기에도 간편하다. 하지만 화살표 함수가 가지는 특성에 따라 다음과 같은 경우에는 일반 함수를 사용하는 것이 더 바람직하다.

### addEventListener

```javascript
const msg = document.querySelector(".msg");

// DO NOT
msg.addEventListener("click", () => {
  this.innerHTML = "Hello World!";
});
```

`addEventListener` 함수의 콜백 함수를 화살표 함수로 사용하게 되면, `this`가 전역 객체를 가르킨다. 따라서 위 코드와 같이 콜백 함수 내에서 `this`를 사용하는 경우에는 일반 함수를 사용해야 한다. (일반 함수를 사용하면 `addEventListener`에 바인딩된 `currentTarget`을 가르킨다.)

### Method

```javascript
const obj = {
    a: "Hello ",
    b: "World!",
    // DO NOT
    greating: () => console.log(this.a + this.b);
}

obj.greating();
```

화살표 함수를 오브젝트의 메소드로 정의하는 것도 반드시 주의해야 하는 케이스이다. 이유는 `addEventListener`와 마찬가지로 `this`를 사용할 때 전역 객체를 가르키기 때문이다.

### prototype

```javascript
const obj = {
  a: "Hello ",
  b: "World!",
};

Object.prototype.greating = () => console.log(this.a + this.b);

obj.greating();
```

화살표 함수를 `prototype`에 할당하는 것도 동일한 문제가 발생한다. 또한 `prototype` Props를 가지는 생성자 함수로도 사용할 수 없다.
