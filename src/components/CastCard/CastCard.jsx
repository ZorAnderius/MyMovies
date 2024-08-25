import { convertCastDetail } from "../../helpers/convertCastDetail";
import styles from "./CastCard.module.css";
const CastCard = ({ cast }) => {
  const { name, profile_path, popularity, character } = convertCastDetail(cast);
  return (
    <>
      <div className={styles.frontCastContainer}>
        <div className={styles.imgThumbCast}>
          <img src={profile_path} alt={name} />
        </div>
        <div className={styles.nameCastContainer}>
          <p>{name}</p>
          <div className={styles.castLine}></div>
          <p className={styles.character}>{character}</p>
        </div>
      </div>
      <div className={styles.backCastContainer}>
        <p className={styles.popularity}>
          Popularity: <span>{popularity}</span>
        </p>
      </div>
    </>
  );
};

export default CastCard;
