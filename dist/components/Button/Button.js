import React from "react";
import '../../global.css';
const Button = ({ label, onClick, bgColor, hover }) => {
    return (React.createElement("button", { onClick: onClick, className: `px-4 py-2 text-white font-bold rounded  ${bgColor} ${hover}` }, label));
};
export default Button;
