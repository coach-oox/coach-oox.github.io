---
layout: post
title: "SPA · MPA · PWA · CSR · SSR에 대한 이해"
category: [development, web]
tags: [development, web, csr, ssr, spa, mpa, pwa]
comments: true
---

## SPA vs. MPA

SPA는 Single Page Application, MPA는 Multiple Page Application의 약자로, 애플리케이션이 몇 개의 페이지로 구성되었는지로 구분하는 용어이다. 이 둘의 주요 특징은 다음과 같다.

### SPA 개요

SPA는 한 개의 페이지로 구성된 애플리케이션을 의미하며, 애플리케이션을 구동하는데 필요한 모든 정적 리소스들을 페이지 최초 로드시 한 번에 다운로드하고, 새로운 페이지에 대한 요청이 생겼을 때 → 페이지를 갱신하는 데 필요한 데이터만 전달 받아 화면을 갱신한다. 이와 같은 특징에 의해 일반적으로 SPA는 CSR 방식으로 렌더링 한다고 표현한다.

- 화면 깜빡임 없음
- 최초 로드 비교적 느림
- 모바일에 적합 (트래픽 절약, 빠른 인터렉션)
- SEO 관점에서 불리함
- 보안 이슈 (쿠키)

> 자바스크립트 파일 번들링으로 인해 최초 로드가 느려지는 부분에 대해서는 WebPack의 [Code Splitting](https://webpack.kr/guides/code-splitting/) 기능을 활용할 수 있고, SEO의 경우 필요하다면 SSR 방식으로 구현함으로써 보완할 수 있다.

### MPA 개요

MPA는 여러 개의 페이지로 구성된 애플리케이션을 의미하며, 새로운 페이지를 요청할 때마다 서버에서 렌더링된 정적 리소스를 다운로드한다. i.g., 페이지를 새로고침하거나 이동이 발생하면 전체 페이지를 다시 렌더링하고 다운로드한다. 이와 같은 특징에 의해서 일반적으로 MPA는 SSR 방식으로 렌더링 한다고 표현한다.

- 화면 깜빡임
- 최초 로드 비교적 빠름
- SEO 관점에서 유리함 (크롤링 적함)
- 모바일 앱 개발시 SPA 보다 수고 비용 높음

### SPA를 SSR 방식으로 렌더링하는 방법

조금 헷갈릴 수도 있는 개념인데, SPA가 일반적으로 CSR 방식을 사용하긴 하지만, 반드시 SPA = CSR이고, MPA = SSR인 것은 아니다. 따라서 SPA을 SSR 방식으로 구현할 수도 있다. e.g., CSR 방식을 사용하는 React 또는 Vue에서 SSR 방식으로 렌더링하기 위해서 [Next.js](https://nextjs.org/) 또는 [Nuxt.js](https://nuxtjs.org/docs/2.x/get-started/installation)를 사용할 수 있다.

## PWA

PWA는 Progressive Web Application의 약자로, 웹과 네이티브 앱의 기능을 모두 갖춘 형태의 애플리케이션을 의미한다. i.g., 어떤 웹 서비스를 PC에서 URL로 접근하여 사용할 수도 있지만, 모바일에 설치해서 앱처럼 접근하여 사용할 수도 있다.

## CSR vs. SSR

CSR은 Client Side Rendering, SSR은 Server Side Rendering의 약자로, 렌더링의 주체가 클라이언트이냐 - 서버이냐에 따라 구분하는 용어이다. 이 둘의 동작을 아주 개략적으로만 표현하면 다음과 같다.

- CSR : 뼈대만 받아서 클라이언트에서 동적으로 DOM 생성
- SSR : 서버에서 다 그려진 DOM을 클라이언트에 전달

### 언제 무엇을 선택해야 할까?

- 빠른 인터렉션이 필요한 경우 : SPA + CSR
- 블로그 등 SEO가 요구되는 경우 : SSR
- 모바일 친화적이어야 하는 경우 : SPA + PWA
