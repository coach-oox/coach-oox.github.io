---
layout: post
title: "Node Bcrypt를 사용해 사용자 패스워드 해싱하기"
category: [node]
tags: [node, express, bcrypt]
comments: true
---

```bash
npm install bcrypt
```

사용자 암호를 안전하게 저장하기 위해서 해싱한 (암호화 한) 다음 저장해야 함. 해싱 해주는 라이브러리가 bcrypt.

## 암호화

```javascript
hashedPassword = await bcrypt.hash(this.password, 5);
```

## 암호와 해시가 일치하는지 확인하기

```javascript
export async function postLogin(request, response) {
  // 클라이언트 측에서 보낸 Body : 사용자가 입력한 계정 정보
  const { username, password } = request.body;

  // 데이터베이스에서 해당 아이디를 가진 데이터를 가져옴
  const user = await User.findOne({ username });

  // 해당 아이디를 가진 데이터가 없다면 에러 메시지를 전송
  if (!user) {
    return response.status(400).render("login", {
      errorMessage: "An account with this username does not exists.",
    });
  }

  // bcrypt.compare() 메소드를 사용해 매치 여부 확인
  const match = await bcrypt.compare(password, user.password);

  // 매치하지 않는다면 에러 메시지를 전송
  if (!match) {
    return response.status(400).render("login", {
      errorMessage: "Wrong password.",
    });
  }

  /*
   *   매치한다면 실행 될 부분
   */

  return response.redirect("/");
}
```
