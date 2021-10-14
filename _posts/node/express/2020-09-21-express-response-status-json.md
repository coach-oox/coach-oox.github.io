---
layout: post
title: "Express 클라이언트에 상태 코드와 함께 객체 전달하기"
category: [node, express]
tags: [node, express]
comments: true
---

## Backend

```javascript
app.use(express.json());
```

```javascript
return response.status(201).json({ title: something, name: somethings });
```

`json()` 메소드를 사용해서 객체를 전달한다.

# Frontend

```javascript
if (response.status === 201) {
  const { title, name } = await response.json();
  // ... 생략 ...
}
```
