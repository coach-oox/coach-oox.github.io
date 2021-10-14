---
layout: post
title: "React 컴포넌트의 라이프 사이클"
categories: [react]
tags: [react, javascript]
comments: true
---

## Mounting

Mounting은 컴포넌트가 탄생하는 단계이며, 다음과 같은 순서로 새로운 컴포넌트가 생성된다.

1.  `constructor()` : 자바스크립트에서 클래스를 만들 때 생성되는 생성자 함수.
2.  `static getDerivedStateFromProps()`
3.  `render()`
4.  `componentDidMount()`

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log("Hello, I'm class component.");
  }

  componentDidMount() {
    console.log("I'm Mounted!");
  }

  render() {
    console.log("I'm rendering now...");
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
```

출력 결과는 다음과 같다.

```bash
# Hello, I'm class component.
# I'm rendering now...
# I'm Mounted!
```

## Updating

컴포넌트가 업데이트 될때 호출되는 함수는 다음과 같다.

1. `static getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

핵심은 무언가 변경이 되면 => 새롭게 렌더되고 => `componentDidUpdate()`가 호출된다.

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };

  // 업데이트 발생
  add = () => this.setState({ count: this.state.count + 1 });
  minus = () => this.setState({ count: this.state.count - 1 });

  componentDidUpdate() {
    console.log("I just updated!");
  }

  render() {
    console.log("I'm rendering now...");
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

버튼을 눌렀을 때 출력 결과는 다음과 같다.

```bash
# I'm rendering now...
# I just updated!
# I'm rendering now...
# I just updated!
# I'm rendering now...
# I just updated!
```

## Unmounting

- `compoenentWillUnmount()`
