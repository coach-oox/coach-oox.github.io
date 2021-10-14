---
layout: post
title: "타입스크립트 타입 단언의 이해"
category: [typescript]
tags: [typescript]
comments: true
---

다음과 같이 DOM API를 조작하고자 할 때, `header`에 추론된 타입은 `HTMLDivElement | null`이기 때문에 라인 2에서 에러가 발생한다.

```ts
const header = document.querySelector("div");
header.innerText = "Hello";
```

이 경우 다음과 같이 `header`가 `HTMLDivElement` 타입이라는 것을 단언함으로써 문제를 해결할 수 있다.

```ts
const header = document.querySelector("div") as HTMLDivElement;
header.innerText = "Hello";
```
