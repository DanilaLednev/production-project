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

import { renderArticleBlock } from './rendeBlock';

import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIconDeprecated from '@/shared/assets/icons/eye.svg';
import EyeIcon from '@/shared/assets/iconsRedesign/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack justify="center" max className={cls.avatarWrapper}>
        <AvatarDeprecated
          className={cls.avatar}
          size={200}
          src={article?.img}
        />
      </HStack>
      <VStack gap="4" max data-testid="ArticleDetails.Info">
        <TextDeprecated
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap="8" className={cls.articleInfo}>
          <IconDeprecated Svg={EyeIconDeprecated} className={cls.icon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>

        <HStack gap="8" className={cls.articleInfo}>
          <IconDeprecated Svg={CalendarIcon} className={cls.icon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text text={article?.subtitle} />
      <AppImage
        fallback={<Skeleton width="100%" height={420} border="16px" />}
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <SkeletonDeprecated
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <SkeletonDeprecated className={cls.title} width={300} height={32} />
        <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
        <SkeletonDeprecated
          className={cls.skeleton}
          width="100%"
          height={200}
        />
        <SkeletonDeprecated
          className={cls.skeleton}
          width="100%"
          height={200}
        />
      </>
    );
  } else if (error) {
    content = (
      <TextDeprecated
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
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
