import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
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

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>

      <div className={cls.data}>

        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}

        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeFirstname}
        />

        <Input
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeLastname}
        />

        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeAge}
        />

        <Input
          value={data?.city}
          placeholder={t('Ваш город')}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeCity}
        />

        <Input
          value={data?.username}
          placeholder={t('Введите имя пользователя')}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />

        <Input
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
      </div>

    </div>
  );
};
