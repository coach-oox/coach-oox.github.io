---
layout: post
title: "Recoil과 Zustand 비교하기"
category: [react]
tags: [react, state-management, redux, mobx, recoil, zustand, react-query, swr]
comments: true
---

## Redux 끊은지 1년째

지금은 유지보수를 제외하고, 내가 선택할 수 있는 한 리덕스를 사용하지 않는다. (물론 이런 선택은 내가 프리랜서로 활동하기에 가능한 것도 있다.) 결론부터 말하자면 최근에는 간단한 상태 관리는 Recoil을 사용하고 있고, 원격 서버의 데이터 패치 작업이 필요한 경우 React Query 또는 SWR을 추가해 사용한다. (React Query와 SWR에 대한 내용은 나중에 별도의 게시물로 기록할 예정이다.) 물론 서버가 GraphQL이라면 Aollo Client를 쓰는 게 더 편리하다.

## Context API로 해결되지 않는 문제

리덕스가 과하다고 느낀다면 Context API + React Hooks 조합도 좋은 선택지가 될 수 있다. (특히 포트폴리오를 만든다던지 하는 작은 프로젝트에서 리덕스는 배보다 배꼽이 더 크다.) 하지만 실무에서 Context API를 사용하기에는 `Context.Provider`로 감싸진 컴포넌트가 통째로 다시 렌더링 된다던지 하는 등의 문제점이 있고, 편리성도 좀 떨어진다.

물론 Context가 변경될 때 해당 Context를 사용하는 컴포넌트가 전부 다시 렌더링되는 문제는 `useMemo()`라는 리액트 Hook을 사용하는 등의 방법으로 해결할 수 있다. 즉, 꼭 이런 문제 때문에 라이브러리를 추가적으로 사용할 필요가 없기 때문에, 이제는 정말 Context API + Hooks 조합이면 웬만한 서비스는 만들 수 있다는 의미다.

## Recoil vs. Zustand

[Recoil](https://github.com/facebookexperimental/Recoil)과 [Zustand](https://github.com/pmndrs/zustand)를 한 마디로 표현하자면, 리덕스 보다 단순하게 생긴 리액트 상태 관리 라이브러리이다. Recoil은 페이스북에서 만들었고, Zustand는 Jotai [개발자](https://twitter.com/dai_shi)가 관리한다.

[NPM Trends](https://www.npmtrends.com/recoil-vs-zustand) 통계를 보면, Recoil과 Zustand는 거의 비슷한 그래프를 그리며 성장하고 있고, 최근에는 Zustand가 아주 약간 더 많은 다운로드 수를 기록하고 있다. 하지만 Recoil은 약 1년전 공개되었고, Zustand는 2년전 공개되었다는 점에 기반하면 Recoil이 더 빠른 성장세를 보인다고 할 수 있다.

> 많은 사람들이 리덕스를 대체하기 위한 라이브러리로 Recoil이나 Zustand가 아니라 [MobX](https://mobx.js.org/README.html)를 꼽는다. 물론 인지도나 사용자 수로 따져보면 MobX가 압도적으로 (?) 더 많지만, 내 기준에서는 Recoil이나 Zustand의 방식이 훨신 간단하다고 느꼈고, 아주 복잡한 상태 관리가 필요하다면 익숙한 리덕스를 사용하는 게 낫다고 판단했다.

### Recoil

### Zustand

Zustand는 상태를 만들고 사용하는 방법이 단순하고, Context API의 렌더링 문제를 쉽게 해결할 수 있다.
