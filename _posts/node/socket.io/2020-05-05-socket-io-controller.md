---
layout: post
title: "Socket.io 이벤트 컨트롤러 분리하기"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, javascript]
comments: true
---

## Server

```js
const PORT = 4000;
const app = express();

const server = app.listen(PORT, listenPort);
const ioServer = socketIO(server);

ioServer.on("connection", (socket) => {
  // 소켓의 정보가 유실되지 않도록 인자로 전달
  socketController(socket);
});
```

`ioServer`는 모든 연결에 대해 (모든 소켓에 대해) 듣고 있다. 이때 위와 같이 내부에서 모든 이벤트를 관리하는 것이 아니라 컨트롤러를 따로 분리할 수 있다.

```js
// Socket.io 이벤트를 한 번에 관리할 외부 객체
import events from "./events";

function socketController(socket) {
  // enterUser 이벤트를 듣고 있음
  // 이벤트 발생 => 닉네임을 socket 객체에 추가
  socket.on(events.enterUser, ({ nickname }) => {
    socket.nickname = nickname;
    console.log(`${nickname} is logged in now.`);
  });
}

export default socketController;
```

분리한 `socketController()` 내부에 모든 이벤트 컨트롤러를 작성한다.

## Client

```js
function login(nickname) {
  // 어디서든 접근할 수 있도록 Window의 Global 객체로 소켓 생성 (서버에 연결)
  window.socket = io("/");

  // 접속한 소켓에 enterUser 이벤트 발생시킴
  window.socket.emit("enterUser", { nickname });
}
```
