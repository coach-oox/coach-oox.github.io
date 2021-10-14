---
layout: post
title: "Emotion 특징 정리 및 Styled-Components와의 비교"
category: [css-in-js]
tags: [emotion, styled-components, css-in-js]
comments: true
---

## Overviews

- Styled-Components, Emotion 둘다 CSS-in-JS
- Styled-Components 기능을 모두 제공

## Styled-Components와의 비교

- [Styled-Components](https://bundlephobia.com/package/styled-components@4.2.0) 용량
- [@emotion/core](https://bundlephobia.com/package/@emotion/core@10.0.10) 용량
- [NPM Trends](https://www.npmtrends.com/@emotion/core-vs-styled-components)
- [Benchmark Results](https://github.com/cristianbote/goober#ssr-1)

### Props 사용

#### Styled-Components

```jsx
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
```

#### Emotion

```jsx
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const pinkInput = css`
  background-color: pink;
`;

const RedPasswordInput = (props) => (
  <input
    type="password"
    css={css`
      background-color: red;
      display: block;
    `}
    {...props}
  />
);

render(
  <div>
    <RedPasswordInput placeholder="red" />
    <RedPasswordInput placeholder="pink" css={pinkInput} />
  </div>
);
```

### Mixins 사용

#### Styled-Components

```jsx
const Button = Styled.button`
  border: none;
  border-radius: 15px;
`;

const BlackButton = Styled(Button)`
  background-color: black;
  color: white;
`;
```

#### Emotion

```jsx
const button = css`
  border: none;
  border-radius: 15px;
`;

const BlackButton = css`
  ${button}
  background-color: black;
  color: white;
`;
```

## Labels

CSS-in-JS를 사용하면 자동으로 할당되는 Hashed Class Name으로 인해 디자이너와의 협업시 겪는 문제를 [Label](https://emotion.sh/docs/labels)로 해결할 수 있다.

```jsx
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

let style = css`
  color: hotpink;
  label: some-name;
`;

let anotherStyle = css({
  color: "lightgreen",
  label: "another-name",
});

let ShowClassName = ({ className }) => (
  <div className={className}>{className}</div>
);

render(
  <div>
    <ShowClassName css={style} />
    <ShowClassName css={anotherStyle} />
  </div>
);
```

또한 [@emotion/babel-plugin](https://emotion.sh/docs/@emotion/babel-plugin#gatsby-focus-wrapper)을 (`label-format` 옵션) 사용해서 다음 3가지 방법 중 하나로 Class Name을 지정할 수도 있다.

```bash
[local] - the name of the variable the result of the css or styled expression is assigned to.
[filename] - name of the file (without extension) where css or styled expression is located.
[dirname] - name of the directory containing the file where css or styled expression is located.
```

## Composition

[Composition](https://emotion.sh/docs/composition) 기능을 사용해서 여러 개의 스타일을 복합적으로 사용할 수 있다.

```jsx
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

render(
  <div>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles overwrite the danger
      styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
);
```

## Media Query

Styled-Components와 마찬가지로 [css-in-js-media](https://github.com/Brew-Brew/css-in-js-media)를 사용할 수 있다.

```jsx
import media from "css-in-js-media";

export const exampleClass = css`
  color: red;

  ${media(">desktop")} {
    font-size: 15px;
  }

  ${media("<=desktop", ">tablet")} {
    font-size: 20px;
  }

  ${media("<=tablet", ">phone")} {
    font-size: 25px;
  }

  ${media("<=phone")} {
    font-size: 30px;
  }
`;
```
