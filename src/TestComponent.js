import React from "react";

const TestComponent = ({ children, fontSize, fontFamily, align, color }) => {
    return (
        <div>
            {children}
            {fontSize},{fontFamily},{align},{color},
            <p style={{ fontSize, fontFamily, align, color }}>스타일</p>
        </div>
    );
};

export default TestComponent;
