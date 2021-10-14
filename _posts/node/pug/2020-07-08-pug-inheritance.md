---
layout: post
title: "Pug 기초 #8 상속 (Inheritance)"
category: [node, pug]
tags: [node, pug]
comments: true
---

레이아웃 틀은 같지만, 내용은 변경되어야 할 때. (변경되는 것 없이 똑같은 부분이 중복될 때는 [이 글](/posts/2020-07-05-pug-partials/)을 참고.)

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="html" data-slug-hash="oNWMPRo" data-user="dohaelee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dohaelee/pen/oNWMPRo">
  Pug 기초 #8 상속 (Inheritance)</a> by Dohae Lee (<a href="https://codepen.io/dohaelee">@dohaelee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

만든 레이아웃은 `extends` 키워드를 사용해 적용하고, 각각의 `block` (내용이 변경될 부분)을 구현한다. `block` 파트 구현은 옵션으로, 비워둬도 에러가 생기진 않는다.
