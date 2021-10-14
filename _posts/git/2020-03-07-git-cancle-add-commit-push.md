---
layout: post
title: "Git Add · Commit · Push 취소 방법"
category: [git]
tags: [git, github]
comments: true
---

## git add 취소

`git add` 명령을 취소한다는 것은, Staging Area에 있는 Tracked 파일을 Untracked (Unstage) 상태로 변경하는 것을 의미한다.

```console
# git add 한 파일 전체 취소
$ git reset HEAD

# 특정 파일만 취소
$ git reset HEAD index.html
```

## commit message 변경

```console
$ git commit --amend "Message"
```

## git commit 취소

```console
# commit 목록 확인
$ git log
$ git reset --soft HEAD^
```

위 명령어는 커밋을 취소하고 해당 파일들을 Staged (`git add`된 ) 상태로 Working Directory에 보관한다.

```console
$ git reset HEAD^
# git reset --mixed HEAD^
```

위 명령어는 커밋을 취소하고 파일들을 Unstaged (`git add` 되지 않은) 상태로 Working Directory에 보관한다.

```console
$ git reset HEAD~3
```

위 명령어는 마지막 3개의 커밋을 취소하고 파일들을 Unstaged (`git add` 되지 않은) 상태로 Working Directory에 보관한다.

### reset 옵션

- soft : `git add`한 Staged (Tracked) 상태
- mixed : Unstaged (Untracked) 상태
- hard : mixed와 같으나 Working Directory 파일도 삭제

### 원격 저장소의 마지막 commit으로 롤백

```console
$ git reset --hard HEAD
```

## git push 취소

로컬 내용을 원격 저장소에 덮어쓰기 하므로 조심해서 써야함.

```console
$ git reset HEAD^
```

위 명령어를 사용해 가장 최근 (마지막 1개)의 커밋을 취소하고 Working Directory를 되돌린다.

```console
$ git reset [commit id]
# git reset HEAD@{number}
```

또는 특정 커밋으로 되돌리기 위해서는 위와 같이 `commit id`를 사용한다.

```console
$ git commit -m "Message"
$ git push origin main -f
# git push origin +main
```

마지막으로 되돌려진 상태에서 다시 커밋을 한 다음 원격 저장소에 강제로 `git push`를 한다.
