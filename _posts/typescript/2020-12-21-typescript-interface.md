---
layout: post
title: "타입스크립트 기초 토막 정리 #3 인터페이스"
categories: [typescript]
tags: [typescript]
comments: true
---

자바스크립트에서는 클래스를 인터페이스처럼 활용하기도 했지만, 타입스크립트는 그렇지 않다. 클래스와의 차이점은 [이 글](/posts/2020-12-20-typescript-class/)을 참고.

```ts
interface Person {
  name: string;
  age: number;
  gender: string;
}

// 인자가 Person과 같은지 확인
function greeting(person: Person): void {
  console.log(`${person.name}: ${person.age} years, ${person.gender}.`);
}

const obj = {
  name: "Jack",
  age: 24,
  gender: "male",
};

greeting(obj);

export {};
```
