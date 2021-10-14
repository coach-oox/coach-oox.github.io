---
layout: post
title: "React useReducer 사용시 발생하는 TS2769 에러 해결 방법"
category: [react]
tags: [react, typescript, error, hook]
comments: true
---

## 에러 메시지

```bash
No overload matches this call.

Overload 1 of 5, '(reducer: ReducerWithoutAction<any>, initializerArg: any, initializer?: undefined): [any, DispatchWithoutAction]', gave the following error.

Argument of type '(state: State, action: Action) => void' is not assignable to parameter of type 'ReducerWithoutAction<any>'.

Overload 2 of 5, '(reducer: (state: State, action: Action) => void, initialState: never, initializer?: undefined): [never, Dispatch<Action>]', gave the following error.

Argument of type 'State' is not assignable to parameter of type 'never'.  TS2769
```

에러 메시지는 조금씩 다를 수 있지만, 주목해야 할 것은 마지막 줄이다.

```bash
Argument of type 'State' is not assignable to parameter of type 'never'.  TS2769
```

이 에러는 보통 `reducer`를 작성하면서 `state` 반환을 까먹었기 때문에 발생한다.. 🤪

## 해결 방법

다음과 같이 `reducer`가 `state`의 타입을 리턴하도록 수정한다.

```tsx
const reducer = (state: State, action: Action): State => {
  // reducer code ...
};
```
