import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './SearchForm.module.scss';
interface SearchFormProps {
  className?: string;
}

export const SearchForm = ({ className }: SearchFormProps) => {
  return (
    <div className={classNames(cls.SearchForm, {}, [className])}>
        <input type="text" />
    </div>
  );
};
