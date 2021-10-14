---
layout: post
title: "Node DotEnv를 사용해서 환경 변수 사용하기"
category: [node]
tags: [node, dotenv, express]
comments: true
---

```bash
npm install dotenv
```

Express 환경에서 API 주소, API KEY, DB URL 등의 환경 변수를 `process.env.변수명`으로 접근해 사용하기 위해서 `dotenv` 라이브러리를 사용한다. (참고 : [Node.js - process.env](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env))

## 사용법 예시

```javscript
COOKIE_SECRET=adsfasdfasdfasdf
MONGODB_URL=mongodb://127.0.0.1:27017/project
```

가장 먼저 프로젝트 루트 위치에 `.env` 파일을 만들고 위와 같이 사용할 환경 변수를 세팅한다. (환경 변수는 String 형식으로 Store 된다.) 이때 실수로 공개된 저장소에 배포되지 않도록 `.gitignore`에 해당 파일을 등록해둔다.

```javascript
import "./database";
// import dotenv from "dotenv";
// dotenv.config();
import "dotenv/config";
import Video from "./models/Video";
import User from "./models/User";
import app from "./server";

const PORT = 4000;

function listenServer() {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
}

app.listen(PORT, listenServer);
```

App을 Initializing 하는 곳 또는 Express를 시작하는 `server.js`에서 App이 실행됨과 동시에 `dotenv`가 실행될 수 있도록 `import`한다.

```javascript
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
    }),
  })
);
```

사용할 때는 `process.env.변수명`으로 접근한다.
