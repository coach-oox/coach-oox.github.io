---
layout: post
title: "자바스크립트 제한적 범위의 난수 만들기"
category: [javascript]
tags: [javascript]
comments: true
---

`random()` 메소드는 0 이상 1 미만의 구간에서 부동소숫점 의사난수를 생성한다. 이는 다음과 같이 활용할 수 있다.

## 0 ~ 지정한 값 사이의 난수 생성

```javascript
function getRandom(max) {
  return Math.random() * max;
}
```

## 두 값 사이의 난수 생성

```javascript
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

## 두 값 사이의 정수 난수 생성

```javascript
//최댓값은 제외, 최솟값은 포함
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
```

이 경우 `round()` 함수를 사용하면 난수가 고르게 분포되지 않는다.

## 최댓값을 포함하는 정수 난수 생성

```javascript
//최댓값도 포함, 최솟값도 포함
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```
