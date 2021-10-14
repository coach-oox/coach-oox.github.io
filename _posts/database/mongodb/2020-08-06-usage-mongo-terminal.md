---
layout: post
title: "MongoDB CLI 특정 데이터베이스 · 컬렉션 데이터 삭제하는 방법"
category: [database, mongodb]
tags: [database, nosql, mongodb]
comments: true
---

```bash
$ mongo # CLI 실행
$ show dbs # 데이터베이스 목록 확인
$ use project # 사용할 데이터베이스 선택
$ show collections # 데이터베이스 내부에 존재하는 컬렉션 확인
$ db.users.find() # 컬렉션 내부 데이터들 확인
$ db.users.remove({}) # project > users 내 데이터 초기화
```
