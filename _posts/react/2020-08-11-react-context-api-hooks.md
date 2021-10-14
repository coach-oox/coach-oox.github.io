---
layout: post
title: "React Context API와 Hooks 기초 이해"
category: [react]
tags: [react, context, hook]
comments: true
---

## Context란?

기본적으로 리액트에서는 `props`를 사용해서 부모 컴포넌트에서 자식 컴포넌트로 데이터를 공유할 수 있다. 이때 컴포넌트의 개수가 많고 구성이 복잡할 수록, 아래와 같이 여러 개의 컴포넌트에서 자식 컴포넌트로 `props`를 복잡하게 전달해야 하고, 실질적으로 그것을 사용하기 위해서보다 전달만을 위해 다루는 일이 많아지게 된다.

```bash
메인 페이지 컴포넌트 # 헤더에게 props 전달
    - 헤더 # 타이틀에게 props 전달
        - 타이틀 # 로고에게 props 전달
            - 로고 # 전달받은 props 사용
            - 텍스트
```

이와 같이 다른 컴포넌트들에게 이 `props`를 공유하고자 할 때, `props`를 여러 번에 거쳐 넘겨주는 것보다 좋은 해결책은 `context`를 사용하는 것이다. 이 `context`를 사용하면 직접적으로 `props`를 넘겨주지 않아도, 여러 컴포넌트들이 값을 공유할 수 있게 된다. 즉, `context`는 리액트 애플리케이션 내에서 글로벌로 데이터를 공유있게 해준다.

```bash
[공통 저장소]
- 로고와 텍스트에 필요한 정보
```

만약 `context`로 관리하기에도 복잡할 정도로 애플리케이션의 덩치가 커진다면, State Management System인 리덕스, MobX 등을 사용하는 방법도 있다. (i.g., `state` 관리가 그리 어렵지 않은 크기의 애플리케이션에서 굳이 리덕스, MobX 등을 써야할 이유가 없다는 의미이다.)

### Context API 사용 흐름

Context API로 값을 공유하기 위해서는 다음과 같은 프로세스를 거친다.

1. `React.createContext(default)`로 Context 객체 생성
2. 데이터를 제공할 쪽에서 `Context.Provider` 사용
3. 데이터를 사용할 쪽에서 `Context.Consumer` 사용

간단한 예는 다음과 같다.

```tsx
// Store.tsx
import React from "react";

const Store = React.createContext("Hi!");

export default Store;
```

```tsx
// App.tsx

import React from "react";
import Header from "Header";
import Store from "Store";

const App = (): JSX.Element => (
  <Store.Provider value="Hello World!">
    <Header />
  </Store.Provider>
);

export default App;
```

```tsx
// Header.tsx
import React from "react";
import Store from "Store";

const Header = (): JSX.Element => (
    <Store.Consumer>
        {(value) => <h2>{value}<h2/>}
    </Store.Consumer>
)
```

## Hook이란?

Hook은 함수형 컴포넌트에서 `state`와 리액트의 생명주기 메소드를 사용할 수 있게 해주는 함수로, 다음과 같은 [API](https://ko.reactjs.org/docs/hooks-reference.html)를 제공한다.

- `useState()`
- `useEffet()`
- `useContext()`
- `useReducer()`
- `useCallback()`
- `useMemo()`
- `useRef()`

## Context API와 Hook

Context API와 Hook은 굉장히 유용한 기능이지만, Context API만 사용하면 값을 저장하는 저장소 (Store)를 지역적으로 공유하기 때문에, 다른 지역에서 사용할 경우 중복 코드를 구현할 확률이 높고, Hook만 쓰는 경우 각각의 서로 다른 컴포넌트에서 상태를 공유하는 것이 어렵다는 문제점이 있다.

따라서 이 둘을 함께 사용 (메소드를 Hook으로 선언하고, Hook을 Context에 할당)하면, 상태를 전역적으로 공유할 수 있음과 동시에 구현한 메소드를 재사용하기 용이해진다는 이점이 생긴다.
