---
layout: post
title: "React Routing 기본 이해"
categories: [react]
tags: [react, javascript]
comments: true
---

```bash
npm install react-router-dom
```

```jsx
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

라우팅을 위해서 `react-router-dom`에서 `HashRouter` (또는 `BrowserRouter`), `Route`를 가져온 다음, 위와 같이 `Route`에 경로와 컴포넌트를 작성한다. (참고 : [React HashRouter와 BrowserRouter의 비교](/posts/2020-06-07-hashrouter-browserrouter/)) **이때 `Link`를 사용하는 컴포넌트는 `HashRouter` 안에 위치해야 한다.**

## 링크 생성

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
```
