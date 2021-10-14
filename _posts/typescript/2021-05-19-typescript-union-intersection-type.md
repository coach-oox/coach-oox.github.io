---
layout: post
title: "타입스크립트 유니온 타입과 인터섹션 타입"
category: [typescript]
tags: [typescript]
comments: true
---

## 유니온 타입 (Union Type)

유니온 타입은 `|` 연산자를 사용해서 여러 개의 타입 중 하나에 해당하는 타입을 의미한다.

```ts
const print = (message: string | number): void => console.log(message);
```

위 코드 예제에서 `message`는 `string` 타입이거나 `number` 타입일 수 있다.

### 인터페이스에 유니온 타입 적용

```ts
interface A {
  name: string;
  email: string;
}

interface B {
  name: string;
  phone: number;
}

const print = (message: A | B): void => console.log(meesage);
```

위 코드 예제에서 `message`는 `A`도 될 수 있고 `B`도 될 수 있음을 의미하기 때문에, 공통적으로 가지고 있는 `name`에만 접근할 수 있다.

## 인터섹션 타입 (Intersection Type)

인터섹션 타입은 `&` 연산자를 사용해서 여러 개의 타입을 하나로 합친 타입을 의미한다.

```ts
interface A {
  name: string;
  email: string;
}

interface B {
  name: string;
  phone: number;
}

const print = (message: A & B): void => console.log(meesage);
```

위 코드 예제에서 `meesage`는 `name`, `email`, `phone` 프로퍼티를 모두 가지게 된다.
