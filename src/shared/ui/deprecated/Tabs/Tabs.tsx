import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/deprecated/Card';

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
}

/**
 * @deprecated
 */

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;
  const { t } = useTranslation();

  const clickHandler = useCallback(
    (tab: TabsItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          onClick={clickHandler(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
