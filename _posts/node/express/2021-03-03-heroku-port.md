---
layout: post
title: "Heroku code=H10 desc='App crashed' 에러 해결 방법"
category: [node, express, service]
tags: [node, express, heroku]
comments: true
---

```javascript
const PORT = process.env.PORT || 4000;
app.listen(PORT, listenServer);
```

Heroku에서는 필요에 따라 자동으로 포트 넘버를 (유동적으로) 설정하기 때문에 환경 변수 설정이 필요하다. `process.env.PORT`는 Heroku에서만 동작하며, (오로지 Heroku를 위한) Heroku를 사용하지 않을 때에는 설정한 포트로 열리도록 위 코드와 같이 설정한다.
