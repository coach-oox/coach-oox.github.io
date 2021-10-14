---
layout: post
title: "MongoDB 모델 간의 관계 설정과 1:N 관계 표현"
category: [database, mongodb]
tags: [database, nosql, mongodb, express]
comments: true
---

## 관계 설정

MongoDB는 NoSQL 데이터베이스로 모델끼리의 관계를 직접 설정할 수 없다. 따라서 어떠한 관계를 표현하기 위해서 서로 다른 도큐멘트들이 서로를 참조할 수 있게끔 설정한다.

```javascript
const postSchema = new mongoose.Schema({
  /* ... 생략 ... */
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});
```

위 코드 예제는 게시글 모델에 게시글을 소유한 사람의 `ObjectId`를 저장한다. (`ref`에는 참조할 모델을 작성)

## 1:N 관계의 설정

- `User`와 `Post`는 1:N 관계를 가진다.
- 사용자는 자신이 작성한 게시글의 아이디를 배열로 저장한다.
- `Post`의 객체는 게시글 작성자의 아이디를 저장한다.

### User Model

```javascript
const userSchema = mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  password: { type: String },
  name: { type: String, require: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});
```

### Post Model

```javascript
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});
```

### 사용 예시

#### 새로운 게시글을 생성할 때

```javascript
// 새로운 Post 객체 생성
const post = await Post.create({
  title,
  description,
  owner: _id,
});

// 작성자 객체 가져옴
const user = await User.findById({ _id });
// 작성자 객체의 게시글 배열에 새로 생성한 게시글의 아이디 추가
user.posts.push(post._id);
user.save();
```

게시글을 생성할 때는 게시글 객체가 가지는 `owner` 아이디가 추가되어야 하며, 해당 아이디를 가진 사용자의 `posts` 배열에 생성된 게시글의 아이디도 추가되어야 한다.

#### 배열의 정보를 객체로 가져오기

```javascript
export async function seeUser(request, response) {
  const { id } = request.params;
  // 이제 user.posts에 해당 게시글 객체들이 치환되어 있다.
  const user = await User.findById(id).populate("posts");

  if (!user) {
    return response.status(404).render("404");
  }

  return response.render("users/profile", {
    pageTitle: "My Profile",
    user,
  });
}
```
