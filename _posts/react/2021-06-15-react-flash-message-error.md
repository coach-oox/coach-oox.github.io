---
layout: post
title: "react-flash-message 에러 (Module not found) 해결 방법"
category: [react]
tags: [react, error, react-flash-message]
comments: true
---

```bash
Module not found: Can't resolve 'react-flash-message'
```

다음 명령어로 해결할 수 있다.

```bash
yarn add https://github.com/Looskie/react-flash-message.git
```

가끔가다 쓰는 건데, 사용법이 단순해서 한 번도 문제가 없었다가 갑자기 모듈을 찾을 수 없다고 난리여서 30분을 허비했다. 등잔 밑이 어둡다고 공식 레포 이슈에 벌써 같은 문제를 겪는 사람이 이슈를 발행했고, [코멘트](https://github.com/danielsneijers/react-flash-message/issues/14#issuecomment-896671049) 중에 해결책을 공유해준 사람이 있어서 해결할 수 있었다.
