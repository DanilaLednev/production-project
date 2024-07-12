import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating/ui/RatingCard/RatingCard';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      {/* <BugButton /> */}
      {t('Главная страница')}
      <RatingCard
        title={t('Как вам статья')}
        feedbackTitle={t('оставьте отзыв о статье')}
        hasFeedback
      />
    </Page>
  );
});

export default MainPage;
