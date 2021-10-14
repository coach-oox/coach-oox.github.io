---
layout: post
title: "Mongoose 스키마 (Schema) 생성하기"
category: [node, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

MongoDB, Redis와 같은 NoSQL 데이터베이스는 테이블이 존재하지 않기 때문에 편리함과 동시에 의도하지 않은 데이터나 데이터 타입이 삽입되는 경우가 생길 수 있다. 이러한 문제를 사전에 방지하기 위해 Mongoose는 사전에 스키마를 작성해놓고, 데이터를 데이터베이스에 추가하기 전에 스키마를 토대로 검사를 한 뒤, 스키마의 정의와 다른 데이터가 있을 경우 에러를 발생시킨다. (**참고)** 스키마를 정의할 때는 데이터 타입뿐 아니라 인덱스를 설정하거나, 기본 값을 설정할 수도 있다.)

```javascript
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
});

const postModel = mongoose.model("Post", postSchema);
export default postModel;
```

`new mongoose.Schema()`는 인자로 객체를 받는데, 이때 객체 안에 들어갈 것들은 필드 이름과 데이터 타입이다. `title: String`은 필드 이름 `title`에 들어갈 데이터들의 타입이 `String`임을 나타내며, `title: { type: String }`와 동일하다.

```javascript
const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: String, default: Date.now, index: true },
});
```

기본 값, 인덱스 등 여러 개의 옵션을 지정해야 할 경우 `createdAt: { type: String, default: Date.now, index: true }` 와 같이 중괄호로 묶어 표현한다.

## 옵션

- `default` : 기본 값
- `required` (`boolean`) : 필수
- `unique` (`boolean`) : 유일성 (중복X)
- `lowercase` (`boolean`) : 소문자
- `trim` (`boolean`) : 공백 제거
- `max` : 최댓값
- `index` (`boolean`) : 인덱스

## 스키마 사용

스키마를 사용하기 위해서는 정의한 스키마를 `mongoose.model()` 메소드를 사용해 등록해야 한다.

```javascript
const postModel = mongoose.model("Post", postSchema);
export default postModel;
```

`mongoose.model()`의 첫 번째 인자는 컬렉션의 이름이며, 두 번째 인자는 사용할 스키마를 지정한다. `model()`는 첫 번째 인자로 주어진 텍스트를 복수형으로 만들어 컬렉션의 이름을 생성한다. (e.g., `Post` → `Posts`) 만약 자동으로 변경되는 컬렉션 이름이 아니라, 임의로 컬렉션의 이름을 지정하고 싶다면 세 번째 인자에 지정할 컬렉션 이름을 추가하면 된다. (e.g., `mongoose.model("Post", postSchema, "Contens")`)

```javascript
// init.js 또는 server.js 등 서버를 실행하는 부분
import "./database";
import "dotenv/config";
import Post from "./models/Post";
import app from "./server";

const PORT = 4000;

function listenServer() {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
}

app.listen(PORT, listenServer);
```

마지막으로 작성한 스키마를 사용하기 위해서는 서버를 실행하는 부분에 `import` 해줘야 한다. (**Mongoose에서 컴파일 하도록**) 예를 들어 `server.js` 파일에 `database.js` (Mongoose 설정)을 `import` 했다면, 하위에 스키마도 꼭 `import` 해줘야 한다.
