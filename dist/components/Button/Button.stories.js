import React from "react";
import Button from "./Button";
export default {
    title: "Components/Button",
    component: Button,
};
export const Primario = () => React.createElement(Button, { label: "Prim\u00E1rio!", onClick: () => alert('Clicou no botão primário!'), bgColor: "bg-blue-500", hover: "hover:bg-blue-600" });
export const Secundario = () => React.createElement(Button, { label: "Secund\u00E1rio!", onClick: () => alert('Clicou no botão secundario!'), bgColor: "bg-orange-500", hover: "hover:bg-orange-800" });
