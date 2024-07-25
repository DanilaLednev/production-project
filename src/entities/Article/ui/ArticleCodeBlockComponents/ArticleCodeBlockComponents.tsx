import { memo } from 'react';

import { ArticleCodeBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/redesigned/Code';

import cls from './ArticleCodeBlockComponents.module.scss';

interface ArticleCodeBlockComponentsProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponents = memo(
  (props: ArticleCodeBlockComponentsProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponents, {}, [className])}
      >
        <Code text={block.code} />
      </div>
    );
  },
);
