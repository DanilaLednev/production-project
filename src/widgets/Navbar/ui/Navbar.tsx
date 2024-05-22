/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-no-comment-textnodes */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import i18n from '../../../shared/config/i18n/i18n';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setisAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setisAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, neque accusantium totam cum illum repudiandae ex exercitationem natus suscipit? Voluptatem perspiciatis explicabo neque eaque maiores asperiores molestias hic ab vero!
      </Modal>
    </div>
  );
};
