---
layout: post
title: "ESLint no-case-declarations 에러 해결 방법"
category: [eslint]
tags: [eslint, error]
comments: true
---

[ESLint (no-case-declarations)](https://eslint.org/docs/rules/no-case-declarations)

```bash
Disallow lexical declarations in case/default clauses (no-case-declarations)
```

위와 같은 `no-case-declarations` 에러는 다음과 같이 `case`문 내에서 변수나 상수 또는 함수 등이 제한된 스코프가 없이 선언되는 것을 허용하지 않는다는 것을 알리는 에러이다.

```ts
switch (foo) {
  case 1:
    let x = 1;
    break;

  case 2:
    const y = 2;
    break;

  case 3:
    function f() {}
    break;

  default:
    class C {}
}
```

다음과 같이 중괄호로 스코프를 잡아주면 해결할 수 있다.

```tsx
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }

  case 2: {
    const y = 2;
    break;
  }

  case 3: {
    function f() {}
    break;
  }

  default: {
    class C {}
  }
}
```
