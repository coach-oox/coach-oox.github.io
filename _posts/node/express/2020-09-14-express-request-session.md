---
layout: post
title: "Express 세션에 정보를 추가하고 사용하는 방법"
category: [node, express]
tags: [node, express, express-session, session]
comments: true
---

## 선행 조건

[Express 세션 관리를 위한 Express-Session 사용법](/posts/2020-09-13-express-session/)

## 세션에 정보 추가하는 방법

```javascript
// add information to session
request.session.loggedIn = true;
request.session.user = user;
}
```

`request.session.key = value` 형식으로 세션에 정보를 추가한다.

## 세션 정보를 클라이언트와 공유하기

세션 정보를 클라이언트와 공유하기 위해서는 세션의 정보를 미들웨어에서 Hooking 해서 `locals`에 저장하면 된다.

```javascript
export function localMiddlewares(request, response, next) {
  // html / pug (view)에서 세션 정보를 사용하기 위해서 response.locals에 저장
  response.locals.loggedIn = Boolean(request.session.loggedIn);
  response.locals.user = request.session.user;
  next();
}
```
