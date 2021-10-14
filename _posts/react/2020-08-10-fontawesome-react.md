---
layout: post
title: "React FontAwesome 라이브러리 사용법"
category: [react]
tags: [react, fontawesome]
comments: true
---

## 설치

[FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) 공식 홈페이지에서 제공하는 리액트 문서를 참고해서 필수 라이브러리를 설치한다.

```bash
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/free-solid-svg-icons
```

`free-solid-svg-icon` 외에도 사용할 아이콘 세트가 있다면 다음과 같이 추가 스타일을 설치할 수 있다. 즉, Solid 스타일을 사용한다면 `free-solid-svg-icons`를, Regular 스타일을 사용한다면 `free-regular-svg-icons`를 설치한다.

```bash
npm install --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
```

사용하려는 아이콘이 어떤 스타일에 속하는지는 해당 아이콘 상세 페이지에서 확인할 수 있다. (e.g., [trash-alt](https://fontawesome.com/v5.15/icons/trash-alt?style=regular)는 Regular 스타일이라고 명시되어 있다.)

## 사용법

사용하려는 아이콘의 이름은 각각의 상세 페이지에서 확인할 수 있다. (e.g., `fa-trash-alt`인 경우 `faTrashAlt`로 사용할 수 있다.)

```tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ListPresenter = (): JSX.Element => (
  <div>
    <FontAwesomeIcon icon={faCheckCircle} />
    <FontAwesomeIcon icon={faTrashAlt} />
  </div>
);
```
