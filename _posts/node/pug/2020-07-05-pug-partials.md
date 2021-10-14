---
layout: post
title: "Pug 기초 #5 중복되는 HTML 부분 모듈화"
category: [node, pug]
tags: [node, pug]
comments: true
---

다음 코드의 두 개의 Pug 파일 예시는 각각 다른 페이지를 표현하지만, `footer` 부분은 동일하다.

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="html" data-slug-hash="gOWjjNR" data-user="dohaelee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dohaelee/pen/gOWjjNR">
  Pug 기초 #5 중복되는 HTML 부분 모듈화</a> by Dohae Lee (<a href="https://codepen.io/dohaelee">@dohaelee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 중복되는 부분 모듈화

먼저 중복되는 부분을 모듈화 할 `footer.pug` 파일을 생성한다.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html" data-slug-hash="rNmrZBg" data-user="dohaelee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dohaelee/pen/rNmrZBg">
  Pug 기초 #5 중복되는 HTML 부분 모듈화 1</a> by Dohae Lee (<a href="https://codepen.io/dohaelee">@dohaelee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

`footer.pug` 파일에 중복되는 부분을 작성하고, `footer`가 위치 했던 자리에 `include`를 사용해 모듈 파일을 가져온다.
