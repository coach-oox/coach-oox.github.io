---
layout: post
title: "자바스크립트 Set · WeakSet 자료구조"
category: [javascript]
tags: [javascript]
comments: true
---

```javascript
const a = new Set();
```

`Set`은 배열과 비슷하지만 인덱스가 없고, `new` 연산자를 사용해 생성한다. (순서는 가지고 있으며, 중복을 허용하지 않는다.) 이때 인자로는 Iterable한 요소 (배열, 문자열 등)가 들어갈 수 있다.

## 중복을 제거한 배열 만들기

```javascript
const arr = [1, 2, 3, 3, 3, 4, 5];

// reduce를 사용한 중복 제거 예제
const newArr = arr.reduce((acc, current) => {
    if (acc.includes(current)) return acc;
    acc.push(current);
    return acc;
}, []);

// filter를 사용한 중복 제거 예제
const new Array = arr.filter((a, i, self) => {
    return self.indexOf(a) === i;
})
```

기존에 배열에서 중복된 값을 제거하는 방법은 위와 같았다.

```javascript
const arr = [1, 2, 3, 3, 3, 4, 5];
const newArr = new Set(arr);
```

`Set`은 자체적으로 중복을 허용하지 않기 때문에 (해당 값이 이미 존재한다면 `add` 되지 않음) 위와 같이 중복을 제거한 배열을 만들 수 있다.

## 언제 Set 또는 Array를 써야 할까?

- Set

  - 중복을 제거한 새로운 배열 (또는 `Set`) 생성
  - 전체 순회할 필요성이 있는 경우 (`forEach()` 등)
  - 값의 유무 판단만 필요한 경우

- Array
  - 특정 요소에 접근해야 하는 경우
  - 인덱스가 필요한 경우

## WeakSet

`WeakSet`은 참조 카운트를 증가시키지 않는다.

```javascript
let a = {}; // 참조 카운트 : 1
let b = a; // 참조 카운트 : 2

b = null; // 참조 카운트 : 1
a = null; // 참조 카운트 : 0
```

일반적인 위와 같은 경우, 변수 `a`는 객체 `{}`를 참조하게 되고, 참조 카운트가 1 증가하게 되며, 변수 `b`가 변수 `a`를 통해서 동일한 객체를 참조하게 되기 때문에 참조 카운트는 2가 된다.

따라서 변수 `b`를 `null`로 바꾸면 (연결이 해제되면서) 참조하지 않게 되기 때문에 참조 카운트는 1로 감소하게 되고, 변수 `a` 역시 `null`로 바꾸면 참조 카운트는 0이 된다. 이때 참조 카운트가 0이 된 (아무도 참조하지 않고 있는) 경우 Garbage Collector의 수거 대상이 된다.

```javascript
const ws = new WeakSet();
let obj = {};
ws.add(obj);
```

같은 원리에서 변수 `obj`는 객체 `{}`를 참조하기 때문에 참조 카운트가 1 증가하지만, `WeakSet`으로 선언된 `ws`에 객체를 추가해도 객체의 참조 카운트가 증가하지 않는다. (따라서 `obj`를 `null`로 바꾸면 Garbage Collector의 수거 대상이 되며, 수거되면 `WeakSet`에서도 사라진다.)

이러한 특징으로 인해 `WeakSet`은 선언시 초기화 하지 않는다. (생성시 존재는 하겠지만 언제든 수거 대상이 될 수 있기 때문에 이런 식으로 사용하는 것은 위험하다.) 또한 Iterable 하지 않기 때문에 `key()`, `values()`, `entries()` 메소드를 사용할 수 없고, `forEach()` 문도 사용할 수 없다.
