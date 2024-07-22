import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import {
  Flex,
  FlexAlign,
  FlexDirection,
} from '@/shared/ui/redesigned/Stack/Flex/Flex';

import cls from './Tabs.module.scss';

export interface TabsItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabsItem[];
  value: string;
  onTabClick: (tab: TabsItem) => void;
  direction?: FlexDirection;
  align?: FlexAlign;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, direction, align, onTabClick } = props;
  const { t } = useTranslation();

  const clickHandler = useCallback(
    (tab: TabsItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      align={align}
      gap="8"
      className={classNames(cls.Tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(cls.tab, { [cls.selected]: isSelected })}
            border="round"
            onClick={clickHandler(tab)}
            key={tab.value}
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
