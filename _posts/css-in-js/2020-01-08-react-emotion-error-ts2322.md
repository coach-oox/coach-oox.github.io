---
layout: post
title: "React Emotion TS2322: Property 'css' does not exist 에러 해결 방법"
category: [react, css-in-js]
tags: [react, error, emotion, css-in-js]
comments: true
---

## 증상

타입스크립트로 세팅된 리액트에서 `@emotion/react`를 사용하려고 할 때, `css`를 사용할 수 없는 경우 (i.g., 정상적으로 `import`되지 않는 경우) 다음과 같은 에러 메시지가 출력된다.

```bash
Type '{ children: Element[]; css: SerializedStyles; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.

Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.  TS2322
```

## 해결

파일 최상단에 다음 주석을 포함한다.

```tsx
/** @jsxImportSource @emotion/react */
```
