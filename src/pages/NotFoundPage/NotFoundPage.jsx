import { useLocation } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();

  const routeBack = location.state?.from?.pathname === "/" ? "Home" : "Movie";
  const routLink = location.state?.from?.pathname === "/" ? "/" : "/movies";

  return (
    <>
      <GoBackBtn location={routLink}>{routeBack}</GoBackBtn>
      <div className={styles.errorContainer}>
        <div className={styles.errorText}>
          <p data-name="Ooops!!!">Ooops!!!</p>
          <p data-name="Something went wrong. Please try again later.">
            Something went wrong. Please try again later.
          </p>
        </div>
        <div className={styles.frameError}></div>
      </div>
    </>
  );
};

export default NotFoundPage;
