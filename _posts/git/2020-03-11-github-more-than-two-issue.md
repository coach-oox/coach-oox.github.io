---
layout: post
title: "GitHub 여러 개의 Issue 한 번에 처리 (Close)하는 방법"
category: [git]
tags: [git, github]
comments: true
---

```bash
git checkout -b "issue-11"
```

이슈 해결을 위한 브랜치를 생성한다.

```bash
git add .
git commit -m "Edit Documents (#12, #14)"
```

해당 브랜치에서 작업 후, `add` 및 `commit` 하고, Pull Request를 보내기 위해 Upstream으로 `push` 한다.

```markdown
- Close #12
- Close #14
```

Pull Request Comment에 해결된 이슈들을 키워드와 함께 작성한다. `close` 외에도 자동 이슈 처리를 위해서 사용할 수 있는 키워드는 다음과 같다.

- `close`
- `closes`
- `closed`
- `fix`
- `fixes`
- `fixed`
- `resolve`
- `resolves`
- `resolved`
