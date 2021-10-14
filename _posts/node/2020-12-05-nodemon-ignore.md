---
layout: post
title: "nodemon.json 파일 작성법 (프론트엔드 파일 예외 처리)"
category: [node]
tags: [node, express, nodemon]
comments: true
---

```js
// package.json
"scripts": {
    // "dev": "nodemon --exec babel-node src/init.js"
    // 그냥 노드몬을 실행하도록 변경 -> nodemon.json 파일에 작성한 대로 실행됨
    "dev": "nodemon",
    "assets": "webpack --config webpack.config.js"
}
```

```js
{
  // 프론트엔드 파일은 무시함
  "ignore": ["webpack.config.js", "src/client/*", "assets/*"],
  "exec": "babel-node src/init.js"
}
```

`nodemon.json` 파일 생성 후 위와 같이 감시에서 제외할 (Ignore) 항목을 작성한다. `exec` 항목에는 기존에 `package.json`의 `script`에서 사용하던 (실행시킬) 명령어를 작성한다.
