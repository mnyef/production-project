import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme, AppLink } from 'shared/UI/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                Home
            </AppLink>
            <AppLink theme={AppLinkTheme.RED} to="/about">
                About
            </AppLink>
        </div>
    </div>
);
