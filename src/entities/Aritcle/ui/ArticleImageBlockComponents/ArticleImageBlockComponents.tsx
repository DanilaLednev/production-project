import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponents.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentsProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponents = memo((props: ArticleImageBlockComponentsProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImageBlockComponents, {}, [className])}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
