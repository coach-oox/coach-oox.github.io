---
layout: post
title: "자바스크립트 Map · WeakMap 자료구조"
category: [javascript]
tags: [javascript]
comments: true
---

## 객체의 단점

- Iterable 하지 않다.
- 키를 문자열로만 취급한다.
- 따라서 키 값의 유일성을 완벽히 보장할 수 없다.
- 프로퍼티 개수를 직접 파악할 수 없다.

```javascript
const obj = {
  name: "John",
  age: 25,
  gender: "male",
};

// 다음과 같이 사용할 수 없음
// obj.length

// 프로퍼티 개수를 알아내기 위한 방법
Object.keys(obj).length;
Object.values(obj).length;
```

## Map

- 객체의 단점을 보완
- `key`와 `value`의 쌍으로 이루어진 요소들의 집합
- 순서를 보장하며, Iterable 함
- 키가 문자열이 아니어도 됨

```javascript
const map = new Map();
```

`Set`과 마찬가지로 `new` 연산자를 사용해 생성한다. 이때 인자로 Iterable한 개체를 지정할 수 있다. (단, `key`와 `value`의 쌍으로 이루어져야 함)

### 메소드

- `set(key, value)` : 추가
- `get(key)` : 값 가져오기
- `delete(key)` : 삭제
- `clear()` : 초기화
- `size` : 요소의 총 개수
- `has()` : 포함 여부 확인

### Map to Array

Iterable 하기 때문에 배열로 변환할 수 있다.

```javascript
const newArr1 = [...map];
const newArr2 = [...map.keys()];
const newArr3 = [...map.values()];
const newArr4 = [...map.entries()];
```

## WeakMap

`key`가 되는 개체가 참조형 데이터여야 하고, `WeakSet`과 마찬가지로 참조 카운트를 증가시키지 않는다.

- Iterable 하지 않음
- `for ... of` 사용 불가
- `size` 프로퍼티 없음
- `key()`, `values()`, `entries()`, `clear()` 사용 불가
