import React from "react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    
};

export const Primario = () => <Button label="Primário!" onClick={() => alert('Clicou no botão primário!')} colorBg="bg-blue-500" colorHouver="hover:bg-blue-600"></Button>;
export const Secundario = () => <Button label="Secundário!" onClick={() => alert('Clicou no botão secundario!')} colorBg="bg-orange-500" colorHouver="hover:bg-orange-800" ></Button>;