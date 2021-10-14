---
layout: post
title: "Pug Dataset을 사용해서 백엔드와 데이터 공유하기"
category: [node, pug, express]
tags: [node, pug, express]
comments: true
---

백엔드와 Pug는 서로 데이터를 공유할 수 있다. 하지만 프론트엔드 쪽에서 사용하는 자바스크립트에서는 이러한 정보에 접근할 수가 없는데, 이때 가장 간편하게 정보를 공유하는 방법은 HTML의 `data-set`을 사용하는 방법이다. (이외 방법 : `localStorage` 등)

## 처리를 담당할 라우터

```javascript
import express from "express";
import { addComment } from "../controllers/postController";

const apiRouter = express.Router();
apiRouter.post("/comments/:id([0-9a-f]{24})/add", addComment);

export default apiRouter;
```

## 라우터를 담당하는 백엔드 컨트롤러

```javascript
export async function addComment(request, response) {
  const { id } = request.params;
  // ... 생략 ...
}
```

## 해당 페이지 Pug

```pug
block content
    div(data-id = comment._id)
        // ... 생략 ...
```

## 프론트엔드 자바스크립트

```javascript
function finishVideo(event) {
  // dataset에서 id 가져옴
  const { id } = container.dataset;

  // 해당 경로로 POST 요청 => 처리
  fetch(`/api/comments/${id}/add`, {
    method: "POST",
  });
}
```
