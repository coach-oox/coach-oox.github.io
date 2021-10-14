---
layout: post
title: ".prettierrc, .eslintrc 작성법"
categories: [eslint, development]
tags: [prettier, eslint]
comments: true
---

## Prettier

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "printWidth": 80,
  "tabWidth": 4,
  "useTabs": false
}
```

`.prettierrc` 파일을 생성하고 위 코드 예제와 같이 원하는 설정을 작성한다. 설정을 적용하려면 파일을 저장하고 프로젝트 폴더를 재실행한다.

## EsLint

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
  },
};
```

`.eslintrc.js` 파일을 생성하고 위와 같이 설정할 내용을 작성한다. 적용하려면 마찬가지로 프로젝트 폴더를 재실행해야 한다.
