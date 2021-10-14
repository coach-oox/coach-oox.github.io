---
layout: post
title: "Yarn Workspace 기본 사용법"
category: [development]
tags: [development, yarn, workspce]
comments: true
---

```bash
sudo npm install -g yarn # yarn 없는 경우 설치
```

`project`라는 폴더 안에 `client` (리액트 등)와 `server` (Express 등)라는 폴더가 있다고 가정할 때, `project` 위치에서 다음 명령어로 `package.json` 파일을 생성한다.

```bash
yarn init -y
```

`project` 루트 위치에 생성된 `package.json` 파일에 다음 내용을 추가한다.

```json
{
  "private": true,
  "workspcaes": ["client", "server"],
  "scripts": {
    "client": "yarn workspace client start",
    "server": "yarn workspace server start"
  }
}
```

먼저 `workspaces`를 사용하기 위해서 `private` 옵션을 `true`로 설정하고, `workspaces` 옵션의 값을 사용할 워크스페이스와 동일한 이름으로 작성한다. 이렇게 작성한 워크스페이스는 `yarn workspace @name @command`와 같이 사용할 수 있다. (i.g., `start`는 `client`의 `package.json`에 정의되어야 한다.)

> `private` 옵션은 NPM 저장소에 배포할 것인지를 지정한다. `true`로 설정된 경우 배포하지 않을 것을 의미한다.

```bash
yarn client # yarn run client
yarn server # yarn run server
```

이때 주의할 점은 `workspaces`에 기술되는 워크스페이스 이름은 해당 워크스페이스의 `package.json` 내 `name` 속성에 정의된 것과 같아야 한다.
