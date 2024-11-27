import React from 'react';
export interface ButtonProps {
  label?: string;
  onClick: () => void;
  colorBg: string;
  colorHover: string;
}

const Button: React.FC<ButtonProps> = ({ label = 'Bt Da Biblioteca', onClick, colorBg, colorHover }) => {
  const defaultClasses = "px-4 py-2 text-white font-bold rounded"; // Classes padrão
  return (
    <button className={`${defaultClasses} ${colorBg} ${colorHover}`} onClick={onClick}>
      {label}
    </button>
  );
};


export default Button;
