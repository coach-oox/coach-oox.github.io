---
layout: post
title: "React 부모 컴포넌트 값을 자식 컴포넌트에서 업데이트 해야 하는 경우"
category: [react]
tags: [react, hook]
comments: true
---

- 부모 컴포넌트는 서버를 통해 최신 데이터베이스 정보를 패치 받는다.
- 해당 정보는 `useState()`를 사용해 부모 컴포넌트에서 관리한다. (정보가 업데이트되면 다시 그려질 수 있도록)
- 부모 컴포넌트는 해당 정보를 각각 하나씩 표현하기 위해 반복적으로 자식 컴포넌트를 생성하고, 자식 컴포넌트로 해당 정보를 보낸다.
- 이때 또 다른 자식 컴포넌트에서 해당 정보를 업데이트해야 할 경우. 정보가 업데이트 되었음을 자식 컴포넌트에서 부모 컴포넌트에 알릴 수 있어야 한다.

이런 경우를 글로 설명하면 장황하지만, 생각보다 꽤 흔하게 마주할 수 있는 상황이다. 좀 더 쉬운 가정을 위해 간단한 예제에 위 상황을 대입해보자. 다음 예제에서 `Parent` 컴포넌트는 서버에서 최신 정보를 패치 받고, 그 정보를 `datas`에 넣는다. (해당 정보는 배열로 들어온다.) `datas`에 있는 값은 `A`라는 자식 컴포넌트를 사용해서 각각 표현된다. 이때 `B` 컴포넌트에서는 (패치 됨으로써) `datas`에 추가될 새로운 정보를 생성한다. 이와 같은 상황에서 `B` 컴포넌트에서 새로운 정보가 생성된 경우, 부모 컴포넌트에 `datas`를 변경하려면 어떻게 해야 할까?

```jsx
function Parent() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // 서버에서 최신 정보를 받아온다.
    // 해당 정보를 setDatas(response.data)와 같이 datas에 넣는다.
  }, []);

  return (
    <div>
      {datas && datas.map((data) => <A {...data} />)}

      <B />
    </div>
  );
}
```

물론 정답은 하나가 아니기 때문에 여러 가지 대안이 나올 수 있지만, 간단한 예를 하나 들자면 다음과 같이 해결할 수 있다. 다음 예제에서 `addNewData()`는 `newData`를 받아 `setDatas()`를 사용해 기존의 데이터에 새로운 데이터를 추가한다. 이때 이 함수를 정보의 업데이트가 일어날 `B`에게 `props`로 전달하고, `B`에서 정보의 업데이트가 일어난 경우 `addNewData()`를 호출함으로써 부모 컴포넌트에게 데이터가 업데이트 되었음을 알릴 수 있고, 부모 컴포넌트는 최신 데이터를 유지할 수 있다.

```jsx
function Parent() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // 서버에서 최신 정보를 받아온다.
    // 해당 정보를 setDatas(response.data)와 같이 datas에 넣는다.
  }, []);

  const addNewData = (newData) => {
    setDatas([...datas, newData]);
  };

  return (
    <div>
      {datas && datas.map((data) => <A {...data} />)}

      <B addNewData={addNewData} />
    </div>
  );
}
```
