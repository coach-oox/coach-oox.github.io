---
layout: post
title: "Webpack 여러 개의 Entry Point 지정하기"
category: [webpack]
tags: [webpack, javascript]
comments: true
---

```javascript
module.exports = {
  entry: {
    // 다수의 엔트리 포인트 지정
    main: "./src/client/js/main.js",
    something: "./src/client/js/something.js",
  },
  mode: "development",
  watch: true,
  output: {
    // 각각을 이름 [name] (변수)으로 저장
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
};
```
