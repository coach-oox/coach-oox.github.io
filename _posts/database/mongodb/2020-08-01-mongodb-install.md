---
layout: post
title: "로컬에 MongoDB 설치하기 (MongoDB Community · MongoD)"
category: [database, mongodb]
tags: [database, nosql, mongodb]
comments: true
---

```console
$ brew tap mongodb/brew
$ brew install mongodb-community@4.4
```

로컬에 Homebrew 사용해서 설치. (참고 : [MongoDB Installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition))

```console
$ brew services start mongodb-community@4.4
$ brew services stop mongodb-community@4.4
```

macOS service로 실행.

```console
$ mongod
$ mongo
```

2개 명령어 정상적으로 실행되는지 확인.
