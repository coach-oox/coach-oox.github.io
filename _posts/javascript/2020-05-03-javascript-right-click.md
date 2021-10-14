---
layout: post
title: "자바스크립트 마우스 오른쪽 클릭 (Context Menu) 이벤트 처리"
category: [javascript]
tags: [javascript]
comments: true
---

```javascript
function blockRightClick(event) {
  event.preventDefault();
}

cavas.addEventListener("contextmenu", blockRightClick);
```

마우스 우클릭시 나오는 창을 Context Menu라고 부르며, 이벤트 처리를 통해 마우스 우클릭을 방지하거나 임의의 이벤트를 지정할 수 있다.
