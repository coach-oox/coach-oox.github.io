---
layout: post
title: "GraphQL 서버 기본 사용법 (graphql-yoga 사용)"
category: [graphql]
tags: [graphql, backend]
comments: true
---

`graphql-yoga`를 사용하면 리액트 프로젝트를 생성할 때와 같이 간단하게 GraphQL 프로젝트를 시작할 수 있다.

```bash
npm init -y
npm install graphql-yoga
```

이때 편리한 서버 테스트를 위해서 선택적으로 `nodemon`을 적용하거나, Node 환경에서 ES6+ 문법을 사용하기 위해서 Babel을 적용할 수 있다.

```bash
// sudo npm install -g nodemon
npm install @babel/core @babel/node @babel/preset-env -D
```

`package.json`에 실행을 위한 스크립트를 추가한다.

```json
{
  "scripts": {
    "start": "nodemon --exec babel-node index.js"
  }
}
```

`nodemon`은 `.graphql` 파일이 수정되었을 때는 자동으로 변화를 감지하지 못한다. 이를 해결하기 위해서는 `nodemon.json` 파일을 다음과 같이 작성한다.

```json
{
  "watch": ["**/*"],
  "ignore": [".git", "node_modules"],
  "ext": "js graphql"
}
```

## 서버 생성

GraphQL 서버를 생성하기 위해서는 다음과 같이 `new GraphQLServer()`를 사용하면 된다. 이때 파라미터로 `typeDefs`에는 요청을 처리하기 위한 (보내거나 받을) 데이터에 대한 명세인 스키마를, 데이터를 가져오는 구체적인 과정을 담당하는 함수인 `resolvers`를 전달한다.

```js
import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers,
});

server.start(() => console.log("server is running!"));
```

## Schema 작성

> 만약 VS Code를 사용한다면 편의를 위해 [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) 확장을 추가하는 것이 좋다.

`schema.graphql` 파일을 생성하고, 다음과 같이 타입을 정의한다. (마치 C언어 헤더 파일처럼) 이때 느낌표는 Required 필드를 의미한다.

```graphql
type Query {
  greeting: String!
}
```

## Resolver 작성

`resolvers.js` 파일을 생성하고, 다음과 같이 `resolvers`를 작성한다. GraphQL 서버는 요청을 받았을 때, Query 또는 Mutation 정의를 찾고, 해당 Query 또는 Mutation에 대한 Resolver를 찾아 실행한다.

```js
const resolvers = {
  Query: {
    greeting: () => "Hi 😎",
  },
};

export default resolvers;
```

## Playground 실행

이제 서버를 실행시키면, Playground (`graphql-yoga`를 사용하면 사용할 수 있는 툴로, 쿼리 요청과 응답 리턴을 테스트할 수 있다.)가 실행된다. 일반적인 설정이라면 `http://localhost:4000/`에서 확인할 수 있다. 테스트를 위해서 다음과 같은 쿼리를 작성하고 돌려보자.

```graphql
query {
  greeting
}
```

그러면 다음과 같은 결과를 확인할 수 있다. i.g., 위와 같은 쿼리를 전달 (요쳥)하면, GraphQL 서버에서는 이 쿼리를 찾은 다음 → 해당 쿼리에 맞는 Resolver를 찾아서 해당 부분을 리턴한다.

```json
{
  "data": {
    "greeting": "Hi 😎"
  }
}
```

참고로 GraphQL은 기본적으로 `Content-Type: 'application/json'`를 사용한다. ([GraphQL POST request](https://graphql.org/learn/serving-over-http/#post-request))

#### 배열을 리턴하는 경우

```graphql
type Movie {
  id: Int!
  title: String!
  genres: [String!]
}

type Query {
  post: [Movie]!
}
```

```js
const movies = [
  {
    id: 1,
    title: "hello movie 1",
    genres: ["action", "drama"],
  },
  {
    id: 2,
    title: "hello movie 2",
    genres: ["action", "drama"],
  },
  {
    id: 3,
    title: "hello movie 3",
    genres: ["action", "drama"],
  },
];

const resolvers = { Query: { post: () => movies } };
```

쿼리 요청과 리턴은 다음과 같다.

```graphql
query {
  post {
    title
  }
}
```

```json
{
  "data": {
    "post": [
      {
        "title": "hello movie 1"
      },
      {
        "title": "hello movie 2"
      },
      {
        "title": "hello movie 3"
      }
    ]
  }
}
```

#### 필드에 인자를 전달하는 경우

동일한 서버를 다음과 같이 수정한다.

```graphql
type Movie {
  id: Int!
  title: String!
  genres: [String!]
}

type Query {
  post: [Movie]!
  search(id: Int!): Movie
}
```

위 명세에서, `Query` 타입은 `id`라는 파라미터를 가지는 `search`를 제공한다.

```js
const movies = [
  /* ... */
];

const resolvers = {
  Query: {
    post: () => movies,
    // * 주의 : filter로 리턴하면 배열로 받아야 하기 때문에 type 수정이 필요함
    search: (obj, { id }) => movies.find((movie) => movie.id === id),
  },
};
```

Resolver 함수의 시그니처는 다음과 같다. 따라서 `search`에 대한 Resolver를 구현할 때, `id` 앞에 사용된 `obj`는 [Root Query](https://graphql.org/learn/execution/#root-fields-resolvers)로 예제에서 사용하지는 않지만, 두 번째 파라미터인 `args` (i.g., 우리가 전달하고자 하는 `id` 값이 들어가는)를 사용하기 위해 작성된다. 이때 사용하지 않는다는 것을 강조하기 위해서 `obj` 등의 이름을 사용하는 것보다 `_`와 같이 명시하는게 좋다.

```js
someting(obj, args, context, info) {}
```

쿼리 요청과 리턴은 다음과 같다.

```graphql
query {
  search(id: 2) {
    title
  }
}
```

```json
{
  "data": {
    "search": {
      "title": "hello movie 2"
    }
  }
}
```
