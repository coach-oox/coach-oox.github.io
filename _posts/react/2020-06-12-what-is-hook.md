---
layout: post
title: "React Hook이란?"
categories: [react]
tags: [react, javascript, hook]
comments: true
---

함수 컴포넌트에서 `state`를 가질 수 있게 해준다. [참고](https://www.javatpoint.com/react-hooks)

## 예시

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({ count: this.count + 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div class="App">
        <h1>{count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
```

동일한 기능을 하는 `App` 컴포넌트를 훅을 사용해 만들면 다음과 같다.

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
```
