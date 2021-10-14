---
layout: post
title: "Webpack SASS (SCSS) 사용법"
category: [webpack]
tags: [webpack, javascript, scss]
comments: true
---

## 설치

```bash
npm install sass -D
npm install sass-loader -D
npm install css-loader -D
npm install mini-css-extract-plugin -D
```

각각의 라이브러리가 하는 역할은 다음과 같다.

- `sass-loader` : SCSS 파일을 CSS 파일로 변환
- `css-loader` : CSS 파일을 읽음
- `mini-css-extract-plugin` : 한 파일로 묶음

## 설정

```javascript
const miniCssExtractPlugin = require("mini-css-extract-plugin");

// ... 생략 ... //

plugins: [new miniCssExtractPlugin({ filename: "css/styles.css" })],
module: {
    rules: [
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
    ],
},
```

WebPack은 오른쪽 부터 실행되므로 `use`의 사용 순서가 중요하다.

1. SCSS => CSS 변환
2. 변환한 CSS 파일 읽음
3. 읽은 파일 하나로 묶기

## 생성된 정적 파일 사용하기

```javascript
// assets 폴더에 있는 정적 파일들을 /static 경로로 라우팅
app.use("/static", express.static("assets"));
```

<p class="codepen" data-height="250" data-theme-id="dark" data-default-tab="html" data-slug-hash="gOWjLRN" data-user="dohaelee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dohaelee/pen/gOWjLRN">
  </a> by Dohae Lee (<a href="https://codepen.io/dohaelee">@dohaelee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
