---
layout: post
title: "Mongoose 콜백 함수의 이해"
category: [node, express, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

```javascript
import Post from "../models/Post";

export function home(request, response) {
  Post.find({}, (error, posts) => {
    console.log("error: ", error);
    console.log("posts: ", posts);
  });

  return response.render("home", { posts });
}
```

위 코드는 `Post` 스키마를 등록한 다음 컨트롤러에서 사용하기 위한 부분으로, 어떤 데이터베이스 작업을 거친 뒤, 해당 결과를 랜더링 하고자 하는 예시이다. 이 코드에서 ㄴ의도한바는, 데이터베이스에서 모든 게시글들을 검색하고, 해당 게시글을 랜더링해서 화면에 보여주는 것이다. 하지만 `Post.find()`의 콜백 함수 부분보다 랜더링 되는 부분이 먼저 실행되어 정상적으로 작동하지 않는다.

```javascript
import Post from "../models/Post";

export function home(request, response) {
  Post.find({}, (error, posts) => {
    return response.render("home", { pageTitle: "Home", posts });
  });
}
```

즉, 콜백 함수 내부에서 랜더링을 해야, 작업이 끝난 뒤 랜더링하는 올바른 결과를 도출할 수 있다.

## async · await

```javascript
import Post from "../models/Post";

export async function home(request, response) {
  const posts = await Post.find({});

  return response.render("home", { pageTitle: "Home", posts });
}
```

위 예제와 같이 `async`와 `await`을 사용하면 콜백 함수와 동일하게 작동한다. 하지만 이 경우 콜백 함수와 같이 `error` 인자를 사용할 수 없기 때문에 다음 코드 예시와 같이 `try ... catch`문을 사용해 에러를 핸들링한다.

```javascript
import Post from "../models/Post";

export async function home(request, response) {
  try {
    const posts = await Post.find({});
    return response.render("home", { pageTitle: "Home", posts });
  } catch {
    return response.render("error");
  }
}
```
