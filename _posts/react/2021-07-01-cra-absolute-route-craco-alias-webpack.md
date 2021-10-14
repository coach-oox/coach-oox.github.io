---
layout: post
title: "React 절대 경로 (또는 별칭) 사용하는 2가지 방법 (CRACO, WebPack)"
category: [react]
tags: [craco, webpack, react]
comments: true
---

## CRA 프로젝트

먼저 CRA로 세팅한 경우에는 비교적 간단하게 해결할 수 있다. 자바스크립트 환경이라면 `jsconfig.json` 파일을, 타입스크립트 환경이라면 `tsconfig.json` 파일을 만들고 다음 코드를 추가한다.

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "includes": ["src"]
}
```

### CRACO를 사용한 별칭 사용법

만약 절대 경로가 아니라 별칭 (Alias)을 사용하고 싶다면 WebPack 설정을 커스터마이징 하면 되는데, `eject` 하거나 (별로 추천하지 않음) 다음 라이브러리를 설치해 WebPack 설정을 오버라이드하면 된다. 이때 `craco`를 선호하지 않는다면 [customize-cra](https://github.com/arackaf/customize-cra), [react-app-rewired](https://www.npmjs.com/package/react-app-rewired), [react-app-rewire-alias](https://www.npmjs.com/package/react-app-rewire-alias)를 고려해 볼 수도 있다. [NPM Trends](https://www.npmtrends.com/craco-alias-vs-react-app-rewire-alias)를 기준으로 보자면, 수치상 거의 비슷하기 때문에 뭘 쓰던 상관은 없을 것 같은데, 내 경우 `craco` 라인이 좀 더 사용하는 데 익숙하고 가벼워서 선호한다.

```bash
yarn add @craco/craco craco-alias --dev
```

`craco.config.js` 파일을 만들고 다음 항목을 추가한다.

```js
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        jsConfigPath: "jsconfig.paths.json",
      },
    },
  ],
};
```

다음으로 `jsconfig.json` 파일을 만들어 다음 항목을 추가한다.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

이렇게 하면 `../../components/buttons/Submit`과 같이 써야 했던 경로를 좀 더 직관적으로 `@components/buttons/Submit`과 같이 사용할 수 있다.

## CRA 프로젝트가 아닌 경우

WebPack을 사용한다는 가정 하에, `webpack.config.js` 파일에 다음과 같은 항목을 추가한다.

```js
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@apis": path.reolsve(__dirname, "src/apis"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
```

에디터에서 경로 추적 기능을 사용하기 위해서 `jsconfig.json` 또는 `tsconfig.json` 파일에 다음과 같은 항목을 추가한다. (`alias`가 어디를 가리키는지를 명시한다.)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
