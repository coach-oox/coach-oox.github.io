---
layout: post
title: "타입스크립트 타입 별칭과 인터페이스의 차이점"
category: [typescript]
tags: [typescript]
comments: true
---

## 타입 별칭 (Type Ailas)

타입 별칭은 임의의 타입 또는 인터페이스를 참조할 수 있는 타입 변수를 의미하며, `type`이라는 키워드를 사용해 다음과 같이 생성할 수 있다.

```ts
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

let user: User;
```

타입 별칭은 제네릭, 함수 등에도 사용할 수 있다. (i.g., 타입을 사용하는 곳에는 모두 타입 별칭을 대신 사용할 수 있다.)

## 인터페이스 (Interface)

인터페이스는 `interface` 키워드를 사용해 다음과 같이 작성할 수 있다.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

let user: User;
```

## 타입 별칭 vs. 인터페이스

타입 별칭은 어떤 타입을 정의하는 것이 아니라 말그대로 '별칭'을 붙여놓는 역할을 한다. 따라서 인터페이스와는 달리 직접 확장해 사용할 수 없다는 큰 차이점이 있다.

### 타입 별칭은 언제 사용해야 할까?

쉽게 정리하자면, 우선적으로 인터페이를 사용해 구현하고, 굳이 확장 (중복, 상속 등)을 염두에 두지 않아도 되는 때 타입 별칭을 사용하는 것을 고려하면 된다. (e.g., `action` 메시지 정의 등)
