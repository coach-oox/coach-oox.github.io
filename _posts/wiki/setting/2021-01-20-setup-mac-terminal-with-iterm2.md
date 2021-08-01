---
layout: post
title: "iTerm2 세팅 방법"
category: [wiki, setting]
tags: [mac, terminal, iterm]
comments: true
---

## iTerm2 설치와 설정

가장 먼저 다음의 명령어로 `homebrew`를 이용해 iTerm2를 설치한다. 최신 버전이 아닌 다른 버전을 설치하고 싶거나, `homebrew`를 사용하지 않는다면 [공식 홈페이지](https://iterm2.com/downloads.html)를 참고하자.

```bash
$ brew install --cask iterm2
```

## 테마 설치와 적용

다음으로는 컬러 테마를 변경하기 위해서 [iTerm2 Color Schemes](https://iterm2colorschemes.com/)에서 마음에 드는 테마를 골라 `.itermcolors` 파일을 다운로드 한다. 설치는 다운로드 한 파일을 더블 클릭하면 된다.

이제 iTerm2를 실행하고 iTerm2 - Preferences 메뉴의 Profiles - Colors 탭으로 이동한다. 그런 다음 오른쪽 하단에 있는 Color Presets ... 메뉴를 선택해 다운로드 및 설치했던 테마 (컬러 스키마)를 선택한다.

## 한글 파일 및 폴더 깨짐 방지

한글로 된 파일명과 폴더 (디렉토리) 이름의 자음과 모음이 분리되는 (예 : `ㅍㅗㄹㄷㅓ`) 현상을 없애려면 Profiles - Text 탭에서 Unicode normalization form 항목을 NFC로 설정한다.

## Shell 설정

먼저 zsh를 업데이트하고 zsh-completions를 설치한다.

```bash
brew install zsh zsh-completions
```

이제 다음의 명령어로 oh-my-zsh를 설치한다. (`Permission denied` 에러 발생시 `sudo`로 설치)

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

설치를 완료하면 다음과 같은 문구가 뜨는데, `y`를 입력해 기존에 사용하던 Shell을 zsh로 변경한다.

```bash
Time to change your default shell to zsh:
Do you want to change your default shell to zsh? [Y/n]
```

## 플러그인 설치

oh-my-zsh를 사용하는 가장 큰 이유는 사용자 편의에 따라 다양한 플러그인을 조합해 사용할 수 있기 때문이다. brew, bundler 등의 [oh-my-zsh 기본 내장 플러그인](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)을 제외하고 가장 많이 쓰이는 플러그인은 다음과 같다.

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
- [autojump](https://github.com/wting/autojump)

각각은 다음의 명령어로 설치할 수 있다. (`Permission denied` 에러 발생시 `sudo`로 설치)

```bash
# zsh-autosuggestions
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# autojump
brew install autojump
```

마지막으로 설치한 플러그인을 `~/.zshrc` 파일에 다음과 같이 추가한다.

```bash
plugins=(
    git
    autojump
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```

## 기타 선택 사항

위의 항목들이 터미널을 더욱 편리하게 쓰기 위한 보편적 세팅에 해당한다면, 다음의 항목들은 취향에 따라 골라 적용하면 되는 부분들이다.

### Shell Prompt 테마 변경

기본적으로 적용되는 테마 `robbyrussell`이 마음에 들지 않는다면 [oh-my-zsh Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)에서 마음에 드는 프롬프트 테마를 선택해 설치하면 된다. 설치한 후에는 `.zshrc` 파일의 다음 항목을 적용하고자 하는 테마 이름으로 변경한다.

```bash
ZSH_THEME="robbyrussell"
```

### 마지막 로그인 항목 삭제

터미널 최상단에 뜨는 마지막 로그인 (Last login 어쩌구 저쩌구 ...) 항목을 생략하려면 다음의 명령어로 루트 위치에 `.hushlogin` 파일을 생성한다.

```bash
touch .hushlogin
```

### 파인더에서 바로 터미널 열기

다음의 명령어로 OpenInTerminal을 설치한다.

```bash
brew install --cask openinterminal-lite
```

설치된 앱을 `cmd` 키를 누른 상태로 파인더의 상단 메뉴에 가져다 놓으면 끝.

### OSX 플러그인 사용하기

oh-my-zsh 번들 플러그인에 포함되어 있는 OSX (Mac 유저를 위한 유용한 단축키 모음)를 사용하면 다음과 같은 명령어를 사용할 수 있다.

- `tab` : 새 탭 열기
- `cdf` : 현재 파인더 위치로 디렉토리 이동
- `ofd` : 현재 디렉토리를 파인더에서 열기
- `pdf` : 가장 최근 파인더의 PATH
- `pfs` : 현재 파인더 디렉토리 PATH
- `pushdf` : 파인더에 파일 이동

번들에 포함되어 있기 때문에 별도로 플러그인을 설치할 필요가 없고, `.zshrc` 파일에 다음과 같이 추가만 해주면 된다.

```bash
plugins=(
    git
    autojump
    zsh-autosuggestions
    zsh-syntax-highlighting
    osx
)
```
