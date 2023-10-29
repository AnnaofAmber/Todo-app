import clsx from 'clsx';
import scss from './Button.module.scss'

export const Button = ({selected = false, type = 'button', children, ...otherProps}) => {
  return (
    <button
    className={clsx(scss.status, {
      [scss.isSelected]: selected
    })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
