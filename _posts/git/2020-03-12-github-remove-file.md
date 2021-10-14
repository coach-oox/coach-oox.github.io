---
layout: post
title: "GitHub 저장소에서 파일 삭제하는 방법"
category: [git]
tags: [git, github]
comments: true
---

GitHub에 파일 잘못올린 경우 다음과 같은 흐름으로 작업하여, 이미 원격 저장소에 올라간 파일을 삭제할 수 있다.

- `.gitignore` 작성
- 원격 저장소에서 파일 삭제
- 원격 저장소에 적용

## 원격 저장소에서 파일 삭제

```bash
# 원격 저장소의 index.html 파일 삭제
git rm --cached index.html

# src/style.css 파일 삭제
git rm --cached src/style.css

# src 폴더 하위 모두 삭제
git rm --cached -r src/
```

위 명령어로 원격 저장소에 잘못 올라간 파일만 삭제한다. 이때 로컬에 있는 파일은 삭제되지 않는다. 만약 상황에 따라 로컬에 있는 파일도 지워야 하는 경우 다음 명령어를 사용한다.

```bash
git rm index.html
```

## 원격 저장소에 적용

```bash
git commit -m "Message"
git push origin main
```

다시 커밋하고 푸시한다.
