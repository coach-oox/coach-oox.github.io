---
layout: post
title: "자바스크립트 setInterval()과 setTimeout()를 사용한 게임 오버 예제"
category: [javascript]
tags: [javascript]
comments: true
---

`setInterval()` 메소드를 사용해서 (일정한) 특정 시간 간격으로 함수 A를 실행하고, `setTimeout()` 메소드를 사용해서 특정 시간 이후 종료하고 함수 B를 실행하는 예제.

```javascript
function setPlayTime() {
  timer.innerText = PLAY_TIME;

  // 매초 남은 게임 시간을 업데이트 함
  timerId = setInterval(updateTime, 1000);

  // 플레이 타임이 종료되면 게임 오버 함수를 실행함
  setTimeout(gameOver, PLAY_TIME * 1000);
}

function gameOver() {
  // setInterval() 메소드 종료
  // clearInterval() 하지 않으면 내부적으로 setInterval() 메소드는 계속 실행되는 상태가 됨
  clearInterval(timerId);

  // ... 게임 종료 처리 ...
}
```
