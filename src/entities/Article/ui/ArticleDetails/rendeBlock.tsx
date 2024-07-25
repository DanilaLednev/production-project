import { useCallback } from 'react';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponents } from '../ArticleCodeBlockComponents/ArticleCodeBlockComponents';
import { ArticleImageBlockComponents } from '../ArticleImageBlockComponents/ArticleImageBlockComponents';
import { ArticleTextBlockComponents } from '../ArticleTextBlockComponents/ArticleTextBlockComponents';

import cls from '@/entities/Article/ui/ArticleDetails/ArticleDetails.module.scss';

export const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponents
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponents
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponents
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    default:
      return null;
  }
};
