import React from "react";
import '../../global.css';


interface ButtonProps {
    label: string;
    onClick: () => void;
    bgColor: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, bgColor }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-white font-bold rounded hover:bg-blue-600 ${bgColor}`}
        >
            {label}
        </button>
    )
}

export default Button;