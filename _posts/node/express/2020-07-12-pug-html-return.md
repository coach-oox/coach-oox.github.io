---
layout: post
title: "Express Pug 기본 사용법 + Failed to lookup view 에러 해결 방법"
category: [node, express, pug]
tags: [node, pug, express, error]
comments: true
---

## Express에서 특정 경로에 HTML 리턴

```javascript
function home(request, response) {
  return response.send("<h1>Home</h1>");
}
```

컨트롤러 부분의 `response`에 실어서 보냄. 하지만 이렇게 보내는 방식으로는 장문의 HTML을 전부 작성하기 어렵고, 복잡함.

## Pug 사용

Pug는 Node.js 템플릿 엔진으로, HTML 문서를 보다 간편하게 (중복을 최소화하고) 작성하게 돕는다.

```javascript
app.set("view engine", pug);
```

설치 후 `app.set()` 메소드를 사용해 View Engine을 Pug로 지정하고, `/src` 하위에 `/views` 디렉토리를 생성한다.

```pug
doctype html
html (lang="ko")
    head
        title Site
    body
        h1 Site!
        footer &copy; 2021 Site.
```

```javascript
function home(request, response) {
  return response.render("home");
}
```

작성한 Pug 파일을 HTML로 변환해 리턴하기 위해서는 컨트롤러 부분에서 `response.render()` 메소드를 사용한다.

### /views 디렉토리 에러

```bash
Error: Failed to lookup view "home" in views directory "/Users/dohaelee/Documents/Repository/project/views"
```

위 에러는 `/src/views`가 아니라 `/project/views` 경로를 참조하고 있기 때문에 발생한다.

```javascript
app.set("views", process.cwd() + "/src/views");
```

이는 Exporess가 기본적으로 Pug (View Engine의) 파일들을 찾을 때 `process.cwd() + /views` 경로를 참조하며, Node.js 환경에서 `process.cwd()` (Current Working Directory)는 `package.json` 파일이 위치한 루트 폴더이기 때문이다.

```javascript
import { join } from "path";
app.set("views", join(__dirname, "views"));
```

또는 해당 경로를 바꾸기 위해서는 위와 같이 `app.set()`을 사용한다.
