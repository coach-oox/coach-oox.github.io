---
layout: post
title: "Socket.io 이벤트를 다루는 방법"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, javascript]
comments: true
---

## 이벤트의 동작과 처리

1. 서버와 클라이언트는 이벤트를 듣고 있음.
2. 이벤트 발생시 듣고 있던 서버 / 클라이언트가 반응.

```js
// ioServer는 모든 이벤트를 감시하고 있어야 함
// connection 이벤트에 대해 듣고 있음
// 새로운 연결이 생성되면 새로운 소켓이 생성 됨
ioServer.on("connection", (socket) => {
  // 접속한 소켓을 제외한 모든 클라이언트에 enterUser 이벤트 전송
  socket.broadcast.emit("enterUser");
});
```

위 코드 예제는 `ioServer`가 `on()` 메소드로 `connection` 이벤트에 대해 듣고 있게끔 한다. 또한 `ioServer`는 `connection` 이벤트가 발생하면 `broadcast.emit()` 메소드를 사용해 접속한 대상을 제외한 모든 클라이언트에 `enterUser`라는 이벤트를 발생시키고 있다.

### 참고

- `emit()` : 접속한 대상
- `broadcast.emit()` : 접속한 대상을 제외한 모든 클라이언트

### 이벤트 캐치

```js
// 서버에 연결
const socket = io("/");

// enterUser 이벤트에 대해 듣고 있음
socket.on("enterUser", () => alert("Hello Stranger"));
```

클라이언트 측에서는 `enterUser` 이벤트를 감시하고 있다가, 해당 이벤트가 발생했을 때, 특정 문구를 `alert()`으로 띄워준다.
