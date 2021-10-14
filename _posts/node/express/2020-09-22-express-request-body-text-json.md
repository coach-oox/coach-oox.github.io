---
layout: post
title: "클라이언트에서 Express 서버로 텍스트 · JSON 데이터 전송하기"
category: [node, express]
tags: [node, express]
comments: true
---

## Request.body 만들어 서버로 보내기

```javascript
fetch(`/api/posts/${id}/comment`, {
  method: "POST",
  body: { text },
});
```

서버 측으로 `POST` 요청을 보낼 때, 반드시 `form`을 통해서 Sumbit 하지 않아도, 위와 같이 `fetch`를 사용해 `POST` 요청을 보낼 수 있으며, `body` 프로퍼티에 정보를 담아 보낼 수 있다. 하지만 이때 위와 같이 담긴 `text`는 서버측에서 `console.log(request.body)`를 하려고 해도 출력되지 않는데, 그 이유는 서버에서 이해할 수 있는 형식으로 파싱되지 않고, `[Object object]`로 전달되기 때문이다.

```javascript
app.use(express.text());
```

이를 해결하기 위해서 위와 같이 `express.text()` 미들웨어를 사용할 수 있다.

### 텍스트로 보낼 떄의 문제점

만약 보내야 하는 데이터가 하나가 아니라 여러 개일 경우.

```javascript
fetch(`/api/posts/${id}/comment`, {
  method: "POST",
  body: {
    username: "John",
    text: "Hello",
  },
});
```

위와 같이 다수의 데이터 (객체)를 텍스트로 보내버리면 `[Object object]`로 인식하며 제대로 전달되지 않는다.

### 해결 방법 : JSON 파일로 만들어 보내기

```javascript
app.use(express.json());
```

```javascript
fetch(`/api/posts/${id}/comment`, {
  method: "POST",
  body: JSON.stringify({ username, text }),
  headers: { "Content-Type": "application/json" },
});
```
