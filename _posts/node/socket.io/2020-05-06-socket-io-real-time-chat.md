---
layout: post
title: "Socket.io 실시간 채팅 구현 예제 #1"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, javascript]
comments: true
---

설명은 주석으로 대신함.

## Server

```js
// 서버 연결시 새로운 소켓 생성
// 서버는 모든 이벤트에 대해 열려 있음
ioServer.on("connection", (socket) => {
  // newMessage 이벤트에 대해 듣고 있음
  socket.on("newMessage", ({ message }) => {
    // 접속자를 제외한 모든 클라이언트에 messageNotication 이벤트를 발생시킴
    socket.broadcast.emit("messageNotification", {
      message,
      // socket 객체에 설정된 nickname 또는 (없다면) Anonymous
      nickname: socket.nickname || "Anonymous",
    });
  });

  // enterUser 이벤트에 대해 듣고 있음
  socket.on("enterUser", ({ nickname }) => {
    // socket 객체에 nickname 프로퍼티를 생성
    socket.nickname = nickname;
  });
});
```

## Client

```js
const socket = io("/");

// 브라우저 콘솔에서 sendMessage 호출해서 메시지를 전송할 수 있음
// 해당 함수는 접속한 소켓에 대해 newMessage 이벤트를 발생시킴
function sendMessage(message) {
  socket.emit("newMessage", { message });
}

// 브라우저 콘솔에서 enterUser 호출해서 닉네임 설정할 수 있음
// 해당 함수는 접속한 소켓에 대해 enterUser 이벤트를 발생시킴
function setNickname(nickname) {
  socket.emit("enterUser", { nickname });
}

// messageNotification 이벤트에 대해 듣고 있음
socket.on("messageNotification", ({ message, nickname }) => {
  console.log(`${nickname} : ${message}`);
});
```
