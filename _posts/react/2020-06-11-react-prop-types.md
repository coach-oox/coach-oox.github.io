---
layout: post
title: "React 타입 검사를 위한 Prop-Types 사용법"
categories: [react]
tags: [react, javascript]
comments: true
---

타입 검사가 아주 중요하게 다뤄질 만큼 프로젝트 덩치가 커지면, 그냥 타입스크립트를 쓰는 것도 좋은 대안이다. 하지만, 어쩔 수 없이 자바스크립트로 프로젝트를 진행 해야 할 경우 `prop-types`를 사용하면 된다.

```bash
npm install prop-types
```

전달받은 Props가 의도한 Props인지 체크해주는 역할을 한다.

```js
import PropTypes from "prop-types";

// Componenet
function Greeting({ name, age }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
```
