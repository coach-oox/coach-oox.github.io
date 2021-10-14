---
layout: post
title: "타입스크립트를 사용하기 위한 WebPack + ESLint 설정 방법"
category: [webpack, typescript, eslint]
tags: [typescript, webpack, eslint, prettier]
comments: true
---

우선 다음과 같이 프로젝트를 세팅하고 필요한 의존성을 설치한다.

```bash
npm init -y
```

```bash
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
npm install typescript ts-loader webpack webpack-cli webpack-dev-server -D
```

## package.json

`script` 항목을 적절히 추가한다.

```json
{
  "script": {
    "build": "webpack --mode=none",
    "webpack:build": "webpack --mode=none",
    "webpack:dev": "webpack serve --mode=development",
    "webpack:watch": "webpack --watch --mode=development"
  }
}
```

## tsconfig.json

다음으로 `tsconfig.json` 파일을 생성해 다음과 같이 원하는 설정을 추가한다.

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "es5",
    "module": "es6",
    "outDir": "./dist",
    "esModuleInterop": true,
    "noImplicitAny": true,
    "moduleResolution": "node",
    "exclude": ["node_modules"],
    "include": ["src/**/*"],
    "lib": [
      "es2015",
      "es2016",
      "es2017",
      "es2018",
      "es2019",
      "es2020",
      "DOM",
      "DOM.Iterable"
    ]
  }
}
```

## .eslint.js

`.eslint.js` 파일을 작성한다.

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
};
```

## webpack.config.js

`webpack.config.js` 파일을 작성한다.

```js
/* eslint-disable @typescript-eslint/no-var-requires */
var path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
```

## Prettier를 사용하는 경우

다음 의존성을 추가로 설치한다.

```bash
npm install prettier eslint-plugin-prettier -D
```

`.eslintrc.js` 파일에 다음과 같이 `prettier` 설정을 추가한다.

```json
{
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true,
        "useTabs": false,
        "tabWidth": 2,
        "printWidth": 80,
        "bracketSpacing": true
      }
    ]
  }
}
```
