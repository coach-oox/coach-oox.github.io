---
layout: post
title: "자바스크립트 Array.prototype.filter()"
category: [javascript]
tags: [javascript]
comments: true
---

`filter()` 메소드는 인자로 주어진 함수의 조건을 통과하는 요소를 모아서 새로운 배열로 리턴한다.

```js
const numbers = [2, 4325, 123, 4, 635, 66, 7756, 31, 7];
const biggerThan1000 = numbers.filter((number) => number > 1000);
// biggerThan1000 = [4325, 7756]
```

조건을 만족하는 원소만 결과만 추출.

```js
let titles = ["untitled", "hello", "world", "untitled"];
titles = titles.filter((title) => title !== "untitled");
// titles = ["hello", "world"]
```

원본 배열 수정하기.
