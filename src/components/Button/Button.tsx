import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    colorBg: string;
    colorHover: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick,colorBg, colorHover }) => {
    return (
        <button className={`${colorBg} ${colorHover}`} onClick = { onClick } >
            { label }
    </button >
  );
};

export default Button;
