---
layout: post
title: "VS Code ESLint 동작하지 않는 (반응이 없는) 경우 해결 방법"
category: [eslint]
tags: [eslint, vscode]
comments: true
---

VS Code에서 ESLint 확장도 설치되어 있고, 프로젝트에 `.eslintrc` 파일도 작성되어 있으며, `npm install` 실행시 별다른 에러도 발생하지 않지만, 결과적으로 ESLint가 동작하지 않는 경우. (e.g., 타입을 생략해도 밑줄이 뜨지 않는 경우.)

ESLint의 설정 오류나 `.eslintrc` 파일 작성에 문제가 있을 수도 있지만, 일반적으로 아무런 오류도 발생하지 않으면서 동작을 하지 않는 경우는 대게 `eslint` 버전 호환 문제이다. 프로젝트에서 사용하는 `eslint`의 버전을 다운그레이드 하거나, `setting.json` 파일에 다음 항목을 추가해 해결할 수 있다.

```json
{
  "eslint.workingDirectories": [{ "mode": "auto" }]
}
```

참고로 프로젝트 에러 없이 ESLint가 동작하지 않고, 원인을 전혀 모르겠다면 다음 옵션을 추가해서 ESLintd 상태를 확인해보는 것이 좋다.

```json
{
  "eslint.alwaysShowStatus": true
}
```
