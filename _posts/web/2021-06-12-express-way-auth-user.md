---
layout: post
title: "Session 인증 방식과 JWT 인증 방식의 비교"
category: [web]
tags: [authentication, session, cookie, jwt]
comments: true
---

> 참고 : [Cookie · Session 기술의 이해](https://dohaelee.github.io/posts/2020-12-11-sessions-cookies/)

## Session 인증 방식

HTTP 웹 서버는 Stateless 프로토콜을 사용하기 때문에, 사용자의 인가 사실을 유지할 수 없고, 매번 다른 페이지로 이동하거나 새로고침을 할 때 다시 인가 됨을 증명해야만 한다. 이때 사용할 수 있는 방법 중 하나가 이 Session (이하 세션) 기반 인증 방식이며, 사용자가 웹 서버에 접속해 있는 상태를 하나의 세션으로 구분한다.

세션과 함께 사용되는 웹 기술 중 Cookie (이하 쿠키)는 상태 정보를 유지하기 위해 사이트 단위를 기준으로 생성하는 데이터를 의미한다. 쿠키는 데이터를 클라이언트 측 (브라우저)에 저장하는데, 세션은 웹 서버에서 세션 아이디 파일을 만들고, 서비스를 제공하는 서버에 저장한다.

### 동작 방식

1. 사용자가 로그인을 요청한다.
2. 요청에 담긴 정보가 유효한 경우, 서버에서 생성한 세션이 서버에 저장된다. 이때 이 세션은 세션 아이디를 기준으로 데이터를 저장한다.
3. 서버는 세션 아이디를 쿠키에 담아 클라이언트에 응답한다.
4. 클라이언트는 모든 요청에 쿠키에 있는 세션 아이디를 포함한다.
5. 서버는 클라이언트가 보낸 세션 아이디를 기준으로, 서버 메모리에서 사용자의 세션 정보를 식별한다.
6. 세션 정보가 유효한 경우 클라이언트가 요청한 정보를 응답한다.

### 장점

- 서버가 클라이언트의 상태를 유지하고 있기 때문에, 로그인 여부 등을 확인하기에 용이하고, 서버 측 기준에 따라 접근을 제한하거나 로그아웃 처리를 하거나 하는 등의 처리가 쉽다.
- 클라이언트 측에서 데이터가 손상 (강제로 변경)되는 경우에도, 서버에서 클라이언트의 신뢰할 수 있는 최신 상태를 유지하고 있기 때문에 상대적으로 안전하다고 할 수 있다.

### 단점

- 클라이언트 수가 많아지면 서버의 메모리나 데이터베이스에 부하가 발생한다.
- 로드 밸런싱을 통한 서버 확장이 필요한 경우, 세션의 관리가 매우 힘들어진다.
- 멀티 디바이스 환경에서 로그인 시, 중복 로그인 처리에 관해 신경써야 한다.
- 쿠키는 단일 도메인 및 서브 도메인에서만 작동하기 때문에 여러 도메인에 요청을 보내야 하는 CORS 방식을 사용하기 어렵다.

### Express 사용 예제

예전에 써둔 글이 있어서 링크로 대신한다.

- [Express 세션 관리를 위한 Express-Session 사용법](https://dohaelee.github.io/posts/2020-09-13-express-session/)
- [Express 세션에 정보를 추가하고 사용하는 방법](https://dohaelee.github.io/posts/2020-09-14-express-request-session/)
- [Express 클라이언트의 세션 정보를 업데이트하는 방법](https://dohaelee.github.io/posts/2020-09-15-express-update-session/)
- [Express 세션을 사용한 로그인 기능 구현](https://dohaelee.github.io/posts/2020-09-16-express-session-login-logout/)

MongoDB 환경에서 실습한다면 다음 링크도 참고하길 바란다.

- [Express 세션 정보 유지를 위한 Connect-Mongo 사용법](https://dohaelee.github.io/posts/2020-11-01-express-connect-mongo/)

## JWT 인증 방식

JWT는 JSON Web Token의 약자로, 전자 서명된 URL-Safe JSON이다. JWT는 서버와 클라이어트 간에 정보를 주고 받을 때, 응답의 헤더에 토큰을 넣고, 서버는 별도의 인증 과정 없이 헤더에 포함되어 있는 JWT 정보를 통해 인증한다.

### 장점

- JWT는 클라이언트 측에 저장되기 때문에 서버의 메모리나 데이터베이스에 부하가 적다.
- 멀티 디바이스 환경에 적합하다. (부단이 적다.)
- 로드 밸런싱을 통한 서버 확장이 용이하다.
- CORS 방식을 사용하기 용이하다.

### 단점

- 서버에서 클라이언트 상태를 저장하고 있지 않기 때문에, 로그인 여부를 지속적으로 체크한다던지, 서버 측 기준에 따라 로그아웃 상태로 만든다던지 하는 처리가 어렵다.
- 클라이언트 측에서 토큰이 손상되면 서버에서 확인할 수 없다.
- XXS 공격에 취약할 수 있다.

### Express 사용 예제

> [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 문서를 참고.

```js
var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "shhhhh");
```
