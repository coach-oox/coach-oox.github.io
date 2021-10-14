---
layout: post
title: "Socket.io 이벤트와 객체를 하나의 파일로 관리 · 공유하기"
categories: [node, socket-io]
tags: [node, socket-io, express, websocket, javascript]
comments: true
---

## 이벤트를 하나의 객체로 관리하기

```js
// src/events.js
const events = {
  enterUser: "enterUser",
  logoutUser: "logoutUser",
};

export default events;
```

Socket.io의 이벤트를 한 번에 관리하기 위해서 위 코드 예제와 같이 `events.js` 파일을 만들고, 파일 내부에 객체를 만들어 `export` 한다. 이렇게 하면 이벤트 컨트롤러를 작성하는 부분과 이벤트를 감시하는 부분 모두 이벤트 이름을 하드 코딩 하지않고 객체로 공유할 수 있다.

### Backend

```js
// src/socketController.js
import events from "./events";

function socketController(socket) {
  socket.on(events.enterUser, ({ nickname }) => {
    socket.enterUser = nickname;
    console.log(`${nickname} is logged in now.`);
  });
}

export default socketController;
```

백엔드에서는 이 파일을 그냥 사용할 수 있기 때문에 `import` 후 `events` 객체에 접근해 사용할 수 있다.

### Frontend

객체 파일은 백엔드 쪽에 존재하기 때문에 프론트엔드에서 그냥 `import` 할 수가 없다.

```js
// src/server.js
import events from "./events";

app.get("/", (reqeust, response) =>
  response.render("home", { events: JSON.stringify(events) })
);
```

백엔드에 존재하는 이 파일을 공유하기 위해서, 먼저 랜더링할 때 인자로 넘겨준다.

<p class="codepen" data-height="150" data-theme-id="dark" data-default-tab="html" data-slug-hash="MWmBJjG" data-user="dohaelee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dohaelee/pen/MWmBJjG">
  </a> by Dohae Lee (<a href="https://codepen.io/dohaelee">@dohaelee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

다음으로는 백엔드에서 넘겨준 `events` 객체에 어디서든 접근할 수 있게끔, View 파일 (Pug)에서 `window`에 Global 변수로 만들어준다.

```js
// src/frontend/js/login.js
function login(nickname) {
  window.socket = io("/");
  window.socket.emit(window.events.enterUser, { enterUser });
}
```

이제 프론트엔드 자바스크립트에서도 `window.events` 객체에 접근할 수 있다. (`socket` 역시 다른 곳에서도 접근할 수 있도록 `window`에 Global 객체로 생성하는 것이 좋다.)
