import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCardDeprecated, { [cls.loading]: true })}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCardDeprecated, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
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

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <VStack
      className={classNames(cls.ProfileCardDeprecated, mods, [className])}
      gap="16"
      max
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}

      <InputDeprecated
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        readOnly={readOnly}
        onChange={onChangeFirstname}
        data-testid="ProfileCard.firstname"
      />

      <InputDeprecated
        value={data?.lastname}
        placeholder={t('Ваше фамилия')}
        className={cls.input}
        readOnly={readOnly}
        onChange={onChangeLastname}
        data-testid="ProfileCard.lastname"
      />

      <InputDeprecated
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        readOnly={readOnly}
        onChange={onChangeAge}
      />

      <InputDeprecated
        value={data?.city}
        placeholder={t('Ваш город')}
        className={cls.input}
        readOnly={readOnly}
        onChange={onChangeCity}
      />

      <InputDeprecated
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        className={cls.input}
        readOnly={readOnly}
        onChange={onChangeUsername}
      />

      <InputDeprecated
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        className={cls.input}
        readOnly={readOnly}
        onChange={onChangeAvatar}
      />

      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readOnly={readOnly}
      />

      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readOnly={readOnly}
      />
    </VStack>
  );
});
