import React from "react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
};

export const Primario = () => <Button label="Primário!" onClick={() => alert('Clicou no botão primário!')}></Button>;
export const Secundario = () => <Button label="Primário!" onClick={() => alert('Clicou no botão secundario!')}></Button>;