import { CSSProperties, useMemo } from 'react';

import UserIcon from '../../assets/icons/user.svg';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt,
    fallbackInverted,
  } = props;

  const mods: Mods = {

  };

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
