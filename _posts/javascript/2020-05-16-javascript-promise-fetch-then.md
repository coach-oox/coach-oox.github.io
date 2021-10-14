---
layout: post
title: "자바스크립트 Promise의 비동기 처리 방식"
category: [javascript]
tags: [javascript]
comments: true
---

예를 들어 다음과 같이 어떤 서버에 요청을 보내 유저 정보를 가져온 다음 필요한 유저 정보만을 사용하는 경우를 가정해보자.

```javascript
function getUser() {
  const response = fetch.get("https://api.com/users");
  const users = fetch.get(`https://api.com/users/${response[3]}`);
}
```

이때 위 방식은 동기 방식으로, `response`를 기다리지 않고 바로 다음 줄이 실행되기 때문에 `response[3]`에 제대로 된 결과 값이 있을지 보장할 수 없다. 따라서 ES6 이전에는 제이쿼리 등을 이용해 서버로 부터 `success`를 전달 받았을 경우에만 비로소 어떤 처리를 하는 등의 방법으로 비동기 처리를 사용했었다.

```javascript
fetch.get("https://api.com/users)
.then((response) => {
    return response.json();
})
.then((json) => {
    return json.users[3];
})
```

하지만 ES6 이후 등장한 Promise는 (위에서 각각은 하나의 Promise가 된다.) `then()` 메소드를 사용해 비동기 처리를 구현할 수 있게 되었다. (참고 : [자바스크립트 Promise와 Axios](/posts/2020-05-11-javascript-promise-axios/))
