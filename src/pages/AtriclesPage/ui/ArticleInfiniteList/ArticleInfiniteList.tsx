import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/ArticlePageSlice';

import { ArticleList } from '@/entities/Article';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Ошибка при загрузке статьи')}
      />
    );
  }

  return (
    <ArticleList
      className={className}
      isLoading={isLoading}
      view={view}
      articles={articles}
    />
  );
};
