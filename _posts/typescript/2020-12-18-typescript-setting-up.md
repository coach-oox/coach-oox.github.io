---
layout: post
title: "타입스크립트를 사용하기 위한 기본 세팅 방법"
categories: [typescript]
tags: [typescript, setting]
comments: true
---

## 설치

```bash
npm install -g typescript
```

먼저 `typescript`를 Global로 설치한다. VS Code를 사용한다면, EsLint 확장을 설치한다. (TsLint 확장은 지원이 중단 되었기 때문에 더이상 사용되지 않는다.)

## 설정

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true
  },
  "include": ["index.ts"], // 컴파일 과정에서 포함할 파일의 배열
  "exclude": ["node_modules"] // 컴파일 과정에서 포함하지 않을 파일의 배열
}
```

그 다음으로 TypeScript 설정 파일인 `tsconfig.json` 파일을 루트 폴더에 생성하고, 위와 같이 필요한 설정과 옵션을 작성한다. 이제 터미널에서 `tsc` 명령어를 사용하면 `.ts` 파일이 `.js` 파일로 컴파일 된다.

## tsc-watch 설치

```bash
npm install tsc-watch -D
```

타입스크립트 파일 변경시 자동 재시작 (새로고침)을 위해서 `tsc-watch` 라이브러리를 사용한다.

```json
// package.json
"scripts" : {
    "start":: "tsc-watch --onSuccess \"node dist/index.js\""
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

이제 `src` 폴더 내부에 있는 타입스크립트 파일이 변경되고 성공적으로 컴파일 되었을 경우 자동으로 `dist` 폴더 하위의 `index.js` 파일을 실행 (새로고침)한다.
