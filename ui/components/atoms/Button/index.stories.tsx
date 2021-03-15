import React from 'react';
import { action } from '@storybook/addon-actions';
import LumbyButton from '.';

export default {
  title: 'Components/Atoms',
  component: LumbyButton,
  parameters: {
    docs: {
      description: {
        component: 'A simple button component',
      },
    },
  },
  args: {
    type: 'primary',
  },
  argTypes: {
    color: {
      description: 'Color of the text',
      control: 'color',
    },
  },
};
const Template = (args) => (
  <LumbyButton onClick={action('onClickAction')} {...args}>
    Hello
  </LumbyButton>
);
export const Button = Template.bind({});
