---
layout: post
title: "Socket.io 사용자 로그인과 로그아웃 구현 예제"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, javascript]
comments: true
---

## Login

```js
function loadNickname() {
  const nickname = JSON.parse(localStorage.getItem(LS_NICKNAME));

  if (nickname) {
    loginUser(nickname);
  } else {
    setNickname();
  }
}
```

페이지가 로드될 때, `localStorage`에 저장된 닉네임이 있는지 확인한다. 저장된 닉네임이 있다면 로그인 처리를 하고, 없다면 닉네임을 입력받는다.

### 저장된 닉네임이 없는 경우

```js
function setNickname() {
  guest.classList.add(CL_SHOWING);
  input.addEventListener("keyup", saveNickname);
}

function saveNickname(event) {
  if (event.keyCode === 13) {
    localStorage.setItem(LS_NICKNAME, JSON.stringify(input.value));
    location.reload();
  }
}
```

`input`에 `enter`가 입력될 경우 (또는 `form`의 `submit`으로 구성) `saveNickname()` 함수를 호출해 해당 닉네임을 `localStorage`에 저장하고 페이지를 새로고침 한다. 이때 새로고침한 페이지는 다시 `loadNickname()` 함수를 호출한다.

### 저장된 닉네임이 있는 경우

```js
function loginUser(nickname) {
  game.classList.add(CL_SHOWING);
  login(nickname);
}

function login(nickname) {
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  initSocket(socket);
}
```

`enterGame()`은 `login()` 함수를 호출한다. `login()` 함수는 서버에 연결 (새로운 소켓 생성)한 뒤 `setNickname` 이벤트를 발생시키고, `initSocket()` 함수로 소켓 정보를 갱신한다. (참고 : [소켓 관련 함수를 하나의 파일로 관리하기](/posts/2020-05-09-group-socket/))

```js
function socketController(socket) {
  // broadcast shortcut
  function broadcast(event, data) {
    socket.broadcast.emit(event, data);
  }

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });
}
```

백엔드에서는 `setNickname` 이벤트를 듣고 있다가, 해당 이벤트가 발생하면 닉네임을 받아 소켓에 저장하고, 새로운 유저가 들어왔다는 `newUser` 알림 이벤트를 브로드캐스트한다.

```js
export function initSocket(aSocket) {
  updateSocket(aSocket);
  aSocket.on(window.events.newUser, enterUser);
  aSocket.on(window.events.disconnected, leaveUser);
  aSocket.on(window.events.newMessage, newMessage);
}
```

프론트엔드에서 위의 `newUser` 이벤트를 듣고 있기 때문에, 해당 이벤트 발생시 `enterUser` 함수가 실행된다.

```js
const body = document.querySelector("body");

export function flashMessage(text, color) {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
}

export function enterUser({ nickname }) {
  flashMessage(`${nickname} is logged in now.`, "rgb(0, 122, 255)");
}

export function leaveUser({ nickname }) {
  flashMessage(`${nickname} leave now.`, "rgb(255, 122, 0)");
}
```

`enterUser`, `leaveUser` 함수는 위와 같다.

## Logout

```js
import events from "./events";

function socketController(socket) {
  function broadcast(event, data) {
    socket.broadcast.emit(event, data);
  }

  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });
}

export default socketController;
```

백엔드는 소켓이 `disconnecte` 되는 이벤트를 듣고 있다가, 해당 이벤트가 발생하면 `disconnected` 이벤트를 브로드캐스트 시킨다.

```js
export function initSocket(aSocket) {
  updateSocket(aSocket);
  aSocket.on(window.events.newUser, enterUser);
  aSocket.on(window.events.disconnected, leaveUser);
  aSocket.on(window.events.newMessage, newMessage);
}
```

마찬가지로 해당 이벤트는 프론트엔드에서 듣고 있으며, 해당 이벤트가 발생하면 `leaveUser` 함수를 실행시킨다.
