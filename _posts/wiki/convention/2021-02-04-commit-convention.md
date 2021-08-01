---
layout: post
title: "내가 사용하는 Commit · PR 규칙"
category: [wiki, convention]
tags: [convention, git, github]
comments: true
---

## Commit 규칙

```console
$ git commit -m "Prefix: Message (#issue)"
```

- `Prefix: Message` 형식으로 작성한다.
- 접두사는 모두 소문자로 작성한다.
- 접두사와 콜론 (`:`)은 띄어쓰지 않는다.
- 콜론과 메시지는 한 칸 띄어쓴다.
- 관련된 이슈 번호는 맨 뒤에 괄호 (`()`)안에 작성한다.
- 메시지와 이슈 번호는 한 칸 띄어쓴다.

메시지는 반드시 영어일 필요가 없으며, 가장 명확하고 짧게 쓸 수 있는 방법으로 작성한다. 예를들어 `a.txt`라는 파일을 삭제 했다면, 그것에 대해 설명하는 것보다는 `delete: a.txt`로 작성하는 것이 더 명확할 것이다.

### 접두사

| Prefix   | Description                                              |
| -------- | -------------------------------------------------------- |
| `feat`   | 기능 추가<br>e.g., `feat: 소셜 로그인 기능 추가 (#13)`   |
| `fix`    | 버그 및 오류 수정<br>e.g., `fix: 이미지 경로 수정 (#24)` |
| `enhace` | 기능 및 성능 향상                                        |
| `client` | 프론트엔드 작업                                          |
| `docs`   | 문서 작업                                                |
| `ci`     | CI 구성 파일 및 스크립트 변경                            |
| `build`  | 의존성, 프로젝트 버전 등 빌드에 영향을 주는 수정         |
| `chore`  | `.gitignore`, 패키지 매니저, 그외 자잘한 수정            |
| `refac`  | 내부적인 리팩토링, 코드 정리, 주석 작업, 변수명 변경 등  |

### 접두사를 생략하는 경우

다음에 해당하는 경우에는 접두사를 생략하고 메시지만 작성한다.

```console
$ git commit -m "Message (#issue)"
```

- 폴더나 파일의 추가
- 폴더나 파일의 삭제
- 폴더나 파일의 이동
- 폴더나 파일의 변경
- 테스트 코드 관련
- 이전 버전으로 되돌리기

### 사용 예시

```markdown
feat: 소셜 로그인 기능 추가 (#123)

GitHub, Google 계정으로 로그인할 수 있는 기능 추가.

- closed: #123
- related: #456, #789
```

## Pull Request 규칙

```markdown
feat: 소셜 로그인 기능 추가 (#345)
```

PR을 보낼 때는 제목을 Commit Message 그대로 보낸다. 이때 코드 리뷰를 요청할 경우에는 반드시 본문에 코드에 관한 내용을 포함하도록 한다.

```markdown
Merge PR [#123] feat: 소셜 로그인 기능 추가 (#345)
```

병합할 때는 Merge 뒤로 다 지우고, `[Pull Request 번호]`를 추가한 다음, 뒤에 Commit Message를 복사 붙여넣기 한다.
