import React from "react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    
};

export const Primario = () => <Button label="Primário!" onClick={() => alert('Clicou no botão primário!')} bgColor="bg-blue-500" hover="hover:bg-blue-600"></Button>;
export const Secundario = () => <Button label="Secundário!" onClick={() => alert('Clicou no botão secundario!')} bgColor="bg-orange-500" hover="hover:bg-orange-800" ></Button>;