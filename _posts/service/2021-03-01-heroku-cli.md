---
layout: post
title: "Heroku 기본 사용법 (Heroku CLI)"
category: [service]
tags: [node, heroku]
comments: true
---

## Heroku CLI 설치

```bash
brew tap heroku/brew && brew install heroku
```

[Heroku CLI - Download and install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

```bash
heroku login
```

정상적으로 설치되었거나, 이미 Heroku CLI가 설치되어 있는 경우 위와 같이 `heroku login` 명령어가 정상적으로 동작한다.

## 새로운 Git 저장소 생성

```bash
cd my-project/
git init # 이미 있는 경우 생략
heroku git:remote -a my-project
```

참고로 Heroku는 무조건 git history에 있는 것만 볼 수 있다. 따라서 코드가 변경되면 커밋해야 Heroku가 인식할 수 있다.

## 실시간으로 로그 확인

```bash
heroku logs --tail
```

## 애플리케이션 배포

```bash
git add .
git commit -am "Make it better"
git push origin master
git push heroku master
```

## 환경 변수 설정

Heroku는 GitHub가 보는 파일만 볼 수 있기 때문에, `.gitignore`에 등록된 파일은 Heroku도 볼 수 없고, 따라서 정상적으로 작동되지 않는다. 따라서 Setting - Config Vars 항목에서 서버에서 사용해야 할 환경 변수를 별도로 등록해 줘야 한다.
