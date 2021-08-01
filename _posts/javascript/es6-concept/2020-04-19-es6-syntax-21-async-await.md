---
layout: post
title: "모던 자바스크립트와 ES6 #12 async · await"
category: [javascript, es6-concept]
tags: [javascript, es6]
comments: true
---

ES5까지의 비동기 처리는 에러 처리가 힘들고 콜백 지옥같은 문제가 있어서, ES6에서는 Promise를 도입했다. 하지만 Promise를 사용하더라도 여전히 코드가 길어지는 것은 해결할 수 없었고, 이러한 점들을 보완하기 위해서 ES8에서 `asnyc`와 `await`이 도입되었다.

> `async`와 `await`을 비동기 처리에서 절대적으로 사용해야하는 것은 아니다. 콜백의 Depth가 얕은 경우에는 그냥 Promise를 사용하는것이 더 간결한 코드 작성법이 될 때도 있다.

```javascript
(async function func() {
  await msg("Hello");
  await msg("World");
})();

function msg(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(text);
      resolve("Success");
    }, 1000);
  });
}
```

먼저 함수 이름 앞에 `asnyc`를 선언함으로써 비동기 처리를 담당할 것임을 명시한다. `asnyc` 키워드로 선언된 함수 내부에서만 `await`을 사용할 수 있는데, `await`은 호출할 비동기 함수 앞에 위치한다. 위 코드에서, `msg()`는 비동기 코드임에도 불구하고 항상 작성된 순서를 보장받을 수 있다.

> `await`은 `Promise`를 리턴받는다. 즉, 위 코드에서 비동기 함수 `msg()`의 실행 결과로 `Promise`를 리턴받기 때문에 동기적으로 수행된다.

똑같은 코드를 `Promise`를 사용해서 표현하면 다음과 같다.

```javascript
(async function func() {
  msg("Hello").then(function () {
    return msg("World");
  });
})();

function msg(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(text);
      resolve("Success");
    }, 1000);
  });
}
```

콜백의 Depth가 깊지 않을 때는 오히려 위와 같이 `Promise`를 사용하는 것이 더 깔끔할 때도 있다. 하지만 `then()` 함수를 사용하는 횟수가 많아진다면 당연히 `await`을 사용하는 것이 더 나을 것이다.
