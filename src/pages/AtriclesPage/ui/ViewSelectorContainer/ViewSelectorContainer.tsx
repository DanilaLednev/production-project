import { useTranslation } from 'react-i18next';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = (props: ViewSelectorContainerProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const { view, onChangeView } = useArticleFilters();

  return (
    <ArticleViewSelector
      className={className}
      view={view}
      onViewClick={onChangeView}
    />
  );
};
