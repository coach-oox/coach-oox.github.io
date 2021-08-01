---
layout: post
title: "자바스크립트 레벨업을 위한 주요 개념 #1 Scope와 Scope Chain"
category: [javascript, js-basic]
tags: [javascript, scope]
comments: true
---

변수나 함수는 각각의 유효한 Scope를 가지고 있다. Block Level Scope란 하나의 블록 `{}` 내부에서 선언된 변수는 해당 블록 내부에서만 유효하다는 규칙이며, Function Level Scope의 경우 함수 내부에서 선언된 변수는 함수 내부에서만 유효하다는 규칙이다.

## Lexical Scope

자바스크립트의 Scope에 대해 좀 더 깊이 이해하기 위해 알아야 할 또 하나의 개념은 Lexical Scope (Static Scope)라는 규칙이다. Lexical Scope는 코드가 작성된 문맥상에서 결정되는 Scope로, 함수를 호출할 때가 아니라 선언할 때의 문맥에 따라 결정되는 규칙이다.

```javascript
let count = 0;

function a() {
  console.log(count);
}

function b() {
  count++;
  a();
}

b();
```

위 코드에서 콘솔에 실행되는 결과는 얼마일까? 당연히 `b()`에서 `count`의 값을 증가 시켰기 때문에 1이라는 값이 출력될 것이다.

```javascript
let count = 0;

function a() {
  console.log(count);
}

function b() {
  let count = 1;
  a();
}

b();
```

그렇다면 이 경우는 어떤 결과가 출력될까? 예상했겠지만 이때의 출력은 0이 될 것이다. 함수의 Scope는 선언되는 시점에 결정되는데, 자신의 범위에서 가장 가까운 곳의 변수를 참조하게 된다. 따라서 위 코드에서 `a()`는 좀 더 가까운 범위내에 있는 전역 변수 `count`를 참조하게 되며, 이러한 어휘적 유효 범위를 Lexical Scope라 한다.

## Scope Chain

위에서 Lexical Scope를 설명하기 위해 예시로 작성했던 코드는, `a()`에서 가장 가까운 범위내 있는 변수를 전역 변수인 `count`라 했는데, 이것은 어떤 기준에서 결정되는 것일까? 이는 함수 내부에서는 외부로 접근할 수 있지만 외부에서는 내부로 접근할 수 없다는 규칙 때문인데, 이 규칙에 의해서 모든 함수 내부에서는 전역 객체에 접근할 수 있다.

```javascript
let a = 0;

function first() {
  console.log(`first function's a is ${a}`);

  function second() {
    let b = 1;
    console.log(`second function's a is ${a}`);
    console.log(`second function's b is ${b}`);
  }

  second();
  console.log(`first function's b is ${b}`);
}

first();
```

위 코드 예시에서, `second()` 함수는 `a`를 찾기 위해서 가장 먼저 자기 자신의 Scope를 점검한 뒤, 없으면 한 스텝 올라가서 점검한 다음 (`first()`에도 없기 때문에) 또 한 스텝 올라가서 점검해서 전역 변수 `a`를 찾아 출력한다. `first()`의 경우, 자신의 Scope에서 `b`를 찾을 수 없기 때문에 한 스텝 위로 올라가서 (전역 Scope에서) 점검하지만 `b`를 찾을 수 없기 때문에 `b is not defined` 에러가 발생한다. 이렇게 자신의 Scope부터 점점 위로 타고 올라가면서 점검해서 (Scope를 넓히면서) 참조 관계를 점검하는 방식을 Scope Chain이라 한다.
