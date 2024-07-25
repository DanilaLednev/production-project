import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/article';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import cls from './AdditionalInfoContainer.module.scss';

export const AdditionalInfoContainer = () => {
  const { t } = useTranslation();
  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  if (!article) return null;

  return (
    <Card padding="24" border="round" className={cls.card}>
      <ArticleAdditionalInfo
        canEdit={canEdit}
        onEdit={onEditArticle}
        author={article.user}
        createAt={article.createdAt}
        views={article.views}
      />
    </Card>
  );
};
