---
layout: post
title: "모던 자바스크립트와 ES6 #8 Module"
category: [javascript, es6-concept]
tags: [javascript, es6]
comments: true
---

대부분의 프로그래밍 언어는 각자의 모듈 기능을 가지고 있다. 예를 들어 C언어의 경우 `#include`를 사용해 외부의 모듈을 가져온다. 클라이언트 사이드의 자바스크립트의 경우, `<script>` 태그를 사용해서 외부의 모듈 (스크립트 파일)을 가져올 수 있다. 하지만 이 경우 파일 단위로 독자적인 Scope를 가지는 것이 아니라 하나의 전역 객체를 공유한다는 특징이 있다. 즉, 이렇게 `<script>` 태그로 모듈을 가져오는 경우 모듈화를 구현할 수는 없다.

> 서버 사이드 자바스크립트 런타임 환경인 Node.js의 경우에는 디폴트로 Common JS를 사용하기 때문에, Node.js 환경에서는 각각의 모듈이 별도의 Scope를 가진다.

## Scope

다음과 같이 2개의 스크립트 파일을 사용하는 HTML을 가정해보자.

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="hello.js"></script>
    <script src="world.js"></script>
  </body>
</html>
```

이렇게 로드된 자바스크립트 파일들은 하나의 전역 객체를 공유한다.

```javascript
// hello.js
const greating = "hello";
console.log(greating);
```

```javascript
// world.js
const greating = "world";
console.log(greating);
```

따라서 위와 같이 다른 파일에 존재하더라도 중복된 선언으로 간주된다. 결국 똑같은 바닥인데 단순히 파일만 나누어져 있을뿐이다.

## ES6의 Module

ES6에서는 모듈의 독립적인 Scope를 제공한다. 다음과 같이 파일이 하나의 모듈임을 선언할 수 있다.

```html
<!DOCTYPE html>
<html>
  <body>
    <script type="module" src="hello.js"></script>
    <script type="module" src="world.js"></script>
  </body>
</html>
```

이렇게 로드된 파일들은 독자적인 Scope를 가진다. 또한 더이상 `window` 객체의 Props도 아니다. 이 경우 모듈별로 아예 다른 유효 범위를 가지기 때문에 다른 모듈 내부에 있는 변수를 모듈으 외부에서 참조할 수 없다.

### export

만약 모듈 내부에서 선언된 변수나 함수를 외부에서 사용할 수 있게끔 하고 싶다면 다음과 같이 `export` 키워드를 사용한다.

```javascript
export const greating = "world";

export function sum(a, b) {
  return a + b;
}
```

또는 다음과 같이 `export` 할 변수나 함수들을 하나의 객체로 구성해서 정의할 수도 있다.

```javascript
const greating = "world";

function sum(a, b) {
  return a + b;
}

export { greating, sum };
```

모듈 중 하나만 `export` 할 경우에는 `default` 키워드를 사용할 수 있다.

```javascript
const greating = "world";

export default function sum(a, b) {
  return a + b;
}
```

단, `default`를 사용할 때는 `let`이나 `const`는 사용할 수 없음에 주의하자

### import

외부 모듈에서 `export`된 변수나 함수를 가져와 사용하기 위해서는 `import` 키워드를 사용한다.

```javascript
import { greating } form "./hello.js"
```

`as` 키워드를 사용해서 가져오는 모듈의 이름을 변경할 수도 있다.

```javascript
import { greating as Hello } from "./hello.js";
```

`default` 키워드가 지정된 모듈은 가져올 때 `{}` 괄호 없이 `import` 한다. 이때 가져오는 이름은 변수명처럼 임의로 작성한다.

```javascript
import add from "./hello.js";
```
