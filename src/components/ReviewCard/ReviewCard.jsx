import { convertReviewDetail } from "../../helpers/convertReviewDetail";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  const { author, avatar_path, rating, content, created_at } =
    convertReviewDetail(review);

  return (
    <>
      <div className={styles.authorInfoContainer}>
        <div className={styles.authorImgName}>
          <div className={styles.authorAvatarThumb}>
            <img src={avatar_path} alt={author} />
          </div>
          <div className={styles.authorName}>
            <p className={styles.authorReview}>{author}</p>
            <p className={styles.ratingAuthor}>{rating} / 10</p>
          </div>
        </div>
        <p className={styles.createReviewDate}>{created_at}</p>
      </div>
      <p className={styles.reviewContent}>{content}</p>
    </>
  );
};

export default ReviewCard;
