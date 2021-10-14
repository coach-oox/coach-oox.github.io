---
layout: post
title: "React Styled-Component 글로벌 공통 스타일 지정하기"
categories: [react, css-in-js]
tags: [react, styled-components, css-in-js]
comments: true
---

```bash
npm install styled-reset
```

`reset` 파일 적용을 위해서 `styled-reset`를 설치한다.

```jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    ${reset};

    /* 공통 스타일 지정 */
`;

export default globalStyle;
```

`Components` 폴더에 `GlobalStyle.js` 등 사용할 이름으로 파일을 생성하고, 공통으로 사용할 스타일을 지정한다. 이때 `reset` 파일은 5 라인과 같이 가져와 적용할 수 있다.

```jsx
import React from "react";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
}

export default App;
```

작성한 스타일을 전체 앱에 적용하기 위해서는 `App` 컴포넌트에 `GlobalStyle` 컴포넌트를 추가한다.
