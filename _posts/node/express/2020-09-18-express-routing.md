---
layout: post
title: "Express 라우팅 (Routing) 방법 총정리"
category: [node, express]
tags: [node, express]
comments: true
---

```javascript
app.get("/", (request, response) => response.send("Hello I'm Home!"));
```

`GET` 요청에 대한 라우트를 생성할 때는 `get()` 메소드를, `POST` 요청에 대한 라우트를 생성할 때는 `post()` 메소드를 사용하며, 첫 번째 인자는 라우트 경로를, 두 번째 인자는 미들웨어 (생략 가능) 또는 해당 경로를 담당하는 컨트롤러 함수를 가진다.

## 같은 경로에 대한 단축 표현

```javascript
// app.get("/join", (request, response) => response.send("Hello I'm Get Join"));
// app.post("/join", (request, response) => response.send("Hello I'm Post Join"));

app
  .route("/join")
  .get((request, response) => response.send("Hello I'm Get Join"))
  .post((request, response) => response.send("Hello I'm Post Join"));
```

같은 경로에 대한 `get()`과 `post()`는 각각 작성할 수도 있지만, 위 코드 예제와 같이 `route()`로 경로를 지정하고, `get()`과 `post()`를 이어붙여 숏컷으로 표현할 수도 있다.

## 같은 경로에 대한 미들웨어 단축 표현

```javascript
// app.get("/join", middleware, (request, response) => response.send("Hello I'm Get Join"));
// app.post("/join", middleware, (request, response) => response.send("Hello I'm Post Join"));

app
  .route("/join")
  .all(middleware)
  .get((request, response) => response.send("Hello I'm Get Join"))
  .post((request, response) => response.send("Hello I'm Post Join"));
```

같은 경로에 동일한 미들웨어를 적용할 때는 위 코드 예제와 같이 `all()` 메소드를 사용한다.

## 중첩 경로 표현

```javascript
// app.get("/user/login", userLogin);
// app.get("/user/logout", userLogout);
// app.get("/user/edit", userEdit);
```

- `/user/login`
- `/user/logout`
- `/user/edit`

위와 같이 `/user`와 같은 동일 경로에 대한 하위 경로를 표현할 때, 각각의 하위 경로에 대한 라우터를 작성한 `userRouter`를 따로 작성한 뒤, 베이스 경로에 지정할 수 있다.

```javascript
// server.js
app.use("/user", userRouter);
```

```javascript
// userRouter
const userRouter = express.Router();

userRouter.get("/login", userLogin);
userRouter.get("/logout", userLogout);
userRouter.get("/edit", userEdit);
```
