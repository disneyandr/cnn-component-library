import React from "react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
};

export const Default = () => <Button label="Click me!" onClick={()=> alert('Olha só, deu certo!')}></Button>;