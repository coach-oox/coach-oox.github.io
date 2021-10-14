---
layout: post
title: "Express 클라이언트에 상태 코드 (Status Code) 전송하기"
category: [node, express]
tags: [node, express]
comments: true
---

```javascript
if (password !== confirmPassword) {
  return response.status(400).render("createAccount", {
    pageTitle,
    errorMessage: "Password confirmation does not match.",
  });
}
```

서버에서 클라이언트 측에 `response`를 보낼 때, 상태 코드를 포함하기 위해서는 위 코드 예제와 같이 `response.status()` 메소드를 사용한다.

```javascript
res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
```

## status

```javascript
return response.status(404).render("404");
```

`status()`는 Response의 HTTP 상태를 설정 (전송X)한다. 따라서 위 코드 예제는 클라이언트에 전달할 응답의 상태 코드를 `404`로 설정하고, `404` 페이지를 랜더링 한다.

## sendStatus

```javascript
return response.sendStatus(404);
```

`sendStatus()`는 상태를 설정하고, 클라이언트에 전송한다. 따라서 위 코드 예제는 처리 결과에 대한 데이터를 전달하거나 페이지를 랜더링 하지 않고, 상태 코드만을 전달한다. (클라이언트 측에서 처리)
