import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createAt: string;
  views: number;
  canEdit: any;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = (props: ArticleAdditionalInfoProps) => {
  const { className, author, createAt, canEdit, onEdit, views } = props;
  const { t } = useTranslation();

  return (
    <VStack
      className={classNames('', {}, [className])}
      gap="32"
    >
      <HStack gap="8">
        <Avatar src={author.avatar} size={32} />
        <Text text={author.username} bold />
        <Text text={createAt} bold />
      </HStack>
      {canEdit && <Button onClick={onEdit}>{t('Редактировать')}</Button>}
      <Text text={t('{{count}} просмотров', { count: views })} />
    </VStack>
  );
};
