---
layout: post
title: "React Redux 기본 사용법"
category: [redux, react]
tags: [redux, react, javascript]
comments: true
---

리액트에서 리덕스를 사용하기 위해서 다음과 같은 라이브러리를 설치한다.

```bash
npm install redux react-redux
```

`createStore()`와 `reducer()`를 작성한다.

```js
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

값을 `App()` 컴포넌트와 `App()` 컴포넌트의 하위에서 사용할 수 있도록 `Provider`로 감싸고 `store`를 지정한다.

```jsx
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

`state`를 꺼내 사용하기 위해서는 `useSelector()`를, `action`을 발생 시키기 위해서는 `useDispatch()`를 사용한다.

```jsx
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

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

export default Home;
```
