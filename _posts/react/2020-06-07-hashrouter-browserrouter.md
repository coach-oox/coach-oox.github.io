---
layout: post
title: "React HashRouter와 BrowserRouter의 차이점"
categories: [react]
tags: [react, javascript]
comments: true
---

## 라우터의 종류

- `BrowserRouter`
- `HashRouter`
- `MemoryRouter`
- `NativeRoter`
- `StaticRouter`

## HashRouter

```bash
# 예 : abc.com/#/home
```

- URL 앞에 해쉬 (`#`)가 붙는다.
- 검색 엔진이 읽지 못한다.
- 해쉬 히스토리 지원하지 않는다.
- 새로고침해도 에러가 나지 않는다.
- 정적인 페이지에 적합하다. (미리 저장된 페이지가 그대로 보여지는 페이지)
- `gh-pages`를 사용할 때 좀 더 편하다.

## BrowserRouter

- 레거시 브라우저 (IE9 이하)에서는 사용할 수 없다.
- HTML의 History API를 사용해서 UI를 업데이트 한다.
- 동적인 페이지에 적합하다.
- 새로고침을 하면 경로를 찾지 못해 에러가 난다. (이를 해결하기 위해선 서버에서 추가적인 세팅이 요구된다. 페이지의 유무를 서버에 알려줘야 하며, 서버 세팅시 검색엔진에 신경써야 한다.)
- `gh-pages`를 사용할 때 복잡하다.
