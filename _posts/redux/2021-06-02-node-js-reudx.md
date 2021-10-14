---
layout: post
title: "Node Redux 기본 사용법"
category: [redux, node]
tags: [redux, node, javascript]
comments: true
---

## 기본 사용법

리덕스는 데이터 (`state` 값, 애플리케이션에서 변하는 값)를 한 곳에서 관리하기 위해 사용한다.

```bash
npm install redux
```

### createStore()

데이터를 관리하기 위한 저장소는 보통 Store라 부르며, `createStore()` 함수를 사용해 생성한다. 이렇게 생성된 `store`는 `dispatch()`, `subscribe()`, `getState()`, `replaceReducer()` 함수를 가진다.

```js
import { createStore } from "redux";
const store = createStore(reducer);
```

`createStore()`의 시그니처는 다음과 같다.

```js
createStore(reducer, preloadedState?, enhancer?);
```

### reducer()

`createStore()` 함수의 필수 파라미터인 `reducer()`는 현재 상태에 어떠한 처리를 한 후, 새로운 상태로 만들어 리턴하는 함수이다. 이때 리턴하는 상태는 원본을 Mutate 하는 것이 아닌 완전히 새로운 객체여야 한다.

```js
function reducer(count = 0, action) {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return 0;
  }
}
```

### getState()

현재 상태 값을 꺼낼 때는 `getState()` 함수를 사용한다.

```js
console.log(store.getState());
```

## dispatch()

값을 변경하기 위해서 (`reducer()`를 호출하고, 지정한 `action.type`에 의한 처리를 하기 위해서)는 `dispatch()` 함수를 사용한다.

```js
store.dispatch({ type: "ADD" });
```

### subscribe()

(`useEffect()` 처럼) 관리하는 상태 값에 대한 변화를 구독하기 위해서는 `subscribe()` 함수를 사용한다.

```js
store.subscribe(() => {
  number.innerText = store.getState();
});
```

## To Do List 예제

사용할 `action.type`을 작성하고, `store`를 생성한다.

```js
const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
};

const store = createStore(reducer);
```

`createStore()` 함수에 전달할 `reducer()`를 작성한다.

```js
function reducer(todo = [], { type, text, id }) {
  switch (type) {
    case ACTIONS.ADD:
      return [{ id: uuidv4(), text }, ...todo];
    case ACTIONS.DELETE: {
      return todo.filter((aTodo) => aTodo.id !== id);
    }
    default:
      return todo;
  }
}
```

각각의 `action.type` 동작을 담당할 버튼의 이벤트를 지정한다.

```js
// submti 이벤트가 발생하면 ADD 동작
form.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch({ type: ACTIONS.ADD, text: input.value });
  input.value = "";
});
```

값이 변할 때마다 화면에 표시되는 숫자를 갱신하기 위해서 `subscribe()` 함수를 사용한다.

```js
function createTodo() {
  const todos = store.getState();

  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = todo.id;
    li.innerText = todo.text;
    span.innerText = "🗑";
    span.addEventListener("click", removeTodo);
    li.appendChild(span);
    ul.appendChild(li);
  });
}

store.subscribe(() => createTodo());
```
