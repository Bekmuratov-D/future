
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Header.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';


interface HeaderProps {
  className?: string;
}


export function Header({className}: HeaderProps) {
  return (
    <div className={classNames(cls.header, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={'/'}>Main</AppLink>
        <AppLink to={'/error'}>Error</AppLink>
        <AppLink to={'/sing-in'}>Sing-In</AppLink>
      </div>
    </div>
  )
}
