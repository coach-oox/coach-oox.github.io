---
layout: post
title: "React Emotion 글로벌 공통 스타일 적용하기"
category: [react, css-in-js]
tags: [react, error, emotion, css-in-js]
comments: true
---

먼저 글로벌로 적용하려는 스타일을 작성한다.

```tsx
import { css } from "@emotion/react";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default reset;
```

`App()` 컴포넌트에서 작성한 스타일 파일과 (예시에서는 `Reset.tsx`) `@emotion/react`의 `Global` 컴포넌트를 `import`한다.

```tsx
import React from "react";
import { Global } from "@emotion/react";
import AppPresenter from "./AppPresenter";
import reset from "../Styles/Reset";

const AppContainer = (): JSX.Element => (
  <div>
    <Global styles={reset} />
    <AppPresenter />
  </div>
);

export default AppContainer;
```

적용할 때는 `Global` 컴포넌트의 `styles`에 작성한 스타일을 지정하면 되고, 위 코드 예시와 같이 공통 스타일을 적용하려는 컴포넌트들을 아래에 두면된다.
