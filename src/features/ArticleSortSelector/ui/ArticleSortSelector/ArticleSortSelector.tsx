import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortFiled } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortFiled;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFiled) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props;

  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('Возрастанию'),
      },
      {
        value: 'desc',
        content: t('Убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortFiled>[]>(
    () => [
      {
        value: ArticleSortFiled.CREATED,
        content: t(`Дате\u00A0создания`),
      },
      {
        value: ArticleSortFiled.TITLE,
        content: t('Названию'),
      },
      {
        value: ArticleSortFiled.VIEWS,
        content: t('Количеству просмотров'),
      },
    ],
    [t],
  );

  // const changeSortHandler = useCallback((newSort: string) => { // костыль
  //   onChangeSort(newSort as ArticleSortFiled);
  // }, [onChangeSort]);
  //
  // const changeOrderHandler = useCallback((newOrder: string) => { // костыль
  //   onChangeOrder(newOrder as SortOrder);
  // }, [onChangeOrder]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <VStack gap="8">
            <Text text={t('Сортировать по')} />
            <ListBox
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <ListBox
              items={orderOptions}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select
            options={sortFieldOptions}
            label={t('Сортировать По')}
            value={sort}
            onChange={onChangeSort}
          />
          <Select
            options={orderOptions}
            label={t('по')}
            value={order}
            onChange={onChangeOrder}
            className={cls.order}
          />
        </div>
      }
    />
  );
});
