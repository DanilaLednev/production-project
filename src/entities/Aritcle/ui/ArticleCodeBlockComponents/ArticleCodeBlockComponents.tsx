import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponents.module.scss';

interface ArticleCodeBlockComponentsProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponents = memo((props: ArticleCodeBlockComponentsProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleCodeBlockComponents, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
