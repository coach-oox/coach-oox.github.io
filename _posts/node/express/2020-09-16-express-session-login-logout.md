---
layout: post
title: "Express 세션을 사용한 로그인 기능 구현"
category: [node, express]
tags: [node, express, express-session, session]
comments: true
---

## 로그인 처리 예시

- 로그인 = 사용자를 인가하는 것을 의미한다.
- 인가됨을 어떻게 유지할 것인가? = 세션을 사용한다.

```javascript
export async function postLogin(request, response) {
  // ... 생략 ...
  // 데이터베이스에 해당 사용자가 있고, 패스워드가 일치할 경우 로그인 처리
  // 세션에 인가 (request.session.loggedIn = true) 여부 저장 및 사용자 정보 저장
  request.session.loggedIn = true;
  request.session.user = user;

  return response.redirect("/");
}
```

세션에 저장된 정보를 토대로 로그인이 유지되고, 어떤 사용자인지 식별할 수 있다.

## 로그아웃 처리 예시

- 로그아웃 = 인가를 취소하는 것을 의미한다.
- 즉, 세션에 저장된 인가 여부를 삭제하면 된다.

```javascript
export function logout(request, response) {
  request.session.destroy();
  return response.redirect("/");
}
```

`session.destroy()` 메소드를 사용해 클라이언트 브라우저에 저장된 세션을 삭제한다.
