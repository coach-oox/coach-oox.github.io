---
layout: post
title: "tsconfig.json 설정 파일 작성 방법"
category: [development, typescript]
tags: [development, typescript, tsconfig]
comments: true
---

[TSConfig Reference](https://www.typescriptlang.org/tsconfig)

## files

프로그램에 포함할 파일의 허용 목록 (Allowlist)을 정의하며, 파일을 찾을 수 없을 경우 에러가 발생한다. 일반적으로 포함할 파일의 개수가 적을 때 사용된다.

```json
{
  "files": ["home.ts", "about.ts", "contact.ts"]
}
```

## include

프로그램에 포함할 파일 이름 또는 하위 폴더를 포함하는 경로를 지정할 때 사용하며, 포함할 파일의 개수가 많거나, 여기 저기 흩어져 있을 경우에 사용된다.

```json
{
  "include": ["src/**/*"]
}
```

경로를 표현할 때는 다음과 같은 Glob 패턴들을 사용할 수 있다.

- `*` : 디렉토리 구분 기호를 제외한 0개 이상의 문자와 매칭
- `**/` : 모든 하위 디렉토리와 매칭
- `?` : 디렉토리 구분 기호를 제외한 하나의 문자와 매칭

## exclude

프로그램에 포함하지 않을 파일 또는 경로를 지정할 때 사용하며, `include`와 똑같이 Glob 패턴을 사용할 수 있다.

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## extends

다른 파일의 설정을 상속하기 위해 사용된다.

```json
// tsconfig.json
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

```json
// tsconfig.files.json
{
  "extends": "./tsconfig",
  "files": ["main.ts", "supplemental.ts"]
}
```

## compilerOptions

컴파일을 위한 옵션들을 선택적으로 추가할 수 있다. 사용할 수 있는 옵션의 목록은 [Compiler Options](https://www.typescriptlang.org/tsconfig#compilerOptions)에서 확인할 수 있다.

### 주요 옵션 정리

```json
{
  "compilerOptions": {
    "target": "es5", // 사용할 ECMA 버전
    "module": "commonjs", // 모듈을 위한 코드 생성 설정
    "allowJs": true, // .js 파일도 컴파일 허용할 것인지 설정
    "checkJs": true, // .js 파일도 오류 검사할 것인지 설정
    "jsx": "react", // JSX 코드 생성 설정
    "rootDir": "./", // 루트 디렉토리 설정
    "outDir": "./build", // 결과 저장할 디렉토리 설정
    "strict": true, // 모든 엄격한 확인 설정
    "noImplicitAny": true, // any 타입을 에러로 표시할지 여부
    "strictNullChecks": true, // 엄격한 null 확인
    "strictFunctionTypes": true, // 엄격한 함수 타입 확인
    "alwaysStrict": true, // strict 모드로 분석, 항상 모든 파일에 use strict 설정
    "noUnusedLocals": true, // 사용되지 않은 지역 변수에 대한 에러 처리 여부
    "noUnusedParameters": true, // 사용되지 않은 파라미터에 대한 에러 처리 여부
    "noImplicitReturns": true, // 함수에서 코드의 모든 경로가 값을 반환하지 않을 시 에러 처리 여부
    "noFallthroughCasesInSwitch": true // switch문에서 fallthrough 케이스에 대한 에러 처리 여부
  }
}
```

### 사용 예시

```json
{
  "include": ["./src/**/*"],
  "compilerOptions": {
    "target": "es5", // 사용할 ECMA 버전
    "module": "commonjs", // 모듈을 위한 코드 생성 설정
    "strict": true, // 모든 엄격한 확인 설정
    "noImplicitAny": true, // any 타입을 에러로 표시할지 여부
    "alwaysStrict": true, // strict 모드로 분석, 항상 모든 파일에 use strict 설정
    "noUnusedLocals": true, // 사용되지 않은 지역 변수에 대한 에러 처리 여부
    "noUnusedParameters": true, // 사용되지 않은 파라미터에 대한 에러 처리 여부
    "noImplicitReturns": true // 함수에서 코드의 모든 경로가 값을 반환하지 않을 시 에러 처리 여부
  }
}
```
