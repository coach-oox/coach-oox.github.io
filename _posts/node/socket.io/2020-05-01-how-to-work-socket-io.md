---
layout: post
title: "Socket.io 동작 이해"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, http, javascript]
comments: true
---

Socket.io를 사용한다는 것은 Express 서버 위에 Socket.io (WebSocket) 서버를 올린다는 의미이다. 전통적인 (?) 방식에서, 2개의 서버가 같은 포트에서 동작하게 할 수 없지만, WebSocket과 HTTP는 같은 공생이 가능하다.

## Express 서버 위에 Socket.io 서버를 올리는 방법

```js
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();

function listenPort() {
  console.log(`🚀 Server running now. http://localhost:${PORT}`);
}

const server = app.listen(PORT, listenPort);
const ioServer = socketIO(server);
ioServer.on("connection", () => console.log("HEY!"));
```

`server` 변수에 Express 서버를 담고, `socketIO`에 알려준다. (브라우저 콘솔창에서 `io("/")` 입력해서 연결을 확인할 수 있다.)

## Socket.io의 특징 이해하기

Socket.io는 다음 두 가지 핵심적인 특징을 가진다.

### 클라이언트이자 서버

Socket.io는 클라이언트와 서버 둘 다 될 수 있다. (서버 라이브러리와 클라이언트 라이브러리를 모두 가지고 있음)
즉, 백엔드에도 Socket.io가 필요하고, 프론트엔드에도 Socket.io가 필요하며, 이 둘은 서로 커뮤니케이션이 가능하다.

### 라우터와 이벤트

HTTP 서버에서는 `POST`, `GET` 등의 요청을 처리하며, 이들 각각은 라우터가 있다. 하지만 WebSocket은 페이지 (경로)가 없고, 연결만 있다. 즉, 연결에서 발생하는 이벤트들을 감지하고 있다가, 특정 이벤트가 발생하면 컨트롤하는 방식이다. (서버는, 클라이언트, 유저는 이벤트를 보낼 수 있고, 받을 수도 있다.)
