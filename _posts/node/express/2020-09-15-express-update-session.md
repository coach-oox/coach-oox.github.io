---
layout: post
title: "Express 클라이언트의 세션 정보를 업데이트하는 방법"
category: [node, express]
tags: [node, express, express-session, session]
comments: true
---

세션의 정보를 업데이트하는 것이 필요한 이유를 이해하기 위해서, 다음과 같은 상황을 가정해보자.

1. 로그인 정보가 세션에 저장되어있다. 세션에 정보를 저장하는 시점은 사용자가 로그인에 성공한 시점이다.
2. 이때 사용자는 정보 변경 페이지에서 로그인 정보를 수정하고자 한다. 이때 데이터베이스에 저장된 사용자의 정보는 세션에 저장된 로그인 정보 (`_id`)를 토대로 변경할 수 있다.
3. 데이터베이스에서는 수정되었지만, 세션에 저장된 정보는 사용자가 로그인한 시점에 저장된 정보가 그대로 유지되고 있기 때문에, 세션 정보를 사용하는 HTML / PUG (View) 등에서는 정보가 업데이트되지 않은 것으로 표현된다.

## 클라이언트

```pug
block content
    form(method="POST")
        input(name="name", placeholder="Name", type="text", value=user.name, required)
        input(name="username", placeholder="Username", type="text", value=user.username, required)
        input(name="email", placeholder="Email", type="email", value=user.email, required)
        input(name="location", placeholder="Location", type="text", value=user.location)
        input(type="submit", value="Update Profile")
```

사용자 정보 수정 페이지는 미들웨어를 통해 세션에 저장된 정보를 `response.locals`에 저장해 사용하고 있다. 따라서 사용자 정보가 수정된다면 세션이 수정되어야 `locals`에 있는 정보에도 반영된다.

## 데이터베이스에서 객체를 가져와 변경하는 방법

```javascript
export async function postEdit(request, response) {
  const {
    session: {
      user: { _id },
    },
    body: { name, username, email },
  } = request;

  // 세션에 저장된 _id를 사용해 데이터베이스에 해당 사용자의 정보를 업데이트
  await User.findByIdAndUpdate(_id, {
    name,
    username,
    email,
  });

  // 세션에 저장된 _id를 사용해 해당 사용자의 정보를 가져와 세션에 overwrite
  const user = await User.findById(_id);
  request.session.user = user;

  return response.redirect("/");
}
```

이 경우 직관적이지만 두 번의 데이터베이스 작업과 `await`을 사용한다.

## Spread Syntax를 사용하는 방법

```javascript
request.session.user = {
  ...request.session.user,
  name,
  username,
  email,
  ㄴ,
};
```

Spread Syntax를 사용하면 동일한 작업을 위와 같이 해결할 수 있다. 위 코드 예제는 기존의 `request.session.user`를 가져온 다음, `name`, `username`, `email` 부분을 덮어쓰고, 해당 객체를 `request.session.user` 객체에 덮어씌우는 방식이다.

## Mongoose 기능을 사용하는 방법

```javascript
const updatedUser = await User.findByIdAndUpdate(
  _id,
  {
    name,
    username,
    email,
  },
  { new: true }
);

request.session.user = updatedUser;
```

Mongoose에서 제공하는 메소드인 `findByIdAndUpdate()`는 단순히 데이터베이스에 업데이트만 할 수도 있지만, `new` 옵션을 사용해 위와 같이 업데이트가 완료된 객체를 리턴받을 수도 있다. **참고** : [Mongoose - findByIdAndUpdate()](https://mongoosejs.com/docs/api/model.html#model_Model.findOneAndUpdate)
