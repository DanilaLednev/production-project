import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation('profile');

  if (!id) {
    return (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Профиль не найден')}
      />
    );
  }

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
