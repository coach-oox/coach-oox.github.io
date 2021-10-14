---
layout: post
title: "GraphQL Query · Mutation 차이점"
category: [graphql]
tags: [graphql]
comments: true
---

## Query

Query는 객체에 대한 특정 필드를 요청하는 행위를 말한다. i.g., `SELECT`문에 사용되는 것이며, REST API에서 `GET` 요청을 보내는 것과 같다.

```js
const hello = {
  title: "hello movie",
  genres: ["action", "drama"],
};

const resolvers = {
  Query: {
    post: () => hello,
  },
};
```

Resolver가 위와 같을 때, `hello`의 `title`은 다음과 같이 요청할 수 있다.

```graphql
query {
  post {
    title
  }
}
```

요청에 대한 결과는 다음과 같다.

```json
{
  "data": {
    "post": {
      "title": "hello movie"
    }
  }
}
```

## Mutation

Query가 서버에 데이터를 요청하는 용도라면, Mutation은 서버 측 데이터를 수정하기 위해 사용된다. i.g., Mutation은 `INSERT`, `UPDATE`, `DELETE` 연산에 사용하며, REST API에서 `POST`, `PUT`, `DELETE` 요청을 보내는 것과 같다.

```js
const resolvers = {
  Query: {
    /* ... */
  },
  Mutation: {
    addMovie: (obj, { title, rate }) => addMovie(title, rate),
  },
};
```

```js
export function addMovie(title, rate) {
  const newMovie = {
    id: uuid(),
    title,
    rate,
  };

  movies.push(newMovie);

  return newMovie;
}
```

Mutation `addMovie()`은 전달받은 `title`, `rate`를 가지고 새로운 객체를 만들어 `movies` 데이터베이스에 추가하고, 추가된 (새로운) 객체를 리턴한다.
