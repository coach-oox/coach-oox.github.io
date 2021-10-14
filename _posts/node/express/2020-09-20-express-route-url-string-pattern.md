---
layout: post
title: "Express 문자열 패턴과 정규식 표현을 사용한 Route 경로 표현"
category: [node, express, regexp]
tags: [node, express, regexp]
comments: true
---

라우트 경로를 문자열을 기반으로 하는 경우, 문자열 패턴 또는 정규식 문자를 사용해 조합할 수 있다. (`-` (하이픈)과 `.` (점)은 그냥 문자 그대로 해석됨)

```javascript
app.get("/", home);
app.get("/about", about);
```

위 라우트 경로는 정확히 입력된 대로 `/`, `/about`를 의미한다.

## ? (물음표)

```javascript
app.get("/ab?cd", test);
```

`?` 물음표를 사용하면 앞쪽에 위치한 `b`가 있을 수도 있고, 없을 수도 있다는 것을 의미한다. 즉, `/abcd` 일수도 있고, `/acd` 일수도 있다.

## + (플러스)

```javascript
app.get("/ab+cd", test);
```

`+` 플러스 기호는 앞쪽에 위치한 `b`의 개수가 1개 이상일 수도 있다는 것을 의미한다. 즉, `/abcd`, `/abbcd`, /`abbbbbcd` 모두가 해당한다.

## \* (별표)

```javascript
app.get("/ab*cd", test);
```

`*` 별표 기호는 별표가 있는 위치에 어떠한 문자도 올 수 있음 (선택적, 없을 수도 있음)을 의미한다. 즉, `/abcd`, `/ab123123cd`, `abRANDOMcd` 모두가 해당한다.

## () (괄호)

```javascript
app.get("/ab(cd)?e", test);
```

`()` 괄호는 다수의 문자에 정규식을 적용할 때 사용한다. 위 예제의 경우 `?` 물음표 기호를 `(cd)`에 적용한 것으로, `cd`가 있을 수도, 없을 수도 있음을 의미한다. 즉, `/abe` 또는 `/abcde`를 의미한다.

## 정규식

```javascript
app.get("/a/", test);
```

위 예제는 라우트 이름에 `a`가 포함된 모든 항목과 일치한다.

```javascript
app.get("/:id(\\d+)", userProfile);
```

위 예제는 `:id` 변수가 숫자일 경우만 선택한다.
