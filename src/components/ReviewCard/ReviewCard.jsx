import styles from './ReviewCard.module.css';

const ReviewCard = ({review}) => {
  return (
    <div>
      <p>{review.author}</p>
      <p>{review.author_details.avatar_path}</p>
      <p>{review.author_details.rating}</p>
      <p>{review.content.split("<em>").join("").split("</em>")}</p>
      <p>{review.created_at}</p>
    </div>
  );
}

export default ReviewCard