---
layout: post
title: "Express 기본 사용법과 주요 메소드 정리"
category: [node, express]
tags: [node, express]
comments: true
---

## Express란?

Node.js를 위한 가벼운 Back-End (or Server-Side) Framework.

- 웹 어플리케이션을 만들기 쉬워진다.
- 가볍고 빠르며, 무료이다.
- Request와 Response를 통제할 수 있다.

## 기본 사용법

> Express는 CommonJS를 사용하기 때문에 ES6+ 문법을 사용하기 위해서는 Babel 설정이 필요하다.

```javascript
import express from "express";
const app = express(); // express 어플리케이션 생성

app.get("/", (request, response) => {
  return res.send("Hello World!");
});

// 지정된 호스트 및 포트에서 연결을 바인드하고 수신
app.listen(4000); // 4000번 포트 감시
```

# express() Methods

- `express.json([options])`
- `express.Router([options])`
- `express.static(root, [options])`
- `express.raw([options])`
- `express.text([options])`
- `express.urlencoded([options])`

## express.json()

`body-parser`와 동일한 기능. JSON 파일로 이루어진 Request Body를 받았을 때, 요청 값을 제대로 받아오지 못하는 문제를 해결하기 위해 사용함.

```javascript
import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.post("/", (request, response) => {
  return response.send(request.body);
});
```

기존에 이와 같은 문제를 해결하기 위해서는 위와 같이 `body-parser`를 사용해야 했다.

```javascript
import express from "express";
const app = express();

app.use(express.json());

app.post("/", (request, response) => {
  return response.send(request.body);
});
```

Express 4.16 이후 버전을 사용할 경우, API에 제공되는 `express.json()` 메소드를 사용하면 된다.

## express.Router()

```javascript
const router = express.Router([options]);
```

새로운 라우터 객체를 생성.

## express.static()

이미지, CSS 파일, 자바스크립트 파일 등의 정적 파일을 제공하기 위해서 사용되는 미들웨어 함수. `public/` 이라는 디렉토리 하위에 `images`, `css`, `js` 디렉토리가 있고, 각각에 정적 파일들이 들어있다고 가정해보자.

```javascript
app.use(express.static("public"));
```

`express.static()` 함수를 사용하면 위와 같이 파일을 제공할 수 있다.

```javascript
app.use("/static", express.static("public"));
```

만약 파일 시스템 내에 실제로 존재하지 않는 가상 경로 접두부를 지정하려면, 위와 같이 정적 디렉토리에 대한 마운트 경로를 지정한다. 결과는 아래와 같다.

```bash
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

## express.unlencoded()

`body-parser`의 `unlencoded()` 함수와 동일하게 동작. Request Body의 데이터가 어떤 방식으로 인코딩 되었는지 지정한다.

## express.row() & express.text()

```javascript
app.use(express.row());
app.use(express.text());
```

Request Body를 해석해주는 내장 미들웨어로, Body가 버퍼 데이터일 때는 `express.row()` 메소드를, 텍스트인 경우 `express.text()` 메소드를 사용한다.

# Application

## Properties

- `app.locals`
- `app.mountpath`

```javascript
app.locals.title = "Hello";

app.get("/", (request, response) => {
  return response.send(app.locals.title);
});
```

`app.locals`는 해당 앱이 사용하는 로컬 변수들의 영역으로, 앱과 동일한 라이프 사이클을 가진다. 즉, 서버가 켜져있는 내내 사용될 수 있기 때문에 전역 변수의 영역으로도 볼 수 있다.

```javascript
console.log(app.mountpath);
```

`app.mountpath`는 현재 서버 객체가 마운트 된 URL 경로를 반환한다.

## Methods

### app.all()

모든 요청에 대해 선행되는 (모든 HTTP 메소드에 대응하는) 메소드. 주로 해당 앱이나 라우터로 요청할 경우 반드시 선행되어야 할 함수나 미들웨어를 추가하기 위해 사용된다.

### app.get(), app.post(), app.put(), app.delete()

HTTP CRUD 처리를 위한 메소드.

### app.engine()

Pug와 같은 템플릿 엔진을 사용 (등록)하기 위한 메소드.

### app.render()

콜백 함수를 통해 HTML 문서를 렌더링.

### app.set()

```javascript
app.set("title", "Hello World!");
app.get("title"); // Hello World!
```

값에 이름을 설정.
