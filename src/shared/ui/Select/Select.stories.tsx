import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Значение:',
  options: [
    { value: '111', content: 'Первый пункт' },
    { value: '222', content: 'Второй пункт' },
    { value: '333', content: 'Третий пункт' },
  ],
};
