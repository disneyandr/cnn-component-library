import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    colorBg: string;
    colorHouver: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
