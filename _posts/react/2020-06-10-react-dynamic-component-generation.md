---
layout: post
title: "React 배열을 사용한 동적 컴포넌트 생성"
categories: [react]
tags: [react, javascript]
comments: true
---

```jsx
const family = [
  {
    name: "John",
    age: 24,
  },
  {
    name: "Edward",
    age: 18,
  },
  {
    name: "Tim",
    age: 20,
  },
];

function renderMembers(member) {
  return <Greeting name={member.name} age={member.age} />;
}

function App() {
  return (
    <div className="App">{family.map((member) => renderMembers(member))}</div>
  );
}
```
