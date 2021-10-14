---
layout: post
title: "Express 미들웨어에서 App의 지역 변수 (response.locals) 공유하기"
category: [node, express]
tags: [node, express]
comments: true
---

App (또는 서버)에서 사용하는 값을 HTML / Pug (View)에서 사용하고 싶거나, 서버에서 클라이언트 세션에 저장한 데이터를 HTML / Pug (View) 에서 접근하기 위해서는 해당 정보를 미들웨어에서 Hooking 해서 공유할 수 있게끔 해줘야 한다.

```javascript
app.use(localMiddlewares);
```

```javascript
export function localMiddlewares(request, response, next) {
  response.locals.loggedIn = Boolean(request.session.loggedIn);
  response.locals.user = request.session.user;
  next();
}
```

`request.app.locals.변수명`은 미들웨어에서 App의 지역 변수들을 사용할 수 있게 해주고, `response.locals.변수명`은 클라이언트 사이드로 지역 변수 (값)를 보낼 수 (공유할 수) 있다. 이때 `response.locals`의 Property 들은 `request`의 라이프 사이클을 따른다.
