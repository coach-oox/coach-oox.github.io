---
layout: post
title: "Git Commit 기본 이해"
category: [git]
tags: [git]
comments: true
---

## Commit

- 작업에 이력을 기록해서 저장소로 올리는 것
- Staging Area에 있는 Tracked 파일들을 저장소에 저장

**즉, `git add` 한 파일은 버전 관리되고 있는 파일 (Tracked)**

### git commit

```console
$ git add .
$ git commit -m "Message"
# Shortcut: git commit -am "Message"
```

### git diff

```console
# Untracked 파일의 변경사항을 보여줌
$ git diff

# Tracked (커밋 대기) 파일의 변경사항을 보여줌
$ git diff --cached

# 저장소의 모든 차이점 비교
$ git diff HEAD
```
