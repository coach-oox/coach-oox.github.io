---
layout: post
title: "React CORS 문제 해결을 위한 Proxy 서버 설정 방법 (Access-Control-Allow-Origin 에러)"
category: [react]
tags: [react, cors, proxy, error]
comments: true
---

```bash
Access to XMLHttpRequest at 'http://localhost:4000' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

`package.json`에 다음 항목을 추가한다.

```json
{
  "proxy": "http://localhost:4000"
}
```

지정할 URL은 접속하고자 하는 서버의 Base URL이며, 위와 같이 `proxy` 속성을 지정한 다음에는 요청을 보낼 때 해당 URL은 제외한 나머지 라우트 부분만 명시하면 된다. (e.g., `axios.get('/users')`)
