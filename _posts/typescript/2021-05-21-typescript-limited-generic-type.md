---
layout: post
title: "타입스크립트 세 가지 제네릭 타입 제한 방법"
category: [typescript]
tags: [typescript]
comments: true
---

## 조건부 타입 설정

```ts
interface A {
  /* ... */
}

interface B {
  /* ... */
}

function a<T extends A ? A : B>(message: T): void {}
```

## 특정 메소드를 가진 타입만 허용

다음 함수는 `length` 메소드를 가지고 있는 타입만을 허용한다.

```ts
function a<T extends { length: number }>(message: T): void {}
```

## 특정 객체의 키 값만을 허용

다음 함수에서 허용하는 타입은 `obj`의 키 값인 `'name'`, `'email'`, `'password'`이다.

```ts
interface obj {
  name: string;
  email: string;
  password: string;
}

function a<T extends keyof obj>(message: T): void {}
```
