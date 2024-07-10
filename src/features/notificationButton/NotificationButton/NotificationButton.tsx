import { NotificationList } from 'entities/Notification';
import BellIcon from 'shared/assets/icons/bell.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover trigger={(
      <Button theme={ButtonTheme.CLEAR}>
        <Icon Svg={BellIcon} inverted />
      </Button>
    )}
    >
      <NotificationList className={cls.notification} />
    </Popover>
  );
};
