---
layout: post
title: "Mongoose 설치 및 세팅 방법"
category: [node, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

```bash
npm install mongoose
```

```javascript
import mongoose from "mongoose";

// URL은 터미널에서 mongo 실행 후 확인
// URL 뒤에 /데이터베이스이름 으로 설정
mongoose.connect("mongodb://127.0.0.1:27017/database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connetDB = () => console.log("Connected to DB ✅");
const errorDB = (error) => console.log("DB Error : ", error);

const db = mongoose.connection;
db.once("open", connetDB); // 한 번만 실행
db.on("error", errorDB); // 에러 계속 지켜봄
```
