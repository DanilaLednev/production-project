import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
// import {
//   fetchProfileData,
//   getProfileError,
//   getProfileForm,
//   getProfileIsLoading,
//   getProfileReadonly, getProfileValidateErrors,
//   profileActions,
//   ProfileCard,
//   profileReducer,
// } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t('Профиль не найден')} />;
  }
  // const dispatch = useAppDispatch();
  // const formData = useSelector(getProfileForm);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);
  // const readonly = useSelector(getProfileReadonly);
  // const validateErrors = useSelector(getProfileValidateErrors);
  //
  // const { id } = useParams<{ id: string }>();
  //
  // const validateErrorTranslates = {
  //   [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
  //   [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
  //   [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
  //   [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
  //   [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
  // };
  //
  // useInitialEffect(() => {
  //   if (id) {
  //     dispatch(fetchProfileData(id));
  //   }
  // });
  //
  // const onChangeFirstname = useCallback((value: string) => {
  //   dispatch(profileActions.updateProfile({ first: value || '' }));
  // }, [dispatch]);
  //
  // const onChangeLastname = useCallback((value: string) => {
  //   dispatch(profileActions.updateProfile({ lastname: value || '' }));
  // }, [dispatch]);
  //
  // const onChangeAge = useCallback((value: string) => {
  //   const validateValue = value.replace(/\D/gm, '').substring(0, 3);
  //   dispatch(profileActions.updateProfile({ age: Number(validateValue || 0) }));
  // }, [dispatch]);
  //
  // const onChangeCity = useCallback((value: string) => {
  //   dispatch(profileActions.updateProfile({ city: value || '' }));
  // }, [dispatch]);
  //
  // const onChangeUsername = useCallback((value: string) => {
  //   dispatch(profileActions.updateProfile({ username: value || '' }));
  // }, [dispatch]);
  //
  // const onChangeAvatar = useCallback((value: string) => {
  //   dispatch(profileActions.updateProfile({ avatar: value || '' }));
  // }, [dispatch]);
  //
  // const onChangeCurrency = useCallback((currency: Currency) => {
  //   dispatch(profileActions.updateProfile({ currency }));
  // }, [dispatch]);
  //
  // const onChangeCountry = useCallback((country: Country) => {
  //   dispatch(profileActions.updateProfile({ country }));
  // }, [dispatch]);

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        {/* {validateErrors?.length && validateErrors.map((err) => ( */}
        {/*   <Text */}
        {/*     key={err} */}
        {/*     theme={TextTheme.ERROR} */}
        {/*     text={validateErrorTranslates[err]} */}
        {/*   /> */}
        {/* ))} */}
        {/* <ProfileCard */}
        {/*   data={formData} */}
        {/*   isLoading={isLoading} */}
        {/*   error={error} */}
        {/*   readOnly={readonly} */}
        {/*   onChangeFirstname={onChangeFirstname} */}
        {/*   onChangeLastname={onChangeLastname} */}
        {/*   onChangeAge={onChangeAge} */}
        {/*   onChangeCity={onChangeCity} */}
        {/*   onChangeUsername={onChangeUsername} */}
        {/*   onChangeAvatar={onChangeAvatar} */}
        {/*   onChangeCurrency={onChangeCurrency} */}
        {/*   onChangeCountry={onChangeCountry} */}
        {/* /> */}
      </VStack>

    </Page>
  );
});

export default ProfilePage;
