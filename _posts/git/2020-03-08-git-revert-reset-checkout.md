---
layout: post
title: "Git 상태 및 파일 복원을 위한 reset · revert · checkout 사용법"
category: [git]
tags: [git]
comments: true
---

## 상태 복원

복원은 현재 파일을 특정한 시점의 파일 상태로 변경하는 작업을 의미한다. 이와 같은 복원을 위해 사용되는 대표적인 명령어들은 다음과 같다.

- `reset`
- `revert`
- `checkout`

## reset

`reset`은 Staged (Tracked) 상태의 파일이나 커밋된 파일을 취소할 때 (이전 상태로 되돌릴 때) 사용되며, 커밋되지 않는다. (커밋되지 않기 때문에 `push`를 `reset`으로 취소했다가 다시 하려면 반드시 다시 커밋 해야 한다.)

- [add, commit, push 취소하기](git/cancle-add-commit-push.md)

### 특징

`reset`은 진행된 커밋 이전의 커밋으로 `HEAD`가 이동한다. 즉, `HEAD`가 바뀌기 떄문에 저장소의 상태가 `HEAD`가 가리키고 있는 커밋의 (저장소) 상태로 변경되어야 한다.

- `--mixed`
  - 3개의 모드중 기본이 되는 모드이다. 옵션을 주지 않으면 이모드가 기본적으로 적용되기 때문이다.
  - mixed 모드는 작업 디렉토리는 유지하면서 인덱스를 HEAD와 함께 되돌린다.
- `--hard`
  - hard 모드는 조심해서 사용해야 한다. 작업 디렉토리와 인덱스를 모두 유지하지 않고 이전 커밋으로 HEAD를 되돌리기 때문이다.
  - 작업하던 내용 모두를 정리하고자 할때만 의도적으로 사용해야 한다.
- `--soft`
  - 현재의 인덱스 상태아 작업 디렉토리 내용을 그대로 보전한채 커밋만 취소할 경우 사용한다.

### 파일 복원 (add 취소)

```bash
# index.html 파일을 Unstaged (Untracked) 상태로
git reset -- index.html

# 취소하고, Working Directory로 되돌림
git reset HEAD index.html
```

### 전체 복원 (commit 취소)

```bash
# commit-id 이후의 커밋을 취소
# 해당 commit-id는 유지됨
git reset commit-id

# 마지막 커밋을 취소
# 현재 Staging Area에 있는 파일도 취소됨
git reset HEAD^

# 마지막 3개의 커밋을 취소
git reset HEAD~3

# 마지막 커밋을 취소
# Working Directory, Staging Area에 있는 파일 유지
git reset --soft HEAD^

# 마지막 커밋을 취소
# Working Direcctory, Staging Area에 있는 파일 취소
git sets --hard HEAD^

# ORIG_HEAD : Pull, Merge 작업을 가르키는 포인터
# Pull 또는 Merge로 인해 잘못 병합한 커밋을 취소
git reset --hard ORIG_HEAD
```

## revert

`revert`는 Commited (이미 커밋된) 상태의 파일을 특정 시점으로 복원하며, 복원된 내용을 새로운 커밋으로 추가한다.

### 전체 복원 (commit 취소)

```bash
# 최신 커밋 이력은 유지하고 내용을 취소
# 취소한 내용으로 커밋을 추가
# 커밋을 이미 푸시한 경우 사용
git revert HEAD

# Working Directory, Staging Area에 추가된 모든 파일의 변경점을 최소화
# 신규 파일은 취소하지 않음
git reset --hard HEAD

# Untracked (Unstaged) 파일을 삭제
# -d 옵션을 추가하면 디렉토리까지 삭제
git clean -f
git clean -f -d
```

## checkout

`checkout`은 브랜치를 변경하고, 특정 브랜치의 내용으로 현재 브랜치의 파일을 변경한다.

### 파일 복원 (add 취소)

```bash
# Staged 상태의 파일을 수정 했을 때
# 수정 내용을 취소하고 Staged 한 파일로 복원
git checkout -- index.html

# 취소하고, Working Directory에 추가된 파일도 같이 취소
git checkout HEAD index.html
```
