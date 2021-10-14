---
layout: post
title: "절대 주소와 상대 주소의 이해 (슬래시의 차이)"
category: [web]
tags: [web, path, express, react]
comments: true
---

`path` 형식 (상대 주소)의 경우 현재 파일 위치를 기준으로 경로를 지정한다.

```jsx
function Something() {
    return (
        <div>
            <img src='img/sample.png'>
        </div>
    )
}
```

위와 같은 앞에 슬래시가 없는 `img/sample.png` 경로를 가정해보자. 이 경우 현재 디렉토리를 (클라이언트라면 클라이언트를) 기준으로 서브 디렉토리인 `img` 안에 있는 `sample.png` 파일을 가져온다.

```jsx
function Something() {
    return (
        <div>
            <img src='/img/sample.png'>
        </div>
    )
}
```

반면에 위와 같이 `/path` 형식으로 작성하면 도메인 주소를 제외한 서브 디렉토리 이하를 표시한 주소 (서버 루트를 기준으로 표시한 경로)가 된다.

#### 클라이언트에서 서버에 저장된 파일을 가져오는 경우

클라이언트 주소는 `http://localhost:3000`이고, 서버 주소는 `http://localhost:5000`이며, 가져오려는 파일의 위치는 `http://localhost:5000/uploads/sample.png`라고 가정해보자. 이때 다음과 같이 클라이언트에서 해당 파일에 접근하고자 하며, `path`의 값은 `uploads/sample.png`이다.

```jsx
function Something({ path }) {
    return (
        <div>
            <img src={path}>
        </div>
    )
}
```

이 경우 현재 위치 (클라이언트)에서 해당 경로를 찾기 때문에, 의도한 바와 다르게 `http://localhost:3000` 하위에 있는 `uploads` 파일 내부에서 `sample.png`를 찾게 된다. 즉, 다음과 같이 앞에 슬래시를 붙여야 올바르게 파일을 가져올 수 있다.
