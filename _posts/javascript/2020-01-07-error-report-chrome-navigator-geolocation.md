---
layout: post
title: "navigator.geolocation 동작하지 않는 경우 해결 방법"
categories: [javascript]
tags: [javascript, error, chrome, https, localhost, navigator, geolocation]
comments: true
---

## 증상

`navigator.geolocation.getCurrentPosition()` 메소드 동작하지 않는 경우. (정확히는 동작하지 않는 것처럼 보임.) 웹 페이지가 로드되면 위치 정보 사용을 묻는 팝업은 정상적으로 뜨고, 취소를 눌렀을 때 `errorCallBack`은 동작하지만 `successCallBack`은 내부 로직은 동작하지 않는 경우.

## 원인 분석

우선 `errorCallBack` 함수는 동작한다는 점에서, 메소드가 아예 동작하지 않는 것은 아니고 위치 정보 사용 허용을 눌렀을 때 `successCallBack` 함수가 실행은 되지만 위치를 가져올 수 없는 상태라고 할 수 있다.

```bash
weather.js:14 [Violation] Only request geolocation information in response to a user gesture.
```

원인을 찾기 위해 `successCallBack`에 `console.log(position)`을 추가한 다음 구글 크롬 개발자 도구의 Console 탭에서 `Filter`에 `Verbose`를 포함해 `All levels`로 바꾸면 위와 같은 메시지를 확인할 수 있다. 결론적으로 작업하고 있는 서버 `localhost`가 HTTP로 연결되어 있어, Secure Context (HTTPS)로 연결되어야만 사용할 수 있는 `geolocation`을 사용할 수 없는 것이다.

## 해결 방법

`localhost`를 HTTPS로 연결되게끔 하기 위해서는 구글 크롬의 설정을 변경해주면 된다. 따라서 [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhost) 페이지로 이동해 해당 옵션을 Enabled 로 변경한 뒤 크롬을 Reload 해주면 해결할 수 있다. 이제 `localhost`가 HTTPS로 연결되어 정상적으로 `successCallBack` 내부 로직이 실행된다.
