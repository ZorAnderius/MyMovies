import { Link } from 'react-router-dom';
import { TbArrowBigLeftFilled } from "react-icons/tb";
import styles from "./GoBackBtn.module.css";

const GoBackBtn = ({ location, children }) => {
  return (
    <Link to={location} className={styles.goBack}>
      <TbArrowBigLeftFilled />
      {children}
    </Link>
  );
};

export default GoBackBtn;