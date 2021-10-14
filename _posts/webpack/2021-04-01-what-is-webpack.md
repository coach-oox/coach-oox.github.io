---
layout: post
title: "Webpack이란?"
category: [webpack]
tags: [webpack, gulp, javascript]
comments: true
---

![](../../../assets/img/contents/webpack.png)

WebPack은 자바스크립트 애플리케이션의 정적 모듈 번들러 (Static Module Bundler)로, 규모가 있는 시스템에 존재할 수 있는 많은 자바스크립트 파일들을 하나의 파일로 관리하기 위해 사용된다.

## Module이란?

- 애플리케이션을 구성하는 자원들
- HTML, CSS, 자바스크립트 파일들 등

## Bundle이란?

- 소프트웨어 및 일부 하드웨어와 함께 작동하는 데 필요한 모든 것을 포함하는 패키지
- 각각의 모듈들에 대해 의존성 관계를 파악한 하나 또는 여러 개의 그룹

## Module Bundler란?

대부분의 프로그래밍 언어에서는 코드를 여러 개의 파일로 분할하고, 각각의 파일에 담겨있는 기능들을 사용하기 위해서 애플리케이션에서 `import` 하는 방식을 사용한다. 하지만 브라우저에서는 이러한 `import` 방식을 사용할 수 없기 때문에 Module Bundler가 이 기능을 대신한다.

Module Bundler는 모듈들을 비동기적으로 로딩하여 로딩이 완료되면 실행되도록 하거나, 필요한 파일들을 묶어서 하나의 자바스크립트로 만들어 HTML에서 `script` 태그로 로딩될 수 있도록 만들어 준다.

물론 모듈 로더나 번들러가 없어도 코드 파일을 수작업으로 하나의 파일로 만들거나 HTML에 수 많은 `script` 태그를 사용해서 하나씩 파일들을 로딩할 수도 있다. 하지만 이렇게 할 경우 다음과 같은 단점이 존재한다.

- 많은 수작업이 반복된다.
- 각 파일이 어떤 파일들에 의존하고 있는지, 어떤 파일은 필요하지 않은지 등을 포함해서 파일들이 올바른 순서로 로드 되도록 항상 신경써야 한다.
- 다수의 `script` 태그는 브라우저가 서버로부터 코드를 가져오기 위해서 최소한 태그의 수 만큼 호출을 해야한다는 뜻이므로 성능에 부정적인 영향을 끼친다.

## Grunt, Gulp 등과의 비교

- [2020 State of Javascript](https://2020.stateofjs.com/en-US/technologies/build-tools/) Build 부분에서 88% 이상의 사용자가 WebPack을 사용하고 있음.
- 크고 복잡한 프로젝트 일수록 WebPack 사용이 유리.
- 비교적 최신이어서 이전의 번들러에서 발생하던 문제점과 단점을 피할 수 있음.
- 쉽게 시작할 수 있음. 그냥 평범한 자바스크립트 파일이므로 별도 형식의 환경설정 파일이 필요 없음.
- 플러그인 시스템을 통해서 훨씬 많은 것을 할 수 있으며 강력한 기능들을 사용할 수 있으므로 webpack 하나로 끝낼 수 있음.

## WebPack 기능

- 리소스를 묶어주는 역할
- 변화를 감지해서 업무를 다시 실행
- 바벨을 활용해 ES5 코드로 변환
- 브라우저와 상관없이 최신 자바스크립트 기능 사용
- 커피스크립트를 자바스크립트로 컴파일
- 인라인 이미지를 데이터 URLs로 변환
- CSS 파일을 import 할 수 있음
- 개발 웹 서버를 실행시킬 수 있음
- 핫 모듈을 대신해서 사용할 수 있음
- Tree Shaking을 만들 수 있음
- 첫 화면이 로드될 때 큰 자바스크립트 파일이 불려지는 것을 피하기위해 출력 파일을 여러 개로 나눌 수 있음