import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponents.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

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
