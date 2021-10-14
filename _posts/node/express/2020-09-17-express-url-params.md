---
layout: post
title: "Express URL에 변수 사용하기"
category: [node, express]
tags: [node, express]
comments: true
---

```javascript
http://abc.com/user/1
http://abc.com/user/2
```

위와 같이 변수를 사용해야 할 때.

```javascript
/user/:id
```

해당 부분을 콜론 + 변수명으로 표현한다.

```javascript
app.get("/user/:id", (request, response) => {
  console.log(request.params.id);
});
```

해당 파라미터를 파싱할 때는 `request.params.id`로 접근한다.

## 사용 예시

```javascript
app.get("/posts/:id", postDetail);

function postDetail(request, response) {
  return response.send(`Post ID : ${request.id}`);
}
```
