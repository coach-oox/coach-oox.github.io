---
layout: post
title: "CSS 특정 비율을 가지는 이미지 만들기 (aspect-ratio · object-fit)"
category: [css]
tags: [css]
comments: true
---

## 사용하는 기술

- [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
- [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

## 사용 예시

예전처럼 비율에 따라서 `padding`을 잡아주고 어쩌고 이딴거 없음. 쏘 이지.

```html
<div class="container">
  <img src="./img.jpg" />
</div>
```

```css
.container {
  width: 300px;
  aspect-ratio: 1 / 1;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
```
