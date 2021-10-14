---
layout: post
title: "Mongoose 기존의 데이터를 가져와서 업데이트하기"
category: [node, express, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

```javascript
export async function postEdit(request, response) {
  const { id } = request.params;
  const post = await Post.exists({ _id: id });
  const { title, description } = request.body;

  if (!post) {
    return response.render("404", { pageTitle: "Post not found." });
  }

  post.title = title;
  post.description = description;
  await post.save();

  return response.redirect(`/posts/${id}`);
}
```

위 코드 예제는 현재 게시글 `id` 값을 토대로 데이터베이스에 저장된 `post` 객체를 가져온 다음, 게시글 수정을 위한 페이지에서 `form`을 통해 전달받은 `title`, `description` 부분을 업데이트하는 예제이다.

## findByIdAndUpdate()

`findByIdAndUpdate()` 라는 Mongoose API를 사용하면 다음과 같이 동일 부분을 처리할 수 있다.

```javascript
export async function postEdit(request, response) {
  const { id } = request.params;
  const post = await Post.exists({ _id: id });
  const { title, description } = request.body;

  if (!post) {
    return response.render("404", { pageTitle: "Post not found." });
  }

  await Post.findByIdAndUpdate(id, {
    title,
    description,
  });

  return response.redirect(`/posts/${id}`);
}
```

첫 번째 인자는 `id`, 두 번째 인자는 업데이트 할 내용 (객체)을 받는다.
