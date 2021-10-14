---
layout: post
title: "Mongoose 참조를 위한 populate() 사용법"
category: [node, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

```javascript
export async function postDetail(request, response) {
  const { id } = request.params;
  const post = await Post.findById(id).populate("owner");

  if (!post) {
    return response.status(404).render("404");
  }

  return response.render("postDetail", {
    post,
  });
}
```

`populate()`는 Mongoose에서 제공하는 메소드로 다른 Collection에 있는 도큐멘트를 참조 (치환)한다. 즉, `populate()`를 사용하면 `ref`에 해당 `ObjectId`가 속해 있는 모델을 가져올 수 있다. (`ObjectId`에 해당하는 값과 객체를 치환)

- [Mongoose Populate](https://mongoosejs.com/docs/populate.html)
