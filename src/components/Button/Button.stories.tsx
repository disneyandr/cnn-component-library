import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Enviar = Template.bind({});
Enviar.args = {
  label: 'Enviar',
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
