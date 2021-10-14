---
layout: post
title: "모던 자바스크립트와 ES6 #2 Template Literals"
category: [javascript]
tags: [javascript, es6]
comments: true
---

ES5까지, 일반 텍스트와 변수를 하나의 문자열로 사용하려면 다음과 같이 했어야 했다.

```javascript
var a = 1;
var b = 2;

console.log("a is " + a + " and b is " + b);
```

알다시피 이런 방식은 귀찮다. 단호하게 귀찮다.

```javascript
const a = 1;
const b = 2;

console.log(`a is ${a} and b is ${b}`);
```

ES6에서는 새로운 문자열 표기법인 Backtick을 사용할 수 있게 되었는데, 이 문자열로 감싼 내부에는 위 코드와 같이 변수를 직접적으로 사용할 수 있다.

```javascript
console.log(`\n\n1 + 2 = ${1 + 2}\n\n`);
```

또한 `${1 + 2}`와 같이 중괄호 안에 표현식을 넣을 수도 있다. 단, 개행은 불가능하며 공백을 그대로 표현하기 위해서는 Escape Sequence를 사용해야 하며, 변수든 표현식이든 문자열이 된다.
