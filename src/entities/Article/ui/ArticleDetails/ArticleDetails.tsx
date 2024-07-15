import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
  getArticleDetailsIsLoading,
  getArticleDetailsData,
  getArticleDetailsError,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/sevices/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponents } from '../ArticleCodeBlockComponents/ArticleCodeBlockComponents';
import { ArticleImageBlockComponents } from '../ArticleImageBlockComponents/ArticleImageBlockComponents';
import { ArticleTextBlockComponents } from '../ArticleTextBlockComponents/ArticleTextBlockComponents';

import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponents key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponents key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponents key={block.id} className={cls.block} block={block} />;
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>

    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar
            className={cls.avatar}
            size={200}
            src={article?.img}
          />
        </HStack>
        <VStack gap="4" max data-testid="ArticleDetails.Info">
          <Text
            className={cls.title}
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8" className={cls.articleInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text text={String(article?.views)} />
          </HStack>

          <HStack gap="8" className={cls.articleInfo}>
            <Icon Svg={CalendarIcon} className={cls.icon} />
            <Text text={article?.createdAt} />
          </HStack>

        </VStack>
        { article?.blocks.map(renderBlock) }
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <VStack
        max
        gap="16"
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
