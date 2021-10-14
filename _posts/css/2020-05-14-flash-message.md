---
layout: post
title: "CSS 잠깐 보여지고 사라지는 Flash Message 애니메이션 예제"
categories: [css]
tags: [css, animation]
comments: true
---

사용자가 로그인하거나 로그아웃할 때 사이트 왼쪽 하단에서 잠깐 동안 보여지고 사라지는 플래시 메시지창.

```html
<div class="notification">hello</div>
```

```css
.notification {
  opacity: 0;
  position: absolute;
  bottom: 0px;
  right: 50px;
  border-radius: 50px;
  background-color: white;
  padding: 1em 2em;
  text-align: center;
  animation: notification 0.5s ease-out forwards, dissapear 0.5s ease-in
      forwards;
  animation-delay: 0.5s, 1.5s;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

@keyframes notification {
  0% {
    transform: translateY(80px);
    opacity: 0;
  }
  50% {
    transform: translateY(-90px);
    opacity: 1;
  }
  100% {
    transform: translateY(-70px);
    opacity: 1;
  }
}

@keyframes dissapear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```
