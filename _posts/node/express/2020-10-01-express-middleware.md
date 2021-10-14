---
layout: post
title: "Express 미들웨어 (Middleware) 사용법"
category: [node, express]
tags: [node, express]
comments: true
---

## 전체 경로에 적용되는 미들웨어

```javascript
// middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(localMiddlewares);

// routers
app.use("/", globalRouter);
app.use("/users", userRouter);
```

전체 경로에 (애플리케이션 전체에) 적용되는 미들웨어는 애플리케이션의 라우터 상단에 `use()` 메소드를 사용해 지정한다.

## 특정 경로에 적용되는 미들웨어

```javascript
app.get("/", middleware, homeContoller);
app.route("/join").all(middleware).get(getJoin).post(postJoin);
app.route("/join").all(middleware).get(getJoin).post(checkErrors, postJoin);
```
