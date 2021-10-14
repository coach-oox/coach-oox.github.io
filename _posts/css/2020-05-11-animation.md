---
layout: post
title: "CSS 애니메이션 기본 사용법"
categories: [css]
tags: [css, animation]
comments: true
---

# 적용 원리

- `animation` 속성과 하위 속성을 지정
- 애니메이션의 중간 상태를 `@keyframes` 규칙을 이용하여 기술

## @keyframes

애니메이션의 중간 상태 (특정 시점에 Element가 어떻게 보여질지)를 표현하기 위해서는 `@keyframes` 규칙을 이용해서 2개 이상의 중간 상태를 기술한다.

중간 상태가 전체 애니메이션에서 언제 등장할지는 `%` 수치 또는 `from - to`를 이용해 표현한다. 0%는 애니메이션이 시작된 시점을 의미하고, 100%는 애니메이션이 끝나는 시점을 의미하며, 최소한 두 시점 (시작과 끝)은 기술되어야 한다.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```css
@keyframes notification {
  0% {
    transform: translateY(80px);
    opacity: 0;
  }
  50% {
    transform: translateY(-90px);
    opacity: 1;
  }
  100% {
    transform: translateY(-70px);
    opacity: 1;
  }
}
```

# 속성

`animation()`은 `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`의 단축 속성.

```css
p {
  animation: notification 0.5s ease-out forwards, dissapear 0.5s ease-in
      forwards;
}
```

## 하위 속성

- `animation-delay` : Element가 로드되고 나서 언제 애니메이션이 시작될지 지정한다. (로드된 후 얼마나 딜레이되고 시작할지)
- `animation-direction` : 애니메이션이 종료되고 다시 처음부터 시작할지, 역방향으로 진행할지 결정한다.
- `animation-duration` : 한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정한다. (한 싸이클이 총 얼마동안 플레이 될지)
- `animation-name` : 이 애니메이션의 중간 상태를 지정한다. 중간 상태는 `@keyframes` 규칙을 이용하여 기술한다.
- `animation-play-state` : 애니메이션을 멈추거나 다시 시작할 수 있다.
- `animation-timing-function` : 중간 상태들의 전환을 어떤 시간 간격으로 진행할지 지정한다.
- `animation-fill-mode`: 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정한다.
