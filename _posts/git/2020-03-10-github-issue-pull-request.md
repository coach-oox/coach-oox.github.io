---
layout: post
title: "GitHub Issue 생성과 Pull Request 처리 방법"
category: [git]
tags: [git, github]
comments: true
---

## 이슈 생성과 처리의 흐름

1. Issue 생성
2. Branch 생성
3. Pull Request
4. Merge (Issue 처리)

## 이슈 생성시 추가할 수 있는 항목

- Assignees : 이슈 담당자
- Labels : 카테고리
- Milestone : 소속 파트 (예 : Version 1.0.0)

## Branch 생성

```bash
# Branch 생성 후 Checkout
git checkout -b issue-1
```

이슈 처리를 위한 브랜치 생성.

## Pull Request

```bash
git add .
git commit -m "Edit README.md (#12)"
```

작업 후 이슈 처리를 위한 브랜치에서 `add` 및 `commit` 한다.

```bash
git push --set-upstream origin issue-1
```

커밋 메시지 작성 후 Push. 이후 GitHub 저장소의 Pull Request 페이지에서 Compare & Pull Request 또는 New Pull Request 버튼을 눌러 Reuqest를 생성한다.

```markdown
- Close #12
```

이때, 자동 이슈 처리를 위해서 Pull Request Comment에 다음과 같은 키워드를 포함한다.

- `close`
- `closes`
- `closed`
- `fix`
- `fixes`
- `fixed`
- `resolve`
- `resolves`
- `resolved`

마지막으로 Merge Pull Request 버튼을 눌러 병합한다.
