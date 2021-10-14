---
layout: post
title: "타입스크립트 기초 토막 정리 #1 타입 지정"
categories: [typescript]
tags: [typescript]
comments: true
---

## 파라미터 타입 지정

```ts
function greeting(name: string, age: number, gender: string) {
  console.log(`${name}: ${age} years, ${gender}.`);
}

greeting("Jack", "24", "male");

export {};
```

타입스크립트에서는 파라미터의 타입을 위와 같이 지정할 수 있다. 위 코드를 컴파일하면 다음과 같은 에러가 발생한다.

```bash
index.ts:5:18 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
5 greeting("Jack", "24", "male");
Found 1 error.
```

## 함수의 타입 지정

```ts
function greeting(name: string, age: number, gender: string): void {
  return "Somthing";
}

greeting("Jack", 24, "male");

export {};
```

파라미터에 타입을 지정했던 것과 같이, 함수 자체에도 타입을 지정한다. 위 코드를 컴파일하면 다음과 같은 에러가 발생한다.

```bash
index.ts:2:5 - error TS2322: Type 'string' is not assignable to type 'void'.
2     return "Somthing";
Found 1 error.
```
