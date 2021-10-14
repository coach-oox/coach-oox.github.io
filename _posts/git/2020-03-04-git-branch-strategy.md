---
layout: post
title: "Git Branch 분기와 병합 예제 (--no--ff 사용법)"
category: [git]
tags: [git]
comments: true
---

로그인 기능을 개발하는 과정을 가정해보자.

```console
# -b : 브랜치 생성
# git checkout -b 생성할-브랜치 베이스-브랜치
git checkout -b feature/login develop
```

로그인 기능 개발을 위해 `develop` 브랜치에서 분기하는 `feature/login` 브랜치를 생성하고, 작업 브랜치를 `feature/login` 브랜치로 변경한다.

```bash
git add .
git commit -m "feat: 로그인 기능 추가"

# develop 브랜치로 작업 브랜치 변경
git checkout develop

# feature/login 브랜치와 병합
git merge feature/login

# feature/login 브랜치 삭제
git branch -d feature/login

# 원격 저장소로 푸시
git push origin develop
```

`feature/login` 브랜치에서 작업을 마치면 `add`와 `commit`한다. `develop` 브랜치로 Merge 한다음, 필요없는 `feature/login` 브랜치는 삭제하고, 원격 저장소로 푸시한다.

### --no-ff

브랜치를 Merge 할 때, `--no-ff` 플래그를 사용하면, `feature/login` 브랜치에 존재하는 커밋 이력을 모두 합쳐 새로운 커밋 객체를 만든 다음, `develop` 브랜치에 Merge하게 된다. 일반적인 Merge와 `--no-ff` 플래그를 사용하는 Merge의 차이점을 그림으로 나타내면 다음과 같다. (그림 출처 : [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/))

![](../../../assets/img/contents/merge.png)
