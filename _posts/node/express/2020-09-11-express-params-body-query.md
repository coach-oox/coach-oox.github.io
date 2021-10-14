---
layout: post
title: "Express Request 객체의 이해 및 사용법"
category: [node, express]
tags: [node, express]
comments: true
---

`request` 객체는 HTTP Request로, `parameters`, `body`, `query string`, `HTTP header` 등의 Property를 가진다. (Node의 `request` 객체보다 향상된 버전)

- `request.params`
- `request.body`
- `request.query`

## request.params

```javascript
function postDetail(request, response) {
  // const id = request.params.id;
  const { id } = request.params;
}
```

`request.params`는 주소 (URL 경로)에 포함된 변수를 담는다. 예를들어 `/posts/:id` 경로라면 `id` 변수가 `params`에 담긴다.

## request.body

`request.body`는 클라이언트 측에서 `POST` 요청을 보낼 때 전달받는 `body`로, `key - value` 형식의 데이터가 담겨있다. (JSON 객체에 접근할 수 있음)

```javascript
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
```

```pug
form(method="POST")
    input(name="nickname", value="text")
    input(name="password", value="text")
```

```javascript
function signup(request, response) {
  // const nickname = request.body.nickname;
  // const password = request.body.password;
  const { nickname, password } = request.body;
}
```

`request.body`에 담긴 `key - value` 데이터는 사용할 수 있는 형태로 Parsing하는 과정이 필요하며, `express.json()`, `expreses.urlencoded()`와 같은 Middleware를 사용해야 한다. (Parsing하기 전에는 기본 값이 `undefined`로 설정되어 있음)

## request.query

`request.query`는 해당 경로에서 Query String을 Parameter로 가지는 객체 Property이다.

```pug
form(method="GET")
    input(name="keyword", value="text")
```

특정 경로에서 `GET` 요청을 받았을 때.

```javascript
// GET /search?keyword=hello
function searchVideo(request, response) {
  // const keyword = request.query.keyword
  const { keyword } = request.query;
}
```

해당 경로 뒤에 `?name=value` 형식으로 Query String이 붙는다.
