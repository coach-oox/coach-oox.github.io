---
layout: post
title: "MongoDB E11000 duplicate key 에러 해결 방법"
category: [database, mongodb]
tags: [database, nosql, mongodb, error]
comments: true
---

## 증상

```bash
UnhandledPromiseRejectionWarning: MongoError: E11000 duplicate key error collection: project.users index: usernname_1 dup key: { usernname: null }
```

`Model.create()` 또는 `Model.save()`로 새로운 데이터를 저장하려고 시도할 때 생기는 중복에 관한 에러. 기존에 존재하던 키 설정이 지워지지 않아 생기는 오류이다.

## 해결

```bash
db.dropDatabase()
db.users.dropIndexes()
```

`db` 자체를 깨끗하게 지우거나 (테스트 중 꼬인 경우) `collection`에서 인덱스를 제거함으로써 해결할 수 있다.
