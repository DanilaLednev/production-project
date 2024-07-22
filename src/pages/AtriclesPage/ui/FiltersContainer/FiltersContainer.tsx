import { useTranslation } from 'react-i18next';

import { useArticleFilters } from '@/pages/AtriclesPage/lib/hooks/useArticleFilters';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = (props: FiltersContainerProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const {
    search,
    order,
    sort,
    type,
    onChangeSearch,
    onChangeType,
    onChangeSort,
    onChangeOrder,
  } = useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      search={search}
      order={order}
      sort={sort}
      type={type}
      onChangeSort={onChangeSort}
      onChangeOrder={onChangeOrder}
      onChangeType={onChangeType}
      onChangeSearch={onChangeSearch}
    />
  );
};
