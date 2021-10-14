---
layout: post
title: "CRACO를 사용한 Emotion 사용 설정 방법 (@jsx 선언 제거)"
category: [css-in-js]
tags: [css-in-js, emotion, craco, react]
comments: true
---

CRA로 세팅한 리액트 프로젝트에서 Emotion (`@emotion/react`)을 사용하기 위해서는 다음과 같이 매번 `@jsx` 관련 선언을 명시하는 과정이 필요하다. 이 과정을 생략하기 위해서는 Babel 설정이 필요한데, CRA는 Babel의 사용자 설정을 막아두었기 때문에 `eject`를 사용해야 이 부분을 설정할 수 있다. (한 번 `eject`한 프로젝트는 이전 상태로 되돌아 갈 수 없다.)

Create React App Configuration Override의 약자인 [CRACO](https://github.com/gsoft-inc/craco)를 사용하면 `eject` 하지 않고도 리액트 애플리케이션 설정을 변경할 수 있다.

```bash
yarn add @craco/craco
```

`package.json`을 다음과 같이 수정한다.

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build"
    /* ... */
  }
}
```

이제 Emotion Babel 설정을 위한 라이브러리를 설치한다.

```bash
yarn add @emotion/babel-preset-css-prop
```

마지막으로 `craco.config.js` 파일을 생성하고 다음과 같이 Babel의 Preset을 지정한다.

```js
module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"],
  },
};
```

만약 타입스크립트를 사용학 있다면, `tsconfig.json` 파일에 다음 항목을 추가한다.

```json
{
  "jsxImportSource": "@emotion/react"
}
```
