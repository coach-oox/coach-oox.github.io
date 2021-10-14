---
layout: post
title: "React 클래스 컴포넌트와 함수 컴포넌트의 차이점"
categories: [react]
tags: [react, javascript]
comments: true
---

## 함수 컴포넌트

```jsx
function App() {
  return (
    <div className="App">
      {members.map((member) => {
        return <Greeting name={member.name} age={member.age} />;
      })}
    </div>
  );
}
```

함수 컴포넌트는 자체로 함수이기 때문에 뭔가를 리턴한다. 클래스 컴포넌트와는 달리 `state`를 가지고 있지 않다.

## 클래스 컴포넌트

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

export default App;
```

클래스 컴포넌트는 `React.Component`로 부터 확장된 클래스이고, 리액트는 클래스 컴포넌트를 자동으로 렌더한다. (`render()` 메소드를 실행한다.) 즉, 무언가 리턴하고 싶은게 있다면 `render()` 메소드 안에 넣어야 한다.
