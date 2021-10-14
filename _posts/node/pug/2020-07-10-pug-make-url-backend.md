---
layout: post
title: "Pug 긴 URL 줄이기 (Redirection)"
category: [node, pug, express]
tags: [node, pug, express]
comments: true
---

## 긴 URL의 문제점

```pug
a(href="https://github.com/login/oauth/authorize?client_id=aasdffsafasdfasfsafsafsadf&allow_signup=false&scope=read:user user:email") GitHub
```

위 코드는 GitHub 로그인 기능 구현을 위해 필요한 URL 링크를 생성하는 프론트엔드 코드이다. 예와 같이 URL이 길고 복잡하며, 파라미터를 구분하거나 수정하는 것이 어렵다.

## 새로운 경로 생성

문제를 해결하기 위해서는 다음과 같은 과정을 거친다.

1. URL을 생성하고 Rediretion 해줄 새로운 경로를 만든다.
2. 해당 경로의 컨트롤러에서 URL을 생성하고 조합하여 Redirection 한다.
3. 프론트엔드에는 새로운 경로만 작성한다.

```javascript
userRouter.get("/github/login", githubLogin);
```

첫 번째로 해당 기능을 담당할 새로운 경로를 생성한다.

```javascript
export function githubLogin(request, response) {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: "aasdffsafasdfasfsafsafsadf",
    allow_signup: false,
    scope: "read:user user:email",
  };

  const params = new URLSearchParams(config).toString();
  const fianlUrl = `${baseUrl}?${params}`;

  return response.redirect(fianlUrl);
}
```

해당 라우트를 담당하는 컨트롤러에서 URL을 생성한다. 이때 필요한 파라미터는 객체로 작성하여 URL의 쿼리 파라미터들을 읽거나 수정할 때 사용되는 [URLSearchParams()](/posts/2020-05-10-javascript-url-search-params/)를 사용할 수 있다.

```pug
a(href="/users/github/login") GitHub
```

마지막으로 프론트엔드쪽에는 생성한 라우트 경로를 링크한다.
