---
layout: post
title: "React 클래스 컴포넌트 state 사용하는 방법"
categories: [react]
tags: [react, javascript]
comments: true
---

클래스 컴포넌트에서는 함수 컴포넌트에는 없는 `state`를 사용할 수 있다. `state`는 `Object`이며, 변경될 (변경할) 값을 다룬다.

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };
}
```

`state`는 클래스 컴포넌트 안에 `state = {};` 형식으로 생성할 수 있다.

## state 사용

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
```

`state`를 사용할 때는 `this.state.count`와 같이 사용한다.

## state 값 변경

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };

  // 자동으로 호출 함수가 바인딩 되도록 화살표 함수로 구현
  add = () => this.setState({ count: this.state.count + 1 });
  minus = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
```

`state`는 `props`와는 달리 직접 값을 조작해 변경하면 안되고, (예: `this.state.count + 1`) `state`는 `setState()`라는 메소드를 사용해서 새로운 `state`를 만들어 비동기적으로 값을 업데이트 (변경) 한다. 즉, `setState()`가 호출될 때 마다 리액트는 새로운 `state`를 가지고 새롭게 렌더하게 된다.
