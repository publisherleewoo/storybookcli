# @storybook/cli

```jsx
npx -p @storybook/cli sb init --type react
```

```jsx
npm run storybook
```

[https://storybook.js.org/addons/](https://storybook.js.org/addons/)

를 참고하여 플러그인을 추가셋팅 해주면된다.

주의할점: 버전문제가 있을 수 있기때문에 yarn으로 설치한다.(현시점 나는 core-js 문제가 있었다.)

예시로 jsx를 셋팅해보자

아래는 [https://github.com/storybookjs/addon-jsx](https://github.com/storybookjs/addon-jsx)에 나와있는 코드이다.

```jsx
// .storybook/main.js:

module.exports = {
    addons: ["storybook-addon-jsx"],
};
```

아래에 추가한다.

```jsx
module.exports = {
    stories: ["../stories/**/*.stories.js"],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "storybook-addon-jsx",
    ],
};
```

아래 코드에서보면, 경로가 TestComponent로 되어있기때문에 경로를 맞춰줘야 한다.

```jsx
import React from "react";
import { storiesOf } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";

//import { TestComponent } from './TestComponent': //기존코드
import TestComponent from "../src/TestComponent";
export default {
    title: "Components/TestComponent",
    decorators: [jsxDecorator],
};

export const Paris = () => (
    <TestComponent
        fontSize={45}
        fontFamily="Roboto"
        align="center"
        color="#CAF200"
    >
        Hello
    </TestComponent>
);

export const Orleans = () => <Test color="#236544">Hello</Test>;
```

src 경로에 TestComponent.js를 만들어준다.

주의할점: 셋팅이 바뀔시 인식 못하는 경우가있기때문에 npm run storybook으로 재시작해 주어야한다.
