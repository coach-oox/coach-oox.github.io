---
layout: post
title: "타입스크립트 세 가지 타입 가드 방법"
category: [typescript]
tags: [typescript]
comments: true
---

## typeof를 사용한 타입 가드

```ts
function printMessage(message: string | number) {
  if (typeof message === "string") {
    console.log(message.length);
  }

  /* ... */
}
```

## in을 사용한 타입 가드

```ts
interface A {
  name: string;
  /* ... */
}

interface B {
  email: string;
  /* ... */
}

function printMessage(message: A | B) {
  if ("name" in message) {
    // message: A
  } else {
    // message: B
  }
}
```

## is를 사용한 타입 가드

```ts
interface A {
  name: string;
  /* ... */
}

interface B {
  email: string;
  /* ... */
}

function isA(user: A | B): user is A {
  return (user as A).name !== undefined;
}

function printMessage(message: A | B) {
  if (isA(message)) {
    // message: A
  } else {
    // message: B
  }
}
```
