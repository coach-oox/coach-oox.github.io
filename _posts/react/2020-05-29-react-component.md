---
layout: post
title: "React 컴포넌트 (Component)란?"
categories: [react]
tags: [react, javascript]
comments: true
---

HTML을 반환하는 함수.

```jsx
function App() {
  return <div className="App">Hello</div>;
}

export default App;
```

## 예시

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

컴포넌트를 사용할 때는 위 코드 예제와 같이 `<App />`과 같은 모양으로 사용한다. 이 문법은 리액트에서만 사용되는 JSX 문법이다.

## 컴포넌트를 만드는 방법

컴포넌트 이름은 대문자로 시작해야 한다.

```jsx
import React from "react";

function Greeting() {
  return <h1>Hello World!</h1>;
}

export default Greeting;
```

```jsx
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Greeting from "./Greeting";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Greeting />
  </React.StrictMode>,
  document.getElementById("root")
);
```

## 컴포넌트에 props 전달하는 방법

```jsx
function Greeting({ name }) {
  //     const {name} = props;
  return <h1>Hello, {name}</h1>;
}

function App() {
  return (
    <div className="App">
      {/* name 프로퍼티에 값을 담아 보낸다. */}
      <Greeting name="John" />
    </div>
  );
}

export default App;
```
