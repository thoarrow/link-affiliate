import { Meta, Story } from '@storybook/react';
import { ButtonProps } from 'antd/lib/button/button';

import { Button } from './index';

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export default {
  component: Button,
  title: 'UI/Button',
} as Meta;
