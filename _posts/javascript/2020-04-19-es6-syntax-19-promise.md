---
layout: post
title: "모던 자바스크립트와 ES6 #9 Promise"
category: [javascript]
tags: [javascript, es6]
comments: true
---

자바스크립트에서는 비동기 처리를 위해 일반적으로 콜백 함수를 사용한다. 하지만 기존의 콜백 패턴이 굉장히 지저분했고 예외 처리가 어려웠기 때문에, 여러 개의 비동기 처리를 한 번에 처리하려면 콜백 지옥이 열리곤 했다.

```javascript
first(function (a) {
  second(function (b) {
    third(function (c) {
      fourth(function (d) {
        // codes ...
      });
    });
  });
});
```

이러한 문제점을 보완하기 위해서 ES6에서는 Promise라는 개념을 도입했는데, 이 개념은 기존의 방식의 단점을 보완하고 비동기 처리 시점을 명확하게 표현할 수 있다.

## 사용법

Promise는 `Promise()` 생성자 함수에 비동기 작업을 수행하는 콜백 함수를 파라미터로 넘김으로써 인스턴스화 된다. 이때 콜백 함수는 `resolve`와 `reject` 함수를 아규먼트로 전달받는다.

```javascript
const promise = new Promise(function (resolve, reject) {
  if (success) {
    resolve("result");
  } else {
    reject("error");
  }
});
```

Promise는 비동기 처리의 성공 여부 등에 따라 특정한 상태 값을 가지는데, 그 종류는 다음과 같다.

- `pending` : 비동기 처리 전
- `fulfilled` : 비동기 처리 성공
- `rejected` : 비동기 처리 실패
- `settled` : 비동기 처리 수행 완료

더 자세한 내용은 MDN의 [문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 참고하자.

```javascript
first(function (a) {
  second(function (b) {
    third(function (c) {
      fourth(function (d) {
        // codes ...
      });
    });
  });
});
```

결론적으로 위와 같은 콜백 지옥을 Promise를 사용하면 다음과 같이 사용할 수 있다.

```javascript
promise
  .then(function (a) {})
  .then(function (b) {})
  .then(function (c) {})
  .then(function (d) {});
```

다음은 Promise에 `then()` 함수를 사용해 콜백 함수들을 Chaining하는 간단한 예제이다.

```javascript
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});

promise
  .then(function (num) {
    console.log(`Complete ${num}`);
    return num + 99;
  })
  .then(function (value) {
    console.log(`Now : ${value}`);
  });
```

Promise를 효율적으로 사용하기 위해서 다음의 링크를 참고하는 것을 추천한다.

- [Promise.prototype.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
- [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.resolve()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
- [Promise.reject()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
