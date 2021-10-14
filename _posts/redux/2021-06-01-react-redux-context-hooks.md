---
layout: post
title: "React Context API + Hooks와 Redux 사용법 비교"
category: [redux, react]
tags: [react, hook, context, redux]
comments: true
---

## Context API + Hooks

Context API는 상태 값을 공유하기 위해 사용하고, Hooks는 함수형 컴포넌트에서 상태 값을 사용하기 위해 사용한다. 이 두 가지 기능을 사용해서 상태를 관리하는 간단한 카운터 예제는 다음과 같다.

### store 생성

```js
import React, { createContext } from "react";

const Context = createContext("");

export default context;
```

### 공유할 값을 제공

```jsx
function App() {
  const [count] = useState(0);

  return (
    <Context.Provider value={count}>
      <Count />
    </Context.Provider>
  );
}
```

### 공유된 값 꺼내 쓰기

공유된 값을 꺼낼 때는 `Context.Consumer`를 사용하거나, `useContext()` Hook을 사용할 수도 있다.

```jsx
function Count() {
  const count = useContext(Context);

  return (
    <div>
      <button type="button">PLUS</button>
      <h2>{count}</h2>
      <button type="button">MINUS</button>
    </div>
  );
}
```

## Redux

우선 리액트에서 리덕스를 사용하기 위해서는 다음과 같은 라이브러리를 설치해야 한다.

```bash
npm install redux react-redux
```

리덕스는 개념적으로 Context API + Hooks와 크게 다르지 않다. 초기에 리덕스는 러닝 커브가 높다고 평가 받았지만, COntext API + Hooks 조합이 많이 낯이 익는 지금 환경에서는 그렇게 어렵지 않은 개념이다. 동일한 예제를 리덕스로 표현하면 다음과 같다.

### store 생성

```jsx
import { createStore } from "redux";
import { v4 as uuid } from "uuid";

export const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
};

function reducer(todos = [], { type, text, id }) {
  switch (type) {
    case ACTIONS.ADD:
      return [{ id: uuid(), text }, ...todos];
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== id);
    default:
      return todos;
  }
}

const store = createStore(reducer);

export default store;
```

### 공유할 store 지정 (래핑)

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### 공유된 값 꺼내 쓰기

`mapStateToProps()`와 `mapDispatchToProps()`를 사용해 `props`에 추가해 사용할 수 있다.

```jsx
function Home({ todos, dispatch }) {
  const [text, setText] = useState("");

  const change = (event) => {
    setText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD, text });
    setText("");
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={submit}>
        <input
          value={text}
          onChange={change}
          tpye="text"
          placeholder="Type a new to do..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        <h2>To Dos</h2>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```
