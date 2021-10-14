---
layout: post
title: "Git Branch 관련 명령어 정리"
category: [git]
tags: [git]
comments: true
---

## 브랜치 확인

```console
# 브랜치 확인
$ git branch

# 브랜치 상세 정보까지 확인
$ git branch -v
```

## 브랜치 상태 확인

```console
# Merged 상태 브랜치 확인
$ git branch --merged

# Merged 되지 않은 브랜치 확인
$ git branch --no-merged
```

## 브랜치 생성

```console
$ git branch newBranch baseBranch
```

## 브랜치 삭제

```console
$ git branch -d newBranch
```

## 브랜치 이동

```console
$ git checkout newBranch
```

## 브랜치 생성과 이동 숏컷

```console
$ git checkout -b newBranch baseBranch
```

## 브랜치 이름 변경

```console
$ git branch -m newBranch otherBranch
```
