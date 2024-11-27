import React from 'react';
import Button from './Button';
export default {
    title: 'Components/Button',
    component: Button,
};
const Template = (args) => React.createElement(Button, Object.assign({}, args));
export const Enviar = Template.bind({});
Enviar.args = {
    onClick: () => alert('Enviando!'),
    colorBg: 'bg-blue-500',
    colorHover: 'hover:bg-blue-700',
};
export const Deletar = Template.bind({});
Deletar.args = {
    label: 'Deletar',
    onClick: () => alert('Deletando!'),
    colorBg: 'bg-red-500',
    colorHover: 'hover:bg-red-700',
};
