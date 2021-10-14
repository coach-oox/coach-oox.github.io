---
layout: post
title: "Apollo Client를 사용한 전역 상태 관리"
category: [apollo]
tags: [apollo, state-management]
comments: true
---

Apollo Client는 GraphQL 서버와 상호 작용을 하는 상태 관리 라이브러리이다. 하지만 일부 기능은 원격 서버 없이 사용할 수 있고, 원격 서버가 없이고 로컬 상태를 관리할 수 있다. (i.g., Apollo Client만 사용해서 전역 상태를 관리할 수 있다.)

> At its core, Apollo Client is a state management library that happens to use GraphQL to interact with a remote server. Naturally, some application state doesn't require a remote server because it's entirely local. - [Managing local state](https://www.apollographql.com/docs/react/local-state/local-state-management/)
