---
layout: post
title: "Express 클라이언트가 보낸 Body 정보 파싱하는 방법"
category: [node, express]
tags: [node, express, body-parser]
comments: true
---

클라이언트 측에서 POST 또는 PUT 메소드로 요청할 때 Body를 포함하여 보낼 수 있는데, 이 Body 정보를 서버 측에서 받아 사용할 수 있는 (해석할 수 있는) 형태로 변형해야 사용 할 수 있기 때문에 파싱하는 과정이 필요하다.

## Express 내장 함수 사용

```javascript
export function postEdit(request, response) {
  const { id } = request.params;

  // Parsing Body => undefined
  console.log(request.body);

  return response.redirect(`/videos/${id}`);
}
```

위와 같이 POST 요청할 때 전달받은 Body 정보를 파싱하고자 할 때.

```javascript
app.use(express.urlencoded({ extended: true }));
```

중첩된 값을 허용함으로써 `request.body.title`로 값을 가져올 수 있다.

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

JSON 데이터를 파싱하는 예제.

## Body-Parser 미들웨어 사용

```javascript
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```

## extended

- `true` : NPM `qs` 라이브러리 사용
- `false` : Node.js 기본 내장된 `queryString` 사용
