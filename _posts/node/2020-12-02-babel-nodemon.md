---
layout: post
title: "Node Babel + Nodemon 적용 방법"
category: [node]
tags: [node, babel, nodemon]
comments: true
---

## Babel

Next-Gen 자바스크립트를 보편적인 (브라우저에서 안정적으로 실행할 수 있는) 자바스크립트로 변환하는 역할.

```json
{
  "presets": ["@babel/preset-env"]
}
```

`babel.config.json` 파일을 생성한다.

```bash
npm install @babel/core @babel/register @babel/preset-env @babel/node
```

필요한 의존성을 설치한다.

```bash
babel-node index.js
```

## Nodemon

변경 사항 (저장된)이 있을 경우 자동으로 서버를 재시작한다.

```bash
npm install nodemon
```

`nodemon`을 설치한다.

```bash
nodemon --exec babel-node index.js
```
