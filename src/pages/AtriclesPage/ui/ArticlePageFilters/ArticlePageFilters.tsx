import { useTranslation } from 'react-i18next';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '@/pages/AtriclesPage/lib/hooks/useArticleFilters';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = (props: ArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const {
    search,
    view,
    order,
    sort,
    type,
    onChangeSearch,
    onChangeType,
    onChangeSort,
    onChangeOrder,
    onChangeView,
  } = useArticleFilters();

  return (
    <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Поиск')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        className={cls.tabs}
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  );
};
