import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                SingIn
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Чемпион 21-го сезона ЕПЛ получит $100 тыс. ... SAW переиграла
                Heroic в дебютном матче первого группового этапа на ESL Pro
                League Season 21
            </Modal>
        </div>
    );
};
