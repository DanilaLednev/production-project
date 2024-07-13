import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortFiled } from '../../model/consts/articleConsts';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortFiled;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFiled) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
  } = props;

  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию'),
    },
    {
      value: 'desc',
      content: t('убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortFiled>[]>(() => [
    {
      value: ArticleSortFiled.CREATED,
      content: t('дате создания'),
    },
    {
      value: ArticleSortFiled.TITLE,
      content: t('названию'),
    },
    {
      value: ArticleSortFiled.VIEWS,
      content: t('количеству просмотров'),
    },
  ], [t]);

  // const changeSortHandler = useCallback((newSort: string) => { // костыль
  //   onChangeSort(newSort as ArticleSortFiled);
  // }, [onChangeSort]);
  //
  // const changeOrderHandler = useCallback((newOrder: string) => { // костыль
  //   onChangeOrder(newOrder as SortOrder);
  // }, [onChangeOrder]);

  return (
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
  );
});
