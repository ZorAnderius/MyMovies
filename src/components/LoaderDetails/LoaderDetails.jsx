import { ThreeDots } from "react-loader-spinner";
import styles from "./LoaderDetails.module.css";

const LoaderDetails = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={styles.loadDetails}
    />
  );
};

export default LoaderDetails;