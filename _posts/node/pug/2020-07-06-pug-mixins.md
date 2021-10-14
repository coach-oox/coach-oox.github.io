---
layout: post
title: "Pug 기초 #6 재사용 가능한 함수"
category: [node, pug]
tags: [node, pug]
comments: true
---

Mixin은 재사용을 위한 모듈인데, 함수처럼 인자를 받아 처리할 수 있다.

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="html" data-slug-hash="xxdJaGG" data-user="dohaelee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dohaelee/pen/xxdJaGG">
  </a> by Dohae Lee (<a href="https://codepen.io/dohaelee">@dohaelee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

사용할 때는 해당 파일을 `include` 한 다음 `+widget()`와 같이 사용한다. 위 예제는 배열로 표현된 여러 개의 위젯 객체를 가져와 반복문을 통해 각각의 위젯에 동일한 템플릿을 적용하고 있다.
