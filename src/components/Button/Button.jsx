import clsx from 'clsx';
import scss from './Button.module.scss'
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/selectors';

export const Button = ({selected = false, type = 'button', children, ...otherProps}) => {
  const theme = useSelector(getTheme)
  return (
    <button
    className={clsx(scss.status, {
      [scss.isSelected]: selected,[scss.dark]:theme
    })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
