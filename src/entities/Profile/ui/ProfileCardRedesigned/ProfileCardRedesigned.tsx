import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding="24" max>
      <VStack gap="32" max>
        <HStack max justify="center">
          <Skeleton border="100%" width={128} height={128} />
        </HStack>
        <HStack gap="16" max>
          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack justify="center" max>
      <Text
        variant="error"
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  return (
    <Card padding="24" max className={classNames('', {}, [className])}>
      <VStack gap="32">
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Input
              value={data?.first}
              label={t('Имя')}
              readOnly={readOnly}
              onChange={onChangeFirstname}
              data-testid="ProfileCard.firstname"
            />

            <Input
              value={data?.lastname}
              label={t('Фамилия')}
              readOnly={readOnly}
              onChange={onChangeLastname}
              data-testid="ProfileCard.lastname"
            />

            <Input
              value={data?.age}
              label={t('Возраст')}
              readOnly={readOnly}
              onChange={onChangeAge}
            />

            <Input
              value={data?.city}
              label={t('Город')}
              readOnly={readOnly}
              onChange={onChangeCity}
            />
          </VStack>

          <VStack gap="16" max>
            <Input
              value={data?.username}
              label={t('Имя пользователя')}
              readOnly={readOnly}
              onChange={onChangeUsername}
            />

            <Input
              value={data?.avatar}
              label={t('Ссылка на аватар')}
              readOnly={readOnly}
              onChange={onChangeAvatar}
            />

            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readOnly={readOnly}
            />

            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readOnly={readOnly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});
