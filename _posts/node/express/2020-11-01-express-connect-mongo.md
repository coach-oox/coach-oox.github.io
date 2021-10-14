---
layout: post
title: "Express 세션 정보 유지를 위한 Connect-Mongo 사용법"
category: [node, express]
tags: [node, express, session, connect-mongo, express-session]
comments: true
---

Express 환경에서 세션을 사용하기 위해서는 `express-session` 라이브러리를 사용한다. 이때 세션 데이터는 쿠키 자체에 저장되지 않고, 세션 아이디만 저장되며, 세션 데이터는 서버 측에 저장된다. 즉, 서버를 재시작하면 (`nodemon` 사용시 파일을 저장할 때마다) 세션 데이터는 초기화되는 문제가 발생하는 데, 이때 서버 재시작과 상관없이 세션을 유지하기 위해 `connect-mongo`를 사용한다.

> Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side. (세션 데이터는 쿠키 자체에 저장되지 않고 세션 ID 만 저장됩니다. 세션 데이터는 서버 측에 저장됩니다.) - [NPM express-session](https://www.npmjs.com/package/express-session)

`connect-mongo`는 세션 데이터를 MongoDB에 저장할 수 있게 해준다.

## 사용법 예시

```javascript
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/project", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connetDB = () => console.log("Connected to DB ✅");
const errorDB = (error) => console.log("DB Error : ", error);

const db = mongoose.connection;
db.once("open", connetDB);
db.on("error", errorDB);
```

위 코드는 Express 환경에서 MongoDB를 사용하기 위해 `mongoose`를 설정한 파일로, MongoDB URL를 복사한다. (또는 터미널에서 `mongo` 입력)

```javascript
import express from "express";
import session from "express-session";
import mongoStore from "connect-mongo";

app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
    store: mongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/project",
    }),
  })
);
```

`connet-mongo`를 `import`하고 세션을 사용하는 곳 (`express-session`을 설정하는 곳)의 `session()` 메소드 안에, 위와 같이 내보낼 곳 (`store`)에 `mongoStore.create()` 메소드를 사용해 MongoDB URL를 지정한다. (브라우저 새로고침 후 터미널에서 `mongo`로 확인)

```bash
> use project
switched to db project

> show collections
sessions
users
posts
```
