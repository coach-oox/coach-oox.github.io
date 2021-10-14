---
layout: post
title: "React props.history.push('/')와 window.location.replace('/') 차이점"
category: [react]
tags: [react, router]
comments: true
---

`props.history.push('/')`는 새로운 HTTP 요청을 생성하지 않는다. 반면에 `window.location.replace()`는 새로운 요청을 생성한다. i.g., `window.location.replace()` 또는 `window.location.href`을 사용할 경우 완전히 새로고침되고, 클라이언트 측에 상태는 초기화 된다.

리액트에서 사용자를 다른 페이지로 이동시키기 위해서 일반적으로 `props.history.push()`를 사용한다. 이 `history`에는 사용자가 여태까지 타고온 경로가 스택처럼 다 쌓여이게 되는데, 여기다 새로운 경로를 `push()`함으로써 최신 경로를 원하는 위치로 지정하게 된다. `history.replace()`의 경우, 새로운 `history`를 생성하는 것이 아니라 현재 `history`의 Entry Point를 변경하는 원리로 페이지 이동을 구현한다.

> When true, clicking the link will replace the current entry in the history stack instead of adding a new one. - [reactrouter.com](https://reactrouter.com/web/api/Link/replace-bool)
