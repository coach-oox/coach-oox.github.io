---
layout: post
title: "MongoDB 논리 연산자 사용법"
category: [database, mongodb]
tags: [database, nosql, mongodb, express]
comments: true
---

> [Logical Operators](https://docs.mongodb.com/manual/reference/operator/query-logical/)

```javascript
export async function postJoin(request, response) {
  const pageTitle = "Create Account";
  const { name, username, email, password, confirmPassword, location } =
    request.body;

  // 비밀번호와 비밀번호 확인이 일치하지 않을 경우 에러 메시지를 전송
  if (password !== confirmPassword) {
    return response.status(400).render("createAccount", {
      errorMessage: "Password confirmation does not match.",
    });
  }

  // username과 email이 데이터베이스에 존재하는지 각각 확인
  const usernameExists = await User.exists({ username });
  const emailExists = await User.exists({ email });

  // username이 존재하는 경우 에러 메시지 발송하고 리턴
  if (usernameExists) {
    return response.status(400).render("createAccount", {
      errorMessage: "This username is already taken.",
    });
  }

  // email이 존재하는 경우 에러 메시지 발송하고 리턴
  if (emailExists) {
    return response.render("createAccount", {
      errorMessage: "This email is already taken.",
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });

  return response.redirect("/login");
}
```

위 예제 코드에서는 각각 `Model.exists()` 메소드를 사용해서 `username`과 `email`이 각각 데이터베이스에 존재하는지 여부를 확인한 뒤, 이미 존재하는 경우 에러 메시지를 포함해 리턴한다. 이때, `username` 또는 `email`이 이미 존재하는 경우를 나타내기 위해서는 논리 연산자 `$or`를 사용해 다음과 같이 사용한다.

```javascript
const userExists = await User.exists({ $or: [{ username }, { email }] });

if (userExists) {
  return response.status(400).render("createAccount", {
    errorMessage: "This username or email is already taken.",
  });
}
```
