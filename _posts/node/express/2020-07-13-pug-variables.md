---
layout: post
title: "Express 컨트롤러에서 전달한 변수 Pug 파일에서 사용하기"
category: [node, express, pug]
tags: [node, pug, express]
comments: true
---

```pug
doctype html
html(lang="ko")
    head
        title #{title} | Site
    body
        block content
        include ./footer.pug
```

```javascript
function home(request, response) {
  const title = "Hello World!";
  return response.render("home", { title });
}
```

위와 같이 각각의 페이지가 랜더링 될 때 전달받은 변수를 사용할 수 있다. 랜더링은 컨트롤러가 담당하므로, 컨트롤러가 랜더링을 할 때 객체로 변수를 전달한다.

```pug
doctype html
html(lang="ko")
    head
        title #{title} | Site
    body
        header
            h1= title
        main
            block content
        include ./footer.pug
```

라인 4와 같이 전달 받은 변수는 라인 7과 같이 재사용할 수 있다.
