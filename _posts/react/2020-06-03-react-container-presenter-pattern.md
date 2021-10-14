---
layout: post
title: "React Container - Presenter 패턴"
categories: [react]
tags: [react, javascript]
comments: true
---

React (이하 리액트)에서 Container - Presenter 패턴이란 데이터 처리 부분과 데이터 출력 (표현) 부분을 분리하여 개발 및 관리하는 디자인 패턴을 의미한다. 리액트 코드가 길어질 수록 컴포넌트 내부가 복잡해지기 때문에 유지보수 하기가 굉장히 번거로워 지는데, 이 디자인 패턴을 사용하면 데이터의 처리 부분과 출력 (표현)을 담당하는 부분을 나누어 작성하고 관리하기 때문에 코드의 가독성을 높일 수 있다.

- Container : 데이터를 담당. 데이터와 상태 값을 가지고, API를 불러와서 모든 로직을 처리.
- Presenter : 스타일을 담당. 컨테이너가 처리한 데이터들을 보여주는 역할. (데이터, 상태 값, API를 다루지 않음)

## Container

- 각각의 폴더를 컴포넌트 이름으로 따로 생성
- `index.js` 파일을 생성 (`index.js` 파일에서는 처리한 것들을 `export` 하기 위함)
- `aContainer.js` 파일을 생성 (로직 처리를 담당)
- `aPresenter.js` 파일을 생성 (스타일을 담당)

### Router

```jsx
import Something from "../Pages/Something";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Something} />
    </Router>
  );
};
```

예를 들어 위와 같은 라우터를 가정할 때, 라우터에서 컴포넌트 경로 (예 : `../Pages/Something`)를 컴포넌트 이름의 폴더로 지정했을 때, 자동으로 해당 폴더에 위치한 `index.js`를 가르키기 때문에, 컨테이너를 `index.js` 파일에서 내보내게끔 만든다.

### index.js

```jsx
import aContainer from "./aContainer";
export default aContainer;
```

### aContainer.js

```jsx
import React from "react";
import aPresenter from "./aPresenter";

class aContainer extends React.Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;
    return <aPresenter loading={loading} />;
  }
}

export default aContainer;
```

데이터를 처리해서 Presenter Props로 넘겨주고, 완성된 Presenter를 렌더링한다.

### Presenter

```jsx
import React from "react";

const aPresenter = ({ exchanges, loading }) => {
  return loading ? <h1>Loading</h1> : <h1>Done!</h1>;
};

export default aPresenter;
```

Presenter에서는 모든 데이터 출력 (표현)을 담당한다.
