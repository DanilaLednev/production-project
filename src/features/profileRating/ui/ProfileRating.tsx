import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetProfileRating, useRateProfile } from '../api/profileRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

export const ProfileRating = (props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation('profile');
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });

  const [rateProfileMutation] = useRateProfile();

  const rating = data?.[0];

  const handleRateProfile = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfileMutation({
          userId: userData?.id ?? '',
          profileId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [profileId, rateProfileMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount, feedback);
    },
    [handleRateProfile],
  );

  const onCancel = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount);
    },
    [handleRateProfile],
  );

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Skeleton width="100%" height={120} border="20px" />}
        off={<SkeletonDeprecated width="100%" height={120} />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card max border="partial" padding="0">
          <RatingCard
            className={className}
            rate={rating?.rate}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о пользователе')}
            hasFeedback
            onCancel={onCancel}
            onAccept={onAccept}
          />
        </Card>
      }
      off={
        <RatingCard
          className={className}
          rate={rating?.rate}
          title={t('Оцените профиль')}
          feedbackTitle={t('Оставьте свой отзыв о пользователе')}
          hasFeedback
          onCancel={onCancel}
          onAccept={onAccept}
        />
      }
    />
  );
};
