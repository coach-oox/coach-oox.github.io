---
layout: post
title: "Mongoose 기본 제공 미들웨어 사용법"
category: [node, express, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

Mongoose는 4가지 종류의 미들웨어를 제공한다. (참고 : [Mongoose Middleware](https://mongoosejs.com/docs/middleware.html))

- document middleware
- model middleware
- aggregate middleware
- query middleware

미들웨어는 스키마를 구현하고 모델을 내보내는 파일에서 정의하고, 사용되기 전에 Hooking 된다.

```javascript
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

// 저장할 때마다 실행되는 미들웨어
postSchema.pre("save", async function () {
  this.title = "I'M MIDDLEWARE!";
});

const postModel = mongoose.model("Post", postSchema);
export default postModel;
```

위 코드 예제는 모델을 저장할 때 적용될 미들웨어를 정의한 것이다. `this`는 미들웨어를 호출한 개체로, 만약 게시물 업로드 컨트롤러에서
해당 모델에 `save`가 일어나면, 미들웨어가 먼저 실행되고 저장된다. 즉, `this.title = text` 구문은 저장할 게시물의 `title`을 지정한 텍스트로 변경한다.

## 미들웨어의 활용

**미들웨어를 사용하면 특정 모델에 대해 반복적으로 처리해야 하는 공통 코드를 최소화할 수 있다.**

```javascript
export async function postUpload(request, response) {
  const { title, description } = request.body;

  try {
    const post = new Post({
      title,
      description,
    });

    await post.save();
    return response.redirect("/");
  } catch (error) {
    console.log(error);
    return response.render("uploadPost");
  }
}
```

위 코드 예시는 새로운 모델을 생성하고 저장한다. 미들웨어는 `save`가 일어날 때, 컨트롤러에서 데이터베이스 저장시도 -> 관련 미들웨어 -> 저장의 순서로 진행되며, 미들웨어에서는 `this`로 저장될 데이터를 Hooking 할 수 있기 때문에 모델이 가지고 있는 데이터를 미들웨어에 위임할 수도 있다.

```javascript
postSchema.pre("save", async function () {
  console.log(this.description);
});
```

먼저 미들웨어로 넘어가는 데이터의 원형을 알아보기 위해 위와 같이 `console.log`를 추가한다. 이때 클라이언트는 `description`를 작성할 때 `hello world!`와 같이 작성한다. 결과는 다음과 같다.

```bash
"hello world!"
```
