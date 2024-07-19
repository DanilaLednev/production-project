import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  value: 'OPTIONS',
  items: [
    { content: 'OptionsMy', value: 'OPTIONS' },
    { content: 'Options', value: 'none' },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  value: 'OPTIONS',
  direction: 'top left',
  items: [
    { content: 'topLeft', value: 'OPTIONS' },
    { content: 'topLeft', value: 'none' },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  value: 'OPTIONS',
  direction: 'top right',
  items: [
    { content: 'topRight', value: 'OPTIONS' },
    { content: 'topRight', value: 'none' },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  value: 'OPTIONS',
  direction: 'bottom left',
  items: [
    { content: 'bottomLeft', value: 'OPTIONS' },
    { content: 'bottomLeft', value: 'none' },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  value: 'OPTIONS',
  direction: 'bottom right',
  items: [
    { content: 'bottomRight', value: 'OPTIONS' },
    { content: 'bottomRight', value: 'none' },
  ],
};
