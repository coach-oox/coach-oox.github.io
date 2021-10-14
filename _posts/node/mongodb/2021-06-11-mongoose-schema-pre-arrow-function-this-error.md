---
layout: post
title: "Mongoose Schema.pre 함수 사용시 this 바인딩 문제"
category: [node, express, mongodb]
tags: [node, express, mongodb, mongoose]
comments: true
---

다음과 같이 화살표 함수를 사용할 경우, `this`가 상위 스코프를 가리키기 때문에 의도한대로 '객체 자체'에 바인딩이 안되는 문제가 발생한다.

```js
userSchema.pre("save", () => {
  /* ... */
});
```

따라서 다음과 같이 `function` 키워드를 사용해 함수를 만들어야 한다.

```js
userSchema.pre("save", function () {
  /* ... */
});
```

또는

```js
function hashingPassword() {
  /* ... */
}

userSchema.pre("save", hashingPassword);
```

이 문제는 `mongoose`나, MongoDB와 별개로 자바스크립트 화살표 함수의 특징에 따라 발생하는 문제인데, 최근 학생들을 보면 그냥 무분별하게 (정확히 모르고) 화살표 함수만을 사용하는 경우가 많아, 질문이 많이 들어오는 부분이라 따로 정리해본다. (물론 작은 프로젝트를 만들 때 화살표 함수를 쓴다고 큰 문제가 발생하는 경우는 없지만, `this`에 관한 차이점 정도는 알아두는 것이 좋다.)
