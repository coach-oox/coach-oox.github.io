---
layout: post
title: "Webpack Babel-Loader 사용법"
category: [webpack]
tags: [webpack, javascript, babel]
comments: true
---

```bash
npm install babel-loader -D
```

```javascript
{
    test: /\.js$/,
    use: {
        loader: "babel-loader",
        options: {
            presets: [
                ["@babel/preset-env", { targets: "defaults" }],
            ],
        },
    },
}
```
