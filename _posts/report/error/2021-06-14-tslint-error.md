---
layout: post
title: "타입스크립트 .eslintrc 파일 Parsing Error 해결 방법"
categories: [report, error]
tags: [typescript, eslint]
comments: true
---

## 증상

`.eslintrc.js` 파일에 타입스크립트 (과거 `.tslint`) 설정을 할 때 발생하는 Parsing Error 또는 `.eslintrc.js` 파일 에러.

```bash
parsing error: "parseroptions.project" has been set for @typescript-eslint/parser. the file does not match your project config: .eslintrc.js. the file must be included in at least one of the projects provided.
```

`module.exports` 부분에 위와 같은 에러가 생성된다.

## 해결 방법

먼저 `.eslintrc.js` 파일의 `parserOptions` 항목에 `project`를 다음과 같이 수정한다. (두 개의 파일을 포함하도록)

```js
parserOptions: {
    // ...
    project: ["./tsconfig.eslint.json", "./tsconfig.json"],
}
```

그런 다음 `tsconfig.json` 파일의 `include` 항목에 `.eslintrc.js` 파일을 추가한다.

```json
{
  // ...
  "include": [
    ".eslintrc.js"
    // others ...
  ]
}
```

마지막으로 `tsconfig.eslint.json` 파일을 다음 코드 예제와 같이 작성하고, 프로젝트를 재실행 (에디터 종료 후 재시작) 한다.

```json
{
  "include": [".eslintrc.js"]
}
```
