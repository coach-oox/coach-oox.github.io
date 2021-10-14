---
layout: post
title: "Oh-My-Zsh 사용자 이름 삭제 + 현재 디렉토리만 표시하기"
category: [development]
tags: [mac, terminal, iterm, setting]
comments: true
---

## 현재 디렉토리만 표시하기

`~/.oh-my-zsh/themes` 디렉토리에서 사용하는 테마 파일을 연다.

```bash
cd ~/.oh-my-zsh/themes
vim agnoster.zsh-theme
```

다음과 같은 부분을 찾는다.

```bash
# Dir: current working directory
prompt_dir() {
  prompt_segment blue $CURRENT_FG '%~'
}
```

아래와 같이 `'%~'` 부분을 수정한다.

```bash
# Dir: current working directory
prompt_dir() {
  prompt_segment blue $CURRENT_FG '%c'
}
```

## 사용자 이름 삭제하기

`.zshrc` 파일에 다음 코드를 추가한다.

```bash
prompt_context() {}
```
