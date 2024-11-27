import React from 'react';
const Button = ({ label, onClick, colorBg, colorHover }) => {
    const defaultClasses = "px-4 py-2 text-white font-bold rounded"; // Classes padrão
    return (React.createElement("button", { className: `${defaultClasses} ${colorBg} ${colorHover}`, onClick: onClick }, label));
};
export default Button;
