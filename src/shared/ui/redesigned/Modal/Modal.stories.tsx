import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, neque accusantium totam cum illum repudiandae ex exercitationem natus suscipit? Voluptatem perspiciatis explicabo neque eaque maiores asperiores molestias hic ab vero!',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, neque accusantium totam cum illum repudiandae ex exercitationem natus suscipit? Voluptatem perspiciatis explicabo neque eaque maiores asperiores molestias hic ab vero!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
