import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  direction: 'row',
  gap: '4',
  justify: 'center',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  direction: 'row',
  gap: '8',
  justify: 'end',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  direction: 'row',
  justify: 'between',
  gap: '16',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  direction: 'column',
  gap: '4',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  direction: 'column',
  align: 'start',
  gap: '8',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  direction: 'column',
  align: 'end',
  gap: '16',
  children: (
    <>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
      <div>five</div>
    </>
  ),
};
