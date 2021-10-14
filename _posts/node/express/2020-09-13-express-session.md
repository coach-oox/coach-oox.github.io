---
layout: post
title: "Express 세션 관리를 위한 Express-Session 사용법"
category: [node, express]
tags: [node, express, express-session, session]
comments: true
---

```bash
npm install express-session
```

Express에서 세션을 관리하기 위한 미들웨어.

```javascript
import session from "express-session";

// 반드시 라우터 위쪽에 위치하게끔 작성
// session({ secret, resave, saveUninitialized })
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
```

```javascript
app.use((request, response, next) => {
  console.log(request.session);
  next();
});
```

컨트롤러에서 `request.session`으로 접근할 수 있다.

## Options

- `secret` : 쿠키를 임의로 변조하는 것을 방지하기 위한 값
- `resave` : 세션을 언제나 저장할 지 (변경되지 않아도) 여부
- `saveUninitialized` : 세션이 저장되기 전에 `uninitialized` 상태로 미리 만들어서 저장

### resave

`resave` 옵션은 기존에 있던 세션에 변경 사항이 없을 경우에도 모든 Request 마다 해당 세션을 다시 저장하는 옵션이다. 기본 값은 `true`이지만 대부분 `false`를 사용한다.

### saveUninitialized

Uninitialized란 Request가 들어올 때 해당 Request에서 새로 생성된 세션에 아무런 작업 (초기화)이 이루어지지 않은 경우를 의미한다. 즉, 이 옵션을 `true`로 설정할 경우 Uninitialized 상태인 세션을 강제로 저장하게 되며, 아무 내용이 없는 세션이 계속해서 저장될 수 있다.

따라서 `false`로 설정함으로써 Empty Session Object가 쌓이는 것을 방지해 서버의 스토리지를 아낄 수 있고, 쿠키 사용 정책을 준수하기 위해서도 `false`를 사용한다. 단, 만약 클라이언트의 서버 방문 횟수에 따라 등급을 달리 하고 싶은 경우 `true` 옵션을 활용할 수도 있다.
