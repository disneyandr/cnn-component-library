import React from 'react';
export interface ButtonProps {
    label: string;
    onClick: () => void;
    colorBg: string;
    colorHover: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
