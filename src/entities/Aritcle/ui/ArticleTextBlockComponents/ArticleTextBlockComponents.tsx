import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponents.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentsProps {
  className?: string;
  block: ArticleTextBlock
}

export const ArticleTextBlockComponents = memo((props: ArticleTextBlockComponentsProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlockComponents, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
