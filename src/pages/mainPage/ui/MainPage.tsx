import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <BugButton /> */}
      {t('Главная страница')}
    </div>
  );
});

export default MainPage;
