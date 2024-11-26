import React from 'react';
const Button = ({ children, onClick, colorBg, colorHouver }) => {
    return (React.createElement(Button, { onClick: onClick, colorBg: colorBg, colorHouver: colorHouver }, children));
};
export default Button;
