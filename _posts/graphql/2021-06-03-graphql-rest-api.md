---
layout: post
title: "GraphQL이란? REST API와의 비교"
category: [graphql]
tags: [graphql, rest]
comments: true
---

## GraphQL

GraphQL은 쿼리 언어이자 애플리케이션 프로그래밍 인터페이스(API)를 위한 서버측 런타임으로, 클라이언트에게 요청한 만큼의 데이터를 제공하는 역할을 하며, REST API를 대체할 수 있다. i.g., 클라이언트는 GraphQL과 대화하고, GraphQL은 다른 API와 대화할 수 있다.

## REST API vs. GraphQL

백엔드에 구축된 REST API를 사용하는 (데이터를 REST API에 요청하는) 경우, 필요하지 않은 정보들까지 받아야 하는 Over Fetching 문제나, 데이터가 나눠져 있어서 여러 번에 걸쳐 요청을 처리해야 하는 Under Fetching 문제가 발생할 수 있다.

또한 REST API를 구축할 때는 리소스별로 서로 다른 Endpoint를 가져야 하기 때문에 다음과 같이 비슷하지만 구분되어야 하는 API가 무수히 많이 생기게 된다.

```bash
/product/
/product/detail/
/product/images/
/product/options/
/product/price/
```

이런 식으로 비슷하고 많은 양의 API는 관리하기도 힘들고, 사용하기도 복잡하다. GraphQL은 일반적으로 Endpoint를 하나만 생성하고, 클라이언트가 필요한 정보에 대한 쿼리를 작성해 호출하면 해당 쿼리에 대한 응답을 리턴하는 방식이기 때문에 위에서 언급한 Over Fetching, Under Fetching, 많은 양의 Endpoint 생성 문제를 모두 해결할 수 있다.
