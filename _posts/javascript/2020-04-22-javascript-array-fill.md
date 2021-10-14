---
layout: post
title: "자바스크립트 Array.prototype.fill()"
category: [javascript]
tags: [javascript]
comments: true
---

`fill()` 메소드는 배열의 시작 인덱스부터 끝 인덱스의 이전 (바로 앞) 인덱스까지 특정 값으로 채운다.

```javascript
const arr = [1, 2, 3, 4, 5];
arr.fill(10);
// arr = [10, 10, 10, 10, 10];
```

인자로 채울 값만 넘겼을 경우, 전체를 지정한 값으로 다 채운다.

```javascript
arr.fill(20, 2, 4);
// arr = [10, 10, 20, 20, 10]
```

인자로 시작 값과 끝 값을 지정한 경우에는 시작 인덱스부터 끝 인덱스의 바로 '앞' 인덱스 (2 ~ 3) 까지만 채워진다.

```javascript
arr.fill(30, 2);
// arr = [10, 10, 30, 30, 30]
```

시작 지점만 지정한 경우, 시작 지점부터 배열의 끝까지 채워진다.
