---
layout: post
title: "Mongoose 클라이언트가 전달한 정보를 데이터베이스에 저장하기"
category: [node, express, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

## 요약

1. 클라이언트가 서버측으로 어떤 정보를 전달 (`POST`)
2. 서버는 해당 정보를 Mongoose 모델로 작성
3. 작성된 모델을 데이터베이스에 추가

### 클라이언트

```pug
block content
    form(method="POST")
        input(name="title", placeholder="Title", type="text", required)
        input(name="description", placeholder="Description", type="text", required)
        input(value="Upload", type="submit")
```

위 예제에서 클라이언트는 3개의 `input` (`title`, `description`)을 Body 정보에 담아 POST 요청을 보낸다.

### 서버

해당 `POST` 요청을 담당하는 컨트롤러.

```javascript
export async function postUpload(request, response) {
  const { title, description, hashtags } = request.body;

  const post = new Post({
    title,
    description,
    createdAt: Date.now(),
  });

  await post.save();
  return response.redirect("/");
}
```

위와 같이 모델을 생성한 다음 `post.save()` 함수를 사용해 저장할 수도 있고, 다음과 같이 `Post.create()` 함수를 사용할 수도 있다.

```javascript
export async function postUpload(request, response) {
  const { title, description, hashtags } = request.body;

  await Post.create({
    title,
    description,
    createdAt: Date.now(),
  });

  return response.redirect("/");
}
```
