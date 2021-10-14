---
layout: post
title: "React Routes 사이에 Props를 공유하는 방법"
categories: [react]
tags: [react, javascript]
comments: true
---

```jsx
import React from "react";

function About(props) {
  console.log(props);
  return <h3>About this page: I build it!</h3>;
}

export default About;
```

위 코드 예제는 `/about` 경로로 이동했을 때 보여지는 `About` 컴포넌트이다. 인자로 `props`를 받고 있고, `console.log()`로 확인하고 있다. 이때 라우팅을 한 쪽에서는 아무것도 보내지 않고 있지만, `react-route`에서 자동으로 넣는 객체이다. (라우터 안에 모든 라우트들은 자동으로 `props`를 가진다.)

```jsx
function Navigation() {
  return (
    <li>
      <Link
        to={/* Liquid Error 때문에 주석 처리 {
          pathname: "/about",
          state: {
            fromNavigation: true,
          },
        }*/ }
      >
        About
      </Link>
    </li>
  );
}

export default Navigation;
```

`Link to={}` 부분에 객체로 정보를 보낼 수 있다.
