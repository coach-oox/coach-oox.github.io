---
layout: post
title: "Socket.io 실시간 채팅 구현 예제 #2"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, javascript]
comments: true
---

설명은 주석으로 대신함.

## Frontend

```js
// src/frontend/chat.js
import { getSocket } from "./socket";

const chat = document.querySelector(".chat");
const messages = chat.querySelector("ul");
const formMessage = chat.querySelector("form");

export function newMessage({ message, nickname }) {
  appendMessage(message, nickname);
}

// 메시지를 채팅창에 출력
function appendMessage(text, nickname) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  } :</span> ${text}
    `;
  messages.appendChild(li);
}

// 사용자가 메시지와 엔터를 입력한 경우 => 메시지 전송
function sendMessage(event) {
  event.preventDefault();

  const input = formMessage.querySelector("input");
  const { value } = input;
  input.value = "";

  // getSocket() 함수를 호출해 현재 소켓을 가져옴
  // sendMessage 이벤트를 발생시킴
  getSocket().emit(window.events.sendMessage, { message: value });

  // 해당 메시지를 채팅창에 출력
  appendMessage(value);
}

// 메시지를 입력하는 폼
formMessage.addEventListener("submit", sendMessage);
```

## Backend

```js
import events from "./events";

function socketController(socket) {
  function broadcast(event, data) {
    socket.broadcast.emit(event, data);
  }

  socket.on(events.sendMessage, ({ message }) => {
    broadcast(events.newMessage, { message, nickname: socket.nickname });
  });
}

export default socketController;
```

`sendMessage` 이벤트를 확인한 백엔드 (서버)는 `newMessage` 이벤트를 브로드캐스트한다.
