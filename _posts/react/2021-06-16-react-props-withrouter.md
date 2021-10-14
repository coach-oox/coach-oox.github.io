---
layout: post
title: "React 컴포넌트에서 location, history 등을 사용하기 위한 withRouter 사용법"
category: [react]
tags: [react, withrouter, react-router-dom]
comments: true
---

`withRouter`란 라우트가 아닌 컴포넌트에서 `location`, `history` 등을 `props`로 전달받기 위해서 사용하는 HoC를 의미한다. 다음 코드 예제와 같이 사용한다.

```jsx
import React from "react";
import { withRouter } from "react-router-dom";

const Something = withRouter((props) => {
  /* ... */
});

export default Something();
```

e.g., [React Styled-Component 현재 경로 메뉴 스타일 강조하기](https://dohaelee.github.io/posts/2020-06-05-styled-componenets-withRouter/)
