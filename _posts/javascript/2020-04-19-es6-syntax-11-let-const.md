---
layout: post
title: "모던 자바스크립트와 ES6 #1 var · let · const"
category: [javascript]
tags: [javascript, es6]
comments: true
---

## var의 문제점

ES5까지의 자바스크립트에서는 변수를 선언할 때 `var` 키워드를 사용했다. (물론 지금도 사용할 수 있지만 그때는 유일했다.) `var` 키워드는 특성상 문제를 야기할 가능성이 높았는데, 그 특성에 대한 내용은 다음과 같다.

```javascript
var a = 1;
var b = 2;

console.log(a); // 1
console.log(b); // 2

{
  var a = 2;
  var b = 3;
}

console.log(a); // 2
console.log(b); // 3
```

첫 번째로, 변수 중복 선언이 허용된다. 즉, 실수로 `a`라는 변수를 두 번 선언해서 사용해도 Syntax Error가 발생하지 않는다. 따라서 의도치않게 변수를 덮어쓰는 실수가 일어날 수 있다. 두 번째로는 심지어 `var` 키워드를 생략해도 허용해준다. 따라서 여기 저기 전역 변수를 남발할 수 있다.

세 번째로, `var`로 선언한 변수는 Function Level Scope를 가지기 때문에 함수의 외부에서 선언된 변수는 모두 전역 변수이므로, 두 번째 이유와 마찬가지로 전역 변수를 남발할 수 있으며, 반복문의 조건부에서 선언된 변수를 반복문 블록 밖에서도 참조할 수 있다. 마지막으로는 Hoisting 특성으로 인해 변수를 선언하기 전에 참조가 가능하다는 점이다.

> 실제로 가장 문제를 야기할 가능성이 큰 부분은 전역 변수이다. 따라서 되도록 전역 변수의 최대한 지양해야 한다.

## let & const

ES6에서는 위와 같은 `var`의 단점을 보완하기 위해 `let`과 `const`가 추가되었다.

### let

```javascript
let a = 1;
let b = 2;

console.log(a); // 1
console.log(b); // 2

{
  let a = 2;
  let b = 3;
}

console.log(a); // 1
console.log(b); // 2
```

`let`은 Function Level Scope로 인한 `var`의 단점을 보완하기 위해 Block Level Scope 규칙을 따른다. 즉, 위 코드와 같이 블록 내부에서 선언된 변수 `a`는 지역 변수이다.

```javascript
var a = 1;
var a = 2;

let b = 3;
let b = 4;
```

또한 중복 선언이 허용되서 많은 디버깅이 힘들었던 `var`과는 달리 중복 선언이 허용되지 않는다. 따라서 위 코드에서 두 번째 `b`로 인해 Syntax Error가 발생한다.

```javascript
let a = 1;
console.log(window.a);
```

`var`의 경우, 함수의 외부에서 전역 변수로 선언하면 전역 객체 (`window` 또는 `global`)의 Prop이 된다. 하지만 `let`의 경우 전역 변수로 선언해도 전역 객체의 Props가 아닌 개념적인 별도의 블록 내에 존재한다.

### const

`const`는 상수를 선언할 때 사용되는 키워드로, `let`과 마찬가지로 Block Level Scope를 가진다. 특징이 있다면 `const`는 반드시 선언할 때 초기 값이 요구된다는 점이다. 만약 초기 값을 생략하면 Syntax Error가 발생한다.

본문에서는 변수와 상수의 개념까지는 설명하지 않는다. 당연히 상수는 선언 이후에 값을 변경할 수 없다. 단, 기억해 두어야 할 점은 배열이나 객체를 `const`로 선언했을 때 그 자체는 상수이지만 객체가 가지는 Props는 상수가 아니기 때문에 값을 변경할 수 있다는 점이다. 즉, 이말은 곧 어차피 Props는 변경할 수 있는거라면 (꼭 어떤 객체의 주소 값을 변경하는 경우가 아니라면) 디폴트로 `const`를 사용함으로써 영향을 끼치는 Scope를 최대한 좁게 만드는 것이 좋다는 (안전하다는) 의미이다.
