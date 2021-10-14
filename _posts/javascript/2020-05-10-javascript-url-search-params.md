---
layout: post
title: "자바스크립트 URLSearchParams() 사용법"
category: [javascript]
tags: [javascript]
comments: true
---

URL의 쿼리 파라미터들을 읽거나 수정할 때 사용되는 메소드.

```javascript
const URL = "http://127.0.0.1/search/?keyword=검색어";

const search = location.search;
console.log(search); // ?keyword=검색어

// URLSearchParams를 사용해 객체로 변환
const params = new URLSearchParams(search);
console.log(params.get("keyword")); // 검색어

// 파라미터 값 변경
params.set("keyword", "날씨");

// 변경된 파라미터를 문자열로 변환
const newParams = params.toString();

// 새로운 주소
console.log(location.pathname + newParams);
```

## 파라미터를 객체로 만들어 새로운 URL 생성하기

```javascript
export function startGithubLogin(request, response) {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: "2234a43af550c12f1c66",
    allow_signup: false,
    scope: "read:user user:email",
  };

  const params = new URLSearchParams(config).toString();
  const fianlUrl = `${baseUrl}?${params}`;

  return response.redirect(fianlUrl);
}
```
