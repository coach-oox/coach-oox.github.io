---
layout: post
title: "자바스크립트 Promise와 Axios"
category: [javascript]
tags: [javascript]
comments: true
---

## Promise가 등장한 이유

```javascript
func(url, function (response1) {
  func1(response1, function (response2) {
    func2(response2, function (response3) {
      ...
    });
  });
});
```

위 코드 예제는 ES6 이전의 콜백 지옥을 흉내내본 것이다. 순차적으로 해결한다는 느낌보다는 옆으로 깊어지는 느낌; 그래서 이러한 비동기 처리를 순차적으로 해결하기 위한 니즈에 따라 등장한게 Promise였다.

```javascript
function getUsers() {
  fetch("https://api.com/users")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.users;
    });
}
```

HTML5에 있는 API인 `fetch()` 메소드를 실행하고 (`GET`으로 동작) 비동기 동작에 대한 Response가 오면 이 자체가 하나의 Promise이며, 응답으로 온 데이터를 `then()`의 콜백 함수 파라미터로 넘기면서 순차적으로 동작하게 된다. 즉, `then()` 함수를 계속 써야하기 때문에 콜백 지옥을 완전히 없앴다고 말하기는 애매하지만, 이전 문법에 비해면 Depth가 현저히 줄어들긴 했다.

### Promise의 문법

- `new Promise(callBack)`
- `then()` 함수와 `catch()` 함수는 Promise를 리턴

### Promise의 상태

- 미확정 (Unnsettled / Pending) : Thenable 하지 않음
- 확정 (Settled / Resolved) : Thenable 함
  - 성공 (Fulfilled)
  - 실패 (Rejected)

## Axios의 사용

```javascript
function getUsers() {
  axios.get("https://api.com/users").then((response) => {
    return json.users;
  });
}
```

자바스크립트 라이브러리인 Axios는 Promise를 반환하면서 JSON 파싱까지 자동으로 해준다.
