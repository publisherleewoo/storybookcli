import React from "react";

import { jsxDecorator } from "storybook-addon-jsx";

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

export const Orleans = () => (
    <TestComponent color="#236544">Hello</TestComponent>
);
