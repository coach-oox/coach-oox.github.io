---
layout: post
title: "GraphQL를 위한 Apollo Client 기본 사용법"
category: [apollo, graphql]
tags: [apollo, graphql]
comments: true
---

## Apollo 세팅

리액트 환경에서 GraphQL을 사용하기 위해서 [Apollo](https://www.apollographql.com/docs/react/get-started/)를 사용할 수 있다. 다음 명령어를 사용해 리액트 프로젝트를 구성하고 필요한 패키지를 설치한다.

```bash
npx create-react-app project
cd project
npm install @apollo/client graphql
```

선택적으로 [Apollo Client Devtools](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm/related)를 사용할 수도 있다.

### ApolloClient 작성

요청을 보낼 때 마다 특정 `URL`을 작성해야 하는 REST API와 다르게, GraphQL에 요청을 보내기 위해서 (Apollo Client를 사용할 때)는 다음과 같이 서버에 대한 `URL`을 한 번만 작성하면 된다.

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default client;
```

### ApolloProvier 사용

`ApolloProvier`를 사용해서 다음과 같이 컴포넌트를 래핑한다.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./components/App";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
```

## GraphQL 서버로 쿼리 전송

```jsx
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  query {
    getMovies {
      id
      title
      large_cover_image
    }
  }
`;

function Home() {
  // loading?, error?, data?
  const { loading, data } = useQuery(GET_MOVIES);

  /* ... */
}
```

### 인자를 받는 쿼리를 처리하는 경우

`query` 옆에 작성되는 이름 (`getMovieById`)과 파라미터에 대한 명세 (`($id: Int!)`)는 Apollo 사용에 관한 룰이다.

```jsx
const GET_MOVIE = gql`
  query getMovieById($id: Int!) {
    getMovieById(id: $id) {
      title
      description_intro
      year
      rating
      genres
      runtime
      background_image
      large_cover_image
    }
  }
`;

function Detail() {
  /* ... */

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id, 10) },
  });

  /* ... */
}
```

### Local-Only Fileds

`Local-Only Fileds`를 사용하면 서버에서 넘어온 데이터를 클라이언트 측에서 변경할 수도 있다.

#### 동적 필드를 추가하는 방법

다음 코드는 Apollo가 사용하는 캐시에 초기값을 `false`로 가지는 `interested`라는 새로운 필드를 생성한다. 이때 해당 내용은 `ApolloClient()`의 `resolvers` 옵션에 작성하는 데, 이 내부에는 클라이언트 측에서 작성한 Resolver들을 정의할 수 있다.

```js
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  resolvers: {
    // Movie는 GraphQL 서버에 정의된 스키마이다.
    Movie: {
      interested: () => false,
    },
  },
});
```

동적으로 생성한 필드를 가져오기 위해서는 해당 필드가 클라이언트 측에 있음을 다음과 같이 명시해야 한다.

```js
const GET_MOVIES = gql`
  query {
    getMovies {
      id
      title
      interested @client
    }
  }
`;
```

#### Mutation을 추가하는 방법

```js
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  resolvers: {
    Mutation: {
      toggleInterested: (_, { id, interested }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            // modify는 반드시 함수여야 함
            toggle: () => !interested,
          },
        });
      },
    },
  },
});
```

사용할 때는 다음과 같이 `mutation`을 작성하고, `useMutation()`를 사용해 가져온다. (참고 : [cache.modify](https://www.apollographql.com/docs/react/caching/cache-interaction/#using-cachemodify))

```js
const LIKE_MOVIES = gql`
  mutation toggleInterested($id: Int!, $interested: Boolean!) {
    toggleInterested(id: $id, interested: $interested) @client
  }
`;

function Like({ id, interested }) {
  const [toggleInterested] = useMutation(LIKE_MOVIES, {
    variables: { id: parseInt(id, 10), interested },
  });

  /* ... */
}
```
