---
layout: post
title: "자바스크립트 Array.prototype.toLocaleString()"
category: [javascript]
tags: [javascript]
comments: true
---

`toLocaleString()` 메소드는 요소를 문자열로 변환하고, 지정한 문화권 (나라)의 표기법에 따라 시간, 화폐 등을 고유 문자열로 분리한다. 다음과 같은 상황에서 사용할 수 있다.

- 1000단위 (화폐) 쉼표 넣기
- 문화권 시간 표기법에 따른 변환

```javascript
const price = 10000;
const message = `￦${price.toLocaleString("ko-KR")}`;
// message = "￦10,000"
```
