---
layout: post
title: "자바스크립트 배열의 구조 분해 (Destructuring)"
category: [javascript]
tags: [javascript]
comments: true
---

## 각각 새로운 변수에 구조 분해 할당

```javascript
const arr = [1, 2, 3];
const [one, two, three] = arr;
```

위 코드는 변수 `one`, `two`, `three`를 생성하고 각각 `arr` 요소를 순서대로 대입한 것과 같다. 동일한 코드를 구조 분해를 사용하지 않고 표현하면 다음과 같다.

```javascript
const arr = [1, 2, 3];
const one = arr[0];
const two = arr[1];
const three = arr[2];
```

## 가져올 요소 이외의 변수를 초기화 할 때

```javascript
const arr = [1, 2, 3];
const [one, two, three, four = 4, five = 5] = arr;
```

## 특정 요소만 할당하고 싶을 때

```javascript
const arr = [1, 2, 3];
const [one, , three] = arr;
```

첫 번째와 세 번째 요소만 가져오고 싶을 때는 위와 같이 공백 또는 언더바 `_`를 사용해 건너 뛸 (가져오지 않을) 요소를 표시한다.

## 연속된 요소를 하나의 변수에 할당할 때

```javascript
const arr = [1, 2, 3];
const [...numbers] = arr;
// numbers = [1, 2, 3]
```
