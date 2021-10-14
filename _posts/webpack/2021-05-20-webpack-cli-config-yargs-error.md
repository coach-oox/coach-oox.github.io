---
layout: post
title: "webpack-dev-server 사용시 발생할 수 있는 config-yargs 에러 해결 방법"
category: [webpack]
tags: [webpack, error]
comments: true
---

```bash
Error: Cannot find module 'webpack-cli/bin/config-yargs'
```

멘티가 혼자 고쳐보려고 했는데, 검색해보니 사용하는 `webpack`, `webpack-cli` 버전과 `webpack-dev-server`의 버전이 충돌해 생기는 에러라고 `webpack`의 버전을 바꾸라는 말뿐이어서 이래저래 해봐도 안된다고 울면서 가져왔다 ㅋㅋㅋㅋㅋㅋㅋ 뭐 예전에는 버전이 안맞아서 에러가 생겼을 수도 있긴한데... 하여튼 WebPack이 버전 5로 올라가면서 명령어가 `webpack-dev-server`가 아니라 `webpack serve`로 바뀌었는데, 이 사실을 모르면 계속 해맬 수도 있을 것 같다.

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

우선 위 명령어로 세 가지 의존성을 최신 버전으로 업데이트 한다.

```json
{
  "scripts": {
    // "start:dev": "webpack-dev-server"
    "start:dev": "webpack serve"
  }
}
```

결론 : 에러는 영어로 검색하는 것을 습관화 하자. StackOverflow를 활용하자. 🤪
