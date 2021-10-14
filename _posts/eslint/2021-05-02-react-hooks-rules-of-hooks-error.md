---
layout: post
title: "React ESLint react-hooks/rules-of-hooks 에러 해결 방법"
category: [eslint, react]
tags: [react, eslint, hook, error]
comments: true
---

ESLint에서 `react-hooks` (`airbnb-hooks` 등)를 사용할 때 발생할 수 있는 에러로, 자바스크립트의 일반 함수에서 Hook을 호출하지 말라는 에러이다. 이 에러를 해결하기 위해서는 다음 두 가지 방식으로 Hook을 호출해야 한다.

- React 함수형 컴포넌트에서 호출
- Custom Hook에서 호출

`.eslintrc` 파일에서 다음 항목으로 설정할 수 있다.

```json
"rules": {
    "react-hooks/rules-of-hooks": "error"
}
```

### Hook을 사용한 결과를 리턴하려는 경우

`.jsx` 또는 `.tsx` 파일에서 Hook을 사용해 그 결과를 리턴하려는 다음과 같은 경우, 컴포넌트의 이름이 대문자로 시작해야 한다. [User-Defined Components Must Be Capitalized](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

```tsx
export const GetDispatch = (): React.Dispatch<Action> => {
  const { dispatch } = useContext(TodoContext)!;
  return dispatch;
};
```
