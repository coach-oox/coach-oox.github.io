---
layout: post
title: "자바스크립트 다른 파일에 있는 객체 (배열) 사용하기"
category: [javascript]
tags: [javascript]
comments: true
---

클라이언트 사이드 (브라우저)에서 자바스크립트를 사용할 때, 다른 파일에 있는 객체나 배열을 사용하기 위해서는 스크립트 파일을 `module`로 등록하고 `import`, `export`를 사용해 객체나 배열을 가져와 사용한다.

```html
<script type="module" src="./src/index.js"></script>
<script src="./src/movies.js"></script>
```

```javascript
export const movies = [
  {
    title: "Popcorn",
    cover: "/images/popcorn.jpg",
    price: 5000,
  },
  {
    title: "Space Boys",
    cover: "/images/space-boys.jpg",
    price: 10000,
  },
  {
    title: "Television",
    cover: "/images/television.jpg",
    price: 8000,
  },
];
```

```javascript
import { movies } from "./movie.js";
```
