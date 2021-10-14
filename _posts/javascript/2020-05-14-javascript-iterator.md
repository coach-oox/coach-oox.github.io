---
layout: post
title: "자바스크립트 이터레이터 (Iterator)의 이해"
category: [javascript]
tags: [javascript]
comments: true
---

Iterator는 반복을 위해 설계된 특별한 인터페이스를 가진 객체로, 객체 내부에 `next()` 라는 메소드가 존재하고, 이 메소드를 사용해 반복적으로 `value`와 `done` 프로퍼티를 가진 객체를 반환한다.

## Iterable한 개체 특징

- 구조 해체 할당 가능
- 펼쳐 쓸 수 있음 (Spread Syntax)
- `Array.from()` 사용 가능

## Iterator 사용법

```javascript
const arr = [1, 2, 3];
const iter = arr[Symbol.iterator]();

iter.next(); // value : 1, done : false
iter.next(); // value : 2, done : false
iter.next(); // value : 3, done : flase
iter.next(); // value : undefined, done : true
```

`next()` 메소드는 `Symbol.iterator()` 메소드에 의해 생성되며, 실행할 때 마다 배열의 요소를 순서대로 하나씩 꺼내고, 다시 실행할 때 다음 요소로 이동한다. (포인터로 이어진 리스트처럼 한 칸씩 이동)

## Iterator 필요성

- `Array.from()`
- `...iterable` 문법
- `[, , a] = iterable`
- `for ... of` 문법

위 네 가지는 (`from()` 메소드, 펼치기 문법, 구조 해체 할당, `for ... of` 문법) 모두 Iterator를 기반으로 동작한다. 즉, 인자로 Iterable한 개체를 받고, `done`이 `true`가 될 때까지 어떤 수행을 반복하는 원리로 동작한다.

### Array.from()

`Array.from()` 메소드는 Iterable한 개체를 인자로 받아서, `done`이 `true`가 될 때까지 각각의 `value`를 배열의 요소로 만들어 하나의 새로운 배열을 반환한다.

### ...iterable

Spread Syntax도 동일한 원리로 `done`이 `true`가 될 때까지 각각의 `value`를 모아 통으로 넘겨준다.

### 구조 해체 할당

구조 해체 할당도 동일한 원리로 `done`이 `true`가 될 때까지 각각의 `value`가 매칭되는 변수가 있을 때 해당 변수에 `value`를 대입하기를 반복한다.

### for ... of

```javascript
const arr = [1, 2, 3];

for (let number of arr) {
  console.log(number);
}
```

`for ... of` 문법도 동일한 원리로 `done`이 `true`가 될 때까지 각각의 `value`를 `number`에 가져와 사용한다. (**`forEach()` 메소드도 마찬가지**)

### keys(), values(), entries()

```javascript
cosnt map = new Map([1, 2], [3, 4], [5, 6]);

map.keys();     // {1, 3, 5}
map.values();   // {2, 4, 6}
map.entries();  // {1 => 2, 3 => 4, 5 => 6}

const keys = map.keys();
keys.next();
```

`Set`, `Map` 데이터 타입이 가지고 있는 `keys()`, `values()`, `entries()` 메소드도 Iterator에 해당한다. 즉, `next()` 메소드를 가지고 있다.
