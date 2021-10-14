---
layout: post
title: "타입스크립트 객체 배열의 타입 (React but target allows only 1 에러 해결 방법)"
category: [typescript, react]
tags: [typescript, react, error]
comments: true
---

멘티들이 가장 많이하는 질문 중에 하나.  
오늘도 같은 질문을 받아서 정리해본다. 🐥

```bash
Source has X element(s) but target allows only 1.
```

앞쪽 메시지는 다를 수 있지만 위와 거의 흡사한 에러 메시지가 확인되는 경우. 이 에러는 하나의 엘리먼트에 해당하는 타입만을 지정해놓고, 다수의 엘리먼트를 넣으려고 했기 때문에 발생한다. 예를 들어서 다음과 같이 하나의 엘리먼트가 객체로 표현되는 배열을 가정해보자.

```ts
const list = [
  { id, text: "hello" },
  { id, text: "world" },
];
```

이러한 구조는 다음과 같이 표현할 수 있다.

```ts
type List = {
  list: Array<{ id: string; text: string }>;
};
```

다음과 같이 표현하는 경우, 배열에 타입을 지정한 것이 아니고 엘리먼트 하나의 타입을 지정한 것이므로 혼동하지 않도록 주의해야 한다.

```ts
type List = {
  list: [{ id: string; text: string }];
};
```
