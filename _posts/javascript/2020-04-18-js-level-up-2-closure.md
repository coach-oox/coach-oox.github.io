---
layout: post
title: "자바스크립트 레벨업을 위한 주요 개념 #2 Closure"
category: [javascript]
tags: [javascript, closure]
comments: true
---

Closure (이하 클로저)는 자바스크립트에 한정되는 개념은 아니고, Functional Programming Language에서 다루는 주요한 특성 중 하나이다. 이 개념은 리턴된 함수가 리턴되기 전에 가진 Scope를 리턴된 다음에도 접근할 수 있는 함수를 의미한다. 즉, 클로저는 자기 자신이 생성될 때의 Lexical Environment를 기억하고 접근할 수 있는 함수라고 정의할 수 있다.

```javascript
function first() {
  const greating = "Hello World!";

  const second = function () {
    console.log(greating);
  };

  return second;
}

const third = first();
third();
```

위 코드 예시는 기본적인 클로저 구조를 설명하고 있다. `first()`는 `second()` 함수를 생성하고 리턴한다. 이때 `second()` 함수는 Scope Chain에 의해 상위의 `first()`에서 선언된 `greating`에 접근할 수 있는 함수이다. `third()` 함수는 이러한 `second()` 함수를 리턴 받는다. 물론, 외부에서 선언된 `third()` 함수는 `greating`에 접근할 수 있는 권한이 없지만, 정상적으로 출력되는 것을 확인할 수 있다.

## Closure의 사용

이런 특징은 어떻게 사용될까? 클로저는 일반적으로 클로저 함수의 특징에 기반해 상태 유지 및 전역 변수를 최대한 사용하지 않기 위해 활용된다.

### 상태 유지

```javascript
function toggle() {
  let isTrue = false;

  return function () {
    let result = isTrue ? "ON" : "OFF";
    console.log(result);
    isTrue = !isTrue;
  };
}

const msg = toggle();
msg();
msg();
msg();
```

클로저가 가장 많이 활용되는 경우는 상태를 유지하는 경우이다. 위 코드 예제에서 `toggle()` 함수는 `isTrue`라는 상태를 유지하고, 내부적으로 변경된 후에도 최신 상태를 유지하는 역할을 하는 클로저를 리턴한다. 위 예제는 약간 억지처럼 보이기도 하는데, 이런 방식을 사용해서 어떤 이벤트를 처리하거나 HTML DOM을 활용해 클래스를 토글하는 (화면에 보였다 안보였다 한다던지, 상황에 따라 디자인을 변경한다던지) 역할로써 많이 사용된다.

### 전역 변수 대체

```javascript
var btn = document.querySelector(".plus");
var text = document.querySelector(".count");

var count = 0;

function add() {
  return ++count;
}

btn.onclick = function () {
  text.innerHTML = add();
};
```

위 코드 예제는 자바스크립트에서 가장 많이 쓰이는 예제인 카운터 예제를 전역 변수를 사용해 구현한 것이다. 동작하는데는 문제가 없는 코드이지만 실제 데이터에 해당하는 부분이 전역 변수로 선언되어 누구든 접근할 수 있고, 사실상 `add()`가 접근하기 전에 누군가 이 변수를 먼저 조작한다면 정상적으로 동작하지 않게된다. 물론 이 변수를 지역 변수로 바꿀 수도 있겠지만 그렇게 된다면 업데이트 이전의 상태를 기억하지 못하기 때문에 카운터라고 부를 수 없다.

```javascript
let btn = document.querySelector(".plus");
let text = document.querySelector(".count");

const add = (function () {
  let count = 0;

  return function () {
    return ++count;
  };
})();

btn.onclick = function () {
  text.innerHTML = add();
};
```

위 코드 예제는 IIFE (Immediately Invoked Function Expression) 함수를 사용해 전역 변수를 사용한 카운터와 동일한 기능을 하게끔 구현한 것이다. 말그대로 즉시 실행 함수이기 때문에 `add()`에는 `++count`를 수행하는 함수가 할당되며, 이 함수는 클로저이다. 따라서 이 즉시 실행 함수가 생성했을 때의 Lexical Environment를 기억하고 있고, 이 함수가 반환하는 `count` 값을 `add`가 알고있기 때문에 유지할 수 있게된다. 또한 즉시 실행 함수는 딱 한 번만 수행되기 때문에 핸들러가 호출 될 때마다 초기화 되는 일은 없다.

> **추천 글** : [What is an IIFE in JavaScript?](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)
