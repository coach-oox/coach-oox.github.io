---
layout: post
title: "Heroku MongoDB 환경 변수 등록하기"
category: [service]
tags: [node, heroku, mongodb]
comments: true
---

## 선행 조건

- Heroku 가입
- Heroku 앱 생성
- MongoDB Atlas 가입
- Organization, Project, Cluster 생성

## MongoDB

```bash
mongodb+srv://leetube:<password>@cluster0.xr2xb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

먼저 MongoDB의 Connect 탭에서 Connect your application 항목을 선택한다. 제공되는 String 코드를 복사한 뒤, `<password>` 부분을 지정한 DB 유저의 패스워드로 바꾼다.

## 환경 변수 등록

```bash
MONGODB_URL
```

그런 다음 Heroku 앱의 Setting - Config Vars 탭에서 MongoDB 접속을 위해 사용될 새로운 변수를 추가한다. 위와 같이 환경 변수를 Heroku에 등록하면, `process.env.MONGODB_URL`로 작성된 부분이 정상적으로 작동하게 된다.
