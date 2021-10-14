---
layout: post
title: "Node Morgan (HTTP Request Logger Middleware)"
category: [node]
tags: [node, morgan]
comments: true
---

Node용 HTTP 요청에 대한 로거 미들웨어.

```bash
npm install morgan
```

```javascript
import morgan from "morgan";
app.use(morgan("dev"));
```
