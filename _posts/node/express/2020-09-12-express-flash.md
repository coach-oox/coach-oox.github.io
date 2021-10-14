---
layout: post
title: "Express-Flash를 사용해 플래시 메시지 띄우기"
category: [node, express]
tags: [node, express, express-flash]
comments: true
---

```bash
npm install express-flash
```

휘발성 메시지 (플래시 메시지)를 관리할 수 있는 미들웨어.

> Flash is an extension of connect-flash with the ability to define a flash message and render it without redirecting the request.

## 사용법 예시

```javascript
import flash from "express-flash";
app.use(flash());
```

```javascript
request.flash("error", "Not authorized");
```

`flash` 메소드의 첫 번째 인자는 태그 (프로퍼티 이름)이며, 두 번째 인자는 메시지이다. 이렇게 생성된 플래시 메시지는 `response.locals`와 마찬가지로 프론트엔드에서 사용할 수 있으며, `messages.error`로 접근한다.

```pug
doctype html
html(lang="ko")
    head
        title Site
    body
        if messages.error
            span= messages.error
        include ./header
        main
            block content
        include ./footer
    block scripts
```
