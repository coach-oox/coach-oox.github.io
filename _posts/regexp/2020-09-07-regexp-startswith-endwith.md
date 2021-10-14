---
layout: post
title: "특정 단어로 시작하거나 끝나는 문자열을 검사하는 정규식 표현"
categories: [regexp]
tags: [regexp]
comments: true
---

## 앵커 (Anchor)

캐럿 기호인 다음 두 기호를 앵커 (Anchor)라고 한다. 이 두 개의 앵커를 사용해서 문자열이 특정 단어로 시작하거나, 끝나는지 여부를 검사하는 정규식 표현을 만들 수 있다.

- `^` : 텍스트의 시작
- `$` : 텍스트의 끝

## 특정 단어로 시작하는 문자열

```javascript
const string = "Hello World!";
```

`/^Hello/`는 문자열이 시작하고 바로 `Hello`가 나타난다는 뜻으로, 문자열이 `Hello`로 시작하는지 검사할 수 있다. 이를 대신해 자바스크립트의 문자열 메소드 `startsWith()`를 사용할 수도 있다.

## 특정 단어로 끝나는 문자열

```javascript
const string = "Hello World!";
```

`/World!$/`는 문자열이 `World!`로 끝나는지 검사할 수 있다. 이를 대신해 자바스크립트의 문자열 메소드 `endsWith()`를 사용할 수도 있다.

## 완전 일치 검사

이 두 앵커를 활용하면 특정 단어가 완전히 일치하는지 검사할 수 있다.

```javascript
const string = "Hello World!";
```

`/^Hello World!$/`
