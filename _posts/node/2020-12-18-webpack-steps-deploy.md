---
layout: post
title: "Babel-CLI · Webpack을 사용해 Frontend · Backend 빌드하기"
category: [node, webpack]
tags: [babel, webpack, development]
comments: true
---

## Backend

### babel-cli를 사용해 빌드하기

```bash
npm install @babel/core @babel/cli -D
```

`nodemon`을 사용해서 `babel-node`를 실행. `babel-node`는 서비스는 되는 곳이 아니라 개발 환경에서 사용한다. `babel-node`는 퍼포먼스 문제가 (속도가 느림) 있는데, 따라서 매번 `babel-node`를 사용하는 게 아니라 아예 `init.js` (또는 `server.js`, `app.js` 등을) `babel-cli`를 사용해 CommonJS로 빌드해 주는 것이 좋다.

```json
"scripts": {
    "build": "babel src -d build", // src 폴더를 빌드해서 디렉토리 /build에 저장
    "start": "node build/init.js", // 빌드된 파일은 babel 없이도 실행 가능한 코드이므로
    "dev": "nodemon",
    "assets": "webpack --config webpack.config.js"
}
```

즉, `npm start` (`node filename`) 명령어로 실행될 수 있는 서버는 `node.js` 환경 어디서나 동작할 수 있음을 의미한다.

### 문제점

빌드할 필요없는 프론트엔드 코드까지 통째로 컴파일 되어버린다. (e.g., `client`)

## Frontend

### WebPack을 사용해 빌드하기

WebPack에는 2가지 모드 (`development`, `production`)가 있다. `production` 모드는 코드 파일이 더 작게 압축되어 있다.

```json
"scripts": {
    "build:server": "babel src -d build",
    "build:assets": "webpack --mode=production",
    "start": "node build/init.js",
    "dev": "nodemon",
    "assets": "webpack --config webpack.config.js"
}
```

### 문제점

`production` 모드에서도 `watch`가 설정되어 있다.

### 해결방법

```js
module.exports = {
  entry: {
    main: `src/main.js`,
  },
  // mode: "development",
  // watch: true,
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
};
```

```json
"scripts": {
    "dev:server": "nodemon",
    "dev:assets": "webpack --mode=development -w",
    "build:server": "babel src -d build",
    "build:assets": "webpack --mode=production",
    "start": "node build/init.js",
}
```

`webpack.config.js`에서 지정한 `watch`를 삭제하고, `dev:assets`와 `build:assets`를 별개의 스크립트로 등록해 지정한다.
