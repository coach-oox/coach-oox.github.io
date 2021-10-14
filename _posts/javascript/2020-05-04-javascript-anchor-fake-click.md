---
layout: post
title: "자바스크립트 링크 클릭 발생 시키기"
category: [javascript]
tags: [javascript]
comments: true
---

```javascript
const a = document.createElement("a");
a.href = url;
a.download = "image.jpg";
document.body.appendChild(a);
a.click();
```

어떤 링크로 연결해서 파일을 다운로드 할 수 있게끔 하기 위해서, 해당 URL을 가리키는 `a` 태그를 만들고, `click()` 함수를 사용해서 가짜 클릭을 발생시킨다.
