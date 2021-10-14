---
layout: post
title: "Socket.io 소켓 관련 함수를 하나의 파일로 관리하기"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, javascript]
comments: true
---

```js
// src/frontend/login.js
function login(nickname) {
  // 서버에 연결되는 시점 => 소켓이 생성되는 시점
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  initSocket(socket);
}
```

```js
// src/frontend/socket.js
import { enterUser, leaveUser } from "./notifications";
import { newMessage } from "./chat";

let socket = null;

// socket 객체가 필요한 위치에서 호출하면 socket을 리턴
export function getSocket() {
  return socket;
}

export function updateSocket(aSocket) {
  socket = aSocket;
}

// 호출되는 시점은 새로운 사용자가 로그인 했을 때
export function initSocket(aSocket) {
  updateSocket(aSocket);
  aSocket.on(window.events.newUser, enterUser);
  aSocket.on(window.events.disconnected, leaveUser);
  aSocket.on(window.events.newMessage, newMessage);
}
```

프론트엔드 자바스크립트 파일 어디서든 접근할 수 있도록, `socket`에 관련된 함수를 한 곳에서 관리한다. `initSocket`은 처음 새로운 사용자가 연결되었을 때 (새로운 소켓이 생성되었을 때) 소켓 정보를 새로운 소켓으로 업데이트하고, 지켜볼 이벤트를 등록한다.

```js
// src/frontend/chat.js
function sendMessage(event) {
  event.preventDefault();

  const input = formMessage.querySelector("input");
  const { value } = input;
  input.value = "";

  // 사용 예시
  getSocket().emit(window.events.sendMessage, { message: value });
  appendMessage(value);
}
```
