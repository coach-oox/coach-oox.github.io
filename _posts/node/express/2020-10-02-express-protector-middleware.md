---
layout: post
title: "Express 특정 경로 접근을 제한하는 미들웨어 만들기"
category: [node, express]
tags: [node, express]
comments: true
---

특정 경로에 대해, 로그인한 유저와 로그인하지 않은 유저에 대해 다른 처리 (페이지 제공, 경로 제공 등)를 하고 싶을 때는 미들웨어를 사용해 로그인한 유저만 접근 가능하거나, 로그인하지 않은 유저만 접근 가능하도록 접근을 제한할 수 있다.

```javascript
export function loggedInOnly(request, response, next) {
  if (request.session.loggedIn) {
    next();
  } else {
    return response.redirect("/login");
  }
}
```

위 코드 예제는 세션에 저장된 로그인 정보가 있을 경우에만 다음 경로로 접근을 허용 (`next()`)하고, 로그인 정보가 없는 경우 로그인 페이지로 리디렉션 한다.

```javascript
export function publicOnly(request, response, next) {
  if (!request.session.loggedIn) {
    next();
  } else {
    return response.redirect("/");
  }
}
```

위 코드 예제는 세션에 저장된 로그인 정보가 없을 경우에만 다음 경로로 접근을 허용하고, 로그인 정보가 있을 경우에는 메인 페이지로 리디렉션 한다. 즉, 로그인된 유저만 접근할 수 있는 페이지에는 `loggedInOnly`를, 로그인하지 않은 유저만 접근할 수 있는 페이지에는 `publicOnly`를 사용함으로써 접근을 제한할 수 있다.
