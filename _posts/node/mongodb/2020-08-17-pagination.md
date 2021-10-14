---
layout: post
title: "Mongoose 페이징 (Paginate) 방법"
category: [node, express, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

## 전체 데이터 개수

```js
const posts = await Post.find({}).populate("owner");
const totalCount = posts.length;
```

라인 1과 같이 데이터베이스 검색 결과를 가져올 때, 결과를 담은 `posts`는 배열이 된다. (예외 처리 필요) 따라서 전체 게시글의 개수를 `posts.length`로 구할 수 있다.

## Query 처리

프론트 쪽에서 `GET` 요청을 보내는 URL은 `/posts` 이며, `/posts?page=1`와 같이 페이지 번호를 쿼리에 담아 보낸다.

```js
const {
  query: { page },
} = request;
const currentPage = page;
const skip = (page - 1) * 10;
const posts = await Post.find()
  .populate("owner")
  .sort("-createdAt")
  .skip(skip)
  .limit(10);
```

`skip()` 메소드는 건너 뛸 데이터를 지정하고, `limit()` 메소드는 제한 할 개수를 지정한다. 한 페이지에 10개씩 보여주고 싶다면, 제한할 개수는 10개가 되고, 건너 뛸 데이터는 `(현재 페이지 - 1) * 제한 할 개수`로 계산할 수 있다.

## Page Number

```js
const posts = await Post.find({}).populate("owner");
const totalCount = posts.length;
let pageCount = totalCount / 10;
const pageNumber = [];

for (let i = 1; i < pageCount + 1; i++) {
  pageNumber.push(i);
}
```

전체 게시글의 개수를 한 페이지당 제한할 게시글의 개수로 나누면 총 페이지 수가 된다. 이때, 프론트엔드 쪽에서 `each` 문을 사용해 `1 2 3`과 같은 페이지 번호 (링크)를 생성하기 위해서, 페이지 번호를 배열에 담는다.

## 전체 코드 예시

```js
const {
  query: { page },
} = request;
const limit = 10;
const skip = (page - 1) * limit;
const posts = await Post.find()
  .populate("owner")
  .sort("-createdAt")
  .skip(skip)
  .limit(limit);

const allPosts = await Post.find({}).populate("owner");
const pageNumber = maekPagination(allPosts.length);
const currentPage = page;

return response.render("home", {
  pageTitle: "Home",
  posts,
  currentPage,
  pageNumber,
});
```
