---
layout: post
title: "React Styled-Component 현재 경로 메뉴 스타일 강조하기"
categories: [react, css-in-js]
tags: [react, styled-components, css-in-js]
comments: true
---

## withRouter

현재 경로는 라우터에서 사용하는 객체인 `location` 내부에 `pathname`으로 알 수 있다. 이 `location` 객체는 라우트가 아닌 컴포넌트에서 사용할 수 없는데, 이를 가능하게 만들기 위해서 `withRouter`라는 HoC를 사용한다.

## 현재 경로 메뉴 강조하기

```jsx
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${(props) => (props.current ? "#f9ca24" : "transparent")};
  color: ${(props) => (props.current ? "white" : "")};
`;

// props 객체를 구조 분해해서 사용할 pathname 값만 가져옴
export default withRouter(({ location: { pathname } }) => (
  <header>
    <Ul>
      {/* props.current에 저장됨 */}
      <Li current={pathname === "/"}>
        <Link to="/">Home</Link>
      </Li>
      <Li current={pathname === "/about"}>
        <Link to="/">About</Link>
      </Li>
      <Li current={pathname === "/contact"}>
        <Link to="/">Contact</Link>
      </Li>
    </Ul>
  </header>
));
```
