import { useTranslation } from 'react-i18next';

import { Comment } from '@/entities/Comment';
import UserIcon from '@/shared/assets/iconsRedesign/user.svg';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        gap="8"
        max
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card max padding="24" border="round">
          <VStack data-testid="CommentCard.Content" gap="8" max>
            <AppLink
              to={getRouteProfile(comment.user.id)}
              className={cls.header}
            >
              {comment.user.avatar ? (
                <Avatar src={comment.user.avatar} size={30} />
              ) : (
                <UserIcon />
              )}
              <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} className={cls.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          data-testid="CommentCard.Content"
          gap="8"
          max
          className={classNames(cls.CommentCard, {}, [className])}
        >
          <AppLinkDeprecated
            to={getRouteProfile(comment.user.id)}
            className={cls.header}
          >
            {comment.user.avatar ? (
              <AvatarDeprecated src={comment.user.avatar} size={30} />
            ) : null}
            <TextDeprecated
              className={cls.username}
              title={comment.user.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated text={comment.text} className={cls.text} />
        </VStack>
      }
    />
  );
};
