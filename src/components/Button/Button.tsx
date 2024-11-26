import React from "react";
import '../../global.css';


interface ButtonProps {
    label: string;
    onClick: () => void;
    bgColor: string;
    hover: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, bgColor, hover }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-white font-bold rounded  ${bgColor} ${hover}`}
        >
            {label}
        </button>
    )
}

export default Button;