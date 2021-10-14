---
layout: post
title: "Node 랜덤한 아이디 값 생성을 위한 UUID 라이브러리 사용법"
category: [node]
tags: [node, uuid]
comments: true
---

[uuid](https://www.npmjs.com/package/uuid)는 네트워크 상에서 고유성이 보장되는 아이디 값을 만들기 위한 표준 규약 UUID를 CommonJS, Node, 브라우저 환경 등에서 사용할 수 있는 라이브러리이다.

```bash
npm install uuid
```

타입스크립트로 사용하려면 `@types/uuid`도 설치해준다.

```bash
npm install @types/uuid
```

다음과 같이 `v4` 모듈을 `import` 한다.

```jsx
import { v4 as uuidv4 } from "uuid";
```

다음과 같이 랜덤 아이디를 생성할 수 있다.

```jsx
const id = uuidv4();
```
