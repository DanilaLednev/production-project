import { HTMLAttributeAnchorTarget, memo } from 'react';

import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';

import { ArticleListItemDeprecated } from '@/entities/Article/ui/ArticleListItem/ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from '@/entities/Article/ui/ArticleListItem/ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  // const { className, article, view, target } = props;
  // const { t } = useTranslation('article');
  //
  // const types = <Text text={article.type.join(', ')} className={cls.types} />;
  // const views = (
  //   <>
  //     <Text text={String(article.views)} className={cls.views} />
  //     <Icon Svg={EyeIcon} />
  //   </>
  // );
  //
  // if (view === ArticleView.BIG) {
  //   const textBlock = article.blocks.find(
  //     (block) => block.type === ArticleBlockType.TEXT,
  //   ) as ArticleTextBlock;
  //   return (
  //     <div
  //       data-testid="ArticleListItem"
  //       className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
  //     >
  //       <Card className={cls.card}>
  //         <div className={cls.header}>
  //           <Avatar size={30} src={article.user.avatar} />
  //           <Text text={article.user.username} className={cls.username} />
  //           <Text text={article.createdAt} className={cls.date} />
  //         </div>
  //         <Text text={article.title} className={cls.title} />
  //         {types}
  //         <AppImage
  //           fallback={<Skeleton width="100%" height={250} />}
  //           src={article.img}
  //           alt={article.title}
  //           className={cls.img}
  //         />
  //         {textBlock && (
  //           <ArticleTextBlockComponents
  //             block={textBlock}
  //             className={cls.textBlock}
  //           />
  //         )}
  //         <div className={cls.footer}>
  //           <AppLink target={target} to={getRouteArticleDetails(article.id)}>
  //             <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее')}</Button>
  //           </AppLink>
  //
  //           {views}
  //         </div>
  //       </Card>
  //     </div>
  //   );
  // }
  //
  // return (
  //   <AppLink
  //     data-testid="ArticleListItem"
  //     target={target}
  //     to={getRouteArticleDetails(article.id)}
  //     className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
  //   >
  //     <Card className={cls.card}>
  //       <div className={cls.imageWrapper}>
  //         <AppImage
  //           fallback={<Skeleton width={200} height={200} />}
  //           src={article.img}
  //           alt={article.title}
  //           className={cls.img}
  //         />
  //         <Text text={article.createdAt} className={cls.date} />
  //       </div>
  //       <div className={cls.infoWrapper}>
  //         {types}
  //         {views}
  //       </div>
  //       <Text text={article.title} className={cls.title} />
  //     </Card>
  //   </AppLink>
  // );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  );
});
