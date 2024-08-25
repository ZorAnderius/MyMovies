import styles from './Loader.module.css';
import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <CirclesWithBar
      height="400"
      width="400"
      color="blue"
      outerCircleColor="blue"
      innerCircleColor="green"
      barColor="yellow"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass={styles.loader}
      visible={true}
    />
  );
}

export default Loader;