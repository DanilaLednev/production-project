import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTextBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleTextBlockComponents.module.scss';

interface ArticleTextBlockComponentsProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponents = memo(
  (props: ArticleTextBlockComponentsProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text title={block.title} className={cls.title} />}
            off={<TextDeprecated title={block.title} className={cls.title} />}
          />
        )}
        {block.paragraphs.map((paragraph, index) => (
          <ToggleFeatures
            key={paragraph}
            feature="isAppRedesigned"
            on={
              <Text
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
              />
            }
            off={
              <TextDeprecated
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  },
);
