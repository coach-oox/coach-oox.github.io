---
layout: post
title: "Webpack 기본 사용법"
category: [webpack]
tags: [webpack, javascript]
comments: true
---

## 설치

```bash
npm install webpack webpack-cli -D
```

## 속성

- `entry`
- `output`
- `module`
- `plugin`

### entry

`entry` 속성에는 웹팩이 모듈 번들링을 하기 위한 진입점이자 변환하고자 하는 자바스크립트 파일의 경로를 작성한다.

```js
module.exports = {
  entry: "src/index.js",
};
```

위 코드 예시와 같은 `entry` 속성을 정의하면 `src` 폴더에 위치한 `index.js` 파일을 진입점으로 빌드하게 된다.

```js
module.exports = {
  entry: {
    home: "src/Home.js",
    about: "src/About.js",
  },
};
```

여러 개의 진입점을 정의해야 하는 경우 (특정 페이지에 접근하면 → 서버에서 어떤 처리 후 페이지를 보여주는 멀티 페이지 애플리케이션의 경우) 위 코드 예시와 같이 `entry` 속성의 값을 객체로 표현하여 진입점을 분리할 수 있다.

### output

`output` 속성에는 빌드된 결과물을 저장 할 파일의 경로를 작성한다.

```js
module.exports = {
  output: {
    filename: "output.js",
  },
};
```

`output` 속성은 객체로 작성되어야 하며, 위와 같이 `filename`만 정의했을 경우, 해당 이름을 가진 파일에 빌드 결과가 저장된다.

```js
module.exports = {
  output: {
    filename: "[name].js",
  },
};
```

만약 빌드되는 파일을 오리지널 파일의 이름과 동일하게 지정하고 싶다면, 위와 같이 `[name]`를 사용한다. 이외에도 `filename`에 사용할 수 있는 옵션의 종류는 다음과 같다.

- `[id]` : 모듈의 아이디
- `[hash]` : 고유 해시 값
- `[chunkhash]` : 모듈 별로 할당된 해시 값

```js
module.exports = {
  output: {
    filename: "output.js",
    path: path.resolve(__dirname, "./build"),
  },
};
```

만약 별도의 폴더에 결과물을 저장하고 싶다면 `path` 속성을 지정하면 된다.

### path 다루기

```javascript
output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"),
}
```

`filename`은 엔트리 포인트가 되는 `main.js` 파일이 저장되는 이름을 의미하고, `path`는 결과물들을 저장할 디렉토리를 의미한다. 즉, 위와 같이 경로가 지정된 상태에서 빌드하면, `assets/js` 위치에 모든 파일들이 위치하게 된다.

```javascript
output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets"),
}
```

따라서 위와 같이 `js` 경로를 지우면, `assets/` 하위에 모든 파일이 위치하게 된다. (예 : `assets/main.js`, `assets/styles.css`)

```javascript
output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"),
},
plugins: [new miniCssExtractPlugin({ filename: "css/style.css" })]
```

이때 `main.js` 파일을 `js` 경로에 하위에 저장하기 위해서는 위와 같이 `filename`에 상위 경로를 지정할 수 있으며, 동일한 방식으로 `css/style.css`와 같이 다른 디렉토리에 파일들을 저장할 수 있다.

### module

`module` 속성은 자바스크립트 파일을 제외한 HTML, CSS 파일 등을 웹팩이 인식할 수 있게끔 추가하기 위한 속성으로, 원하는 조건을 `rules` 속성에 정의한다.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};
```

여러 개의 조건을 명시하고 싶은 경우 `rules` 배열 내에 별도의 객체로 표현하면 된다.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
};
```

하나의 조건에 여러 개의 `loader`를 사용하는 경우, `loader`는 명시된 순서에 따라 오른쪽에서 왼쪽으로 실행된다는 점에 주의해야 한다.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
};
```

즉, 위 코드 예시는 SASS (SCSS) 파일을 변환한 다음, 변환된 CSS 파일에 `css-loader`를 적용하게 된다.

### plugin

`plugin` 속성에는 웹팩에 적용할 추가 (확장) 기능을 지정한다.

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [new CleanWebpackPlugin()],
};
```

## 사용 예시

```javascript
const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js",
  mode: "development",
  watch: true, // 자동으로 변화 감시
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"),
    clean: true, // 결과물을 새로 생성할 때 기존의 폴더를 삭제함
  },
};
```

`webpack.config.js` 파일 생성하고 환경설정 객체를 `export`한다.
