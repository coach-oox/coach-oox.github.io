---
layout: post
title: "CSS 뷰포트 사이즈 단위 vh · vw · vmin · vmax 정리"
categories: [css]
tags: [css, animation]
comments: true
---

## vh · vw

`vh` (Vertical Height)과 `vw` (Vertical Width) 단위는 뷰포트 높이 및 너비에 맞게 타겟 요소의 크기를 지정하고자 할 때 사용된다.

```css
body {
  height: 100vh;
}
```

`vh` 요소는 높이 값의 1 / 100 단위이다. 즉, 뷰포트 높이 값이 `1000px`일 때 `1vh`는 `10px`이 되기 때문에, `100vh`는 뷰포트 (브라우저 높이 값)의 `100%`에 해당된다. (`vw`의 경우에도 세로가 아니라 가로를 의미하는 것 외에는 동일하다.)

## vmin · vmax

`vh`와 `vw` 단위가 뷰포트의 높이 및 너비 값에 상대적인 단위라면, `vmin`과 `vmax`는 높이 및 너비 값에 따라 최소 또는 최대값을 지정하는 단위이다. 예를 들어 높이가 `1000px`일 때 `1vmin`은 `10px`이며, 이는 창이 줄어들거나 커짐에 따라 유동적으로 변화한다.

```css
body {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $black;
}

.container {
  width: 100vmin;
  height: 100vmin;
  background-color: $white;
}
```

위 소스는 전제 뷰포트를 점유하는 `body` 안에 높이를 기준으로 정사각형이 되는 (꽉찬 정사각형) `container`를 지정한다.
