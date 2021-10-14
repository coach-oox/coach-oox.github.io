---
layout: post
title: "내가 사용하는 React 애플리케이션 파일 구조"
category: [react, development]
tags: [react, convention]
comments: true
---

일반적으로 선호되는 리액트 애플리케이션의 파일 구조는 파일 유형에 따라 분류하는 것이다. 파일 유형에 따라 분류한다는 것은, 비슷한 파일끼리 묶는 것을 의미한다. 이 방법은 자주 함께 사용되는 파일들을 함께 보관하는 Colocation (코로케이션) 원칙에 의해 컴포턴트는 컴포넌트끼리, 또 그 내부에서 구분되는 라우트나 컴포넌트의 묶음으로 분류될 수 있다.

사실 파일 구조를 어떻게 잡느냐는 혼자 작업하는지, 협업하는지, 프리랜서인지, 직장을 다니는지 등에 따라 (일반적으로 회사에는 어느 정도 정해진 규정이 있기 때문에 이런 부분을 걱정할 필요는 없다.) 다르고, 정해진 정답은 없다. 하지만 이 부분이 의외로 꽤 많이 받는 질문 중 하나라서, 생각난김에 내가 보편적인 상황에서 사용하는 파일 구조를 소개하고자 한다. 다시 한 번 강조하지만 이 부분은 개발자 자유이니 참고만 하도록 하자. 😎

```bash
.
└── /src
    ├── /assets
    ├── /components
    ├── /fetch
    ├── /store
    ├── /utils
    ├── /views
    ├── index.js
    └── App.js
```

## Assets

글로벌로 사용되는 정적 자원들. 예를 들어, 로고같은 이미지 파일 등이 위치한다.

## Components

`buttons`, `forms` 등의 폴더로 구분해서, 앱을 구성하는 각각의 파트 (컴포넌트) 들이 위치한다. (내 경우 스타일에 관련된 파일도 수정의 용이함을 고려해 각각의 폴더에 함께 놓기 때문에 스타일에 관련된 폴더는 따로 없다.)

```bash
.
└── /src
    └── /components
      └── /buttons
        ├── /SubmitButton
        │ ├── SubmitButton.js
        │ ├── SubmitButton.styles.js
        │ └── SubmitButton.test.js
        ├── /DeleteButton
        │  ├── DeleteButton.js
        │  ├── DeleteButton.styles.js
        │  └── DeleteButton.test.js
        └── index.js
```

`index.js` 파일은 여러 개의 컴포넌트를 한 번에 가져오기 쉽게 하기 위해 생성한다.

```js
import SubmitButton from "./SubmitButton/SubmitButton.js";
import DeleteButton from "./DeleteButton/DeleteButton.js";

export { SubmitButton, DeleteButton };
```

이렇게 작성하면, 다음과 같이 사용할 수 있다.

```js
import { SubmitButton, DeleteButton } from "@components/buttons";
```

## Store

전역 상태에 관련된 파일들이 위치한다. 리덕스를 사용할 때는 좀 더 복잡했으나, 요즘은 웬만하면 Recoil 또는 Zustand를 사용하고, 원격 서버에서 패치하는 부분은 React Query 또는 SWR을 사용하기 때문에 그냥 상태 종류에 따라 파일만 분류한다.

## Fetch

위와 같이 리덕스를 사용하지 않고 Recoil (Zustand) + SWR (React Query) 조합을 사용하면서 신설 (?) 된 분류로, 대부분 원격 서버에 있는 데이터를 패치하는 비동기 로직이 포함된 파일이 위치한다.

## Utils

자주 사용되지는 않지만 공유하는 것이 장기적으로 봤을 때 (개발, 유지보수 등) 더 편리하다고 판단되거나, 협업시 실수를 줄이기 위해서 공유될 필요가 있는 상수나 자바스크립트 모듈 등의 위치한다.

```bash
.
└── /src
    └── /utils
      └── /constans
      │ ├── /colors.constans.js
      │ └── /names.constans.js
      └── /serviecs
        └── /validation.services.js
```

## Views

애플리케이션을 구성하는 페이지 단위로 폴더를 구성한다.

```bash
.
└── /src
    └── /view
      └── /Logins
        ├── /LoginPage
        │ ├── LoginPage.js
        │ └── LoginPage.test.js
        └── /LoginForm
          ├── LoginForm.js
          ├── LoginForm.styles.js
          └── LoginForm.test.js
```

## 경로 별칭 활용하기

각각을 잘 분류해놓더라도 서로 다른 파일에 위치한 파일을 `import` 해야 하는 상황은 빈번하게 일어난다. 그래서 내 경우 WebPack의 `alias` 또는 `tsconfig`의 `paths` 설정을 사용하는 데, 이 기능을 활용하면 중첩이 `../../../components/video/Item.js`와 같은 경로를 `@components/video/Item.js`로 사용한다.

```bash
.
└── /src # @
    ├── /assets # @assets
    ├── /components # @components
    ├── /services # @services
    ├── /store # @store
    ├── /utils # @utils
    ├── /views # @views
    ├── index.js
    └── App.js
```
