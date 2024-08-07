import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextSize, TextVariant } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Your advertisement could be here',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Your advertisement could be here',
  variant: 'error',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Your advertisement could be here',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Your advertisement could be here',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Your advertisement could be here',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title S',
  text: 'Description Description Description Description',
  size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title M',
  text: 'Your advertisement could be here',
  size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title L',
  text: 'Your advertisement could be here',
  size: 'l',
};
