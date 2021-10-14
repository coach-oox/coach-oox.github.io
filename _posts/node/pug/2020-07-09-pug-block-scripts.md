---
layout: post
title: "Pug 스크립트 사용하는 페이지에서만 로드하기"
category: [node, pug]
tags: [node, pug]
comments: true
---

특정 페이지에서만 필요한 자바스크립트 파일은 매 페이지마다 로딩할 필요가 없다. 따라서 `block`을 이용해 선택적으로 스크립트 파일을 가져올 수 있게끔 하는 것이 좋다.

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="html" data-slug-hash="PomByqV" data-user="dohaelee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dohaelee/pen/PomByqV">
  Pug 스크립트 사용하는 페이지에서만 로드하기</a> by Dohae Lee (<a href="https://codepen.io/dohaelee">@dohaelee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

공통 레이아웃을 표현하는 `layout.pug`에 `block` 생성한다. `block`은 선택적으로 구현할 수 있기 때문에 스크립트가 필요한 위치에서만 스크립트 호출 구문을 추가하면 된다. 그런 다음 특정 스크립트를 사용해야 할 뷰에서 사용할 스크립트만 `block`으로 구현한다.
