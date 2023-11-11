import { ColorRing } from 'react-loader-spinner';
import scss from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={scss.loaderWrapper}>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        colors={['#55DDFF', '#C058F3', '#55DDFF', '#C058F3', '#55DDFF']}
      />
    </div>
  );
};
