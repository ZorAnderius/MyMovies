import default_user from "../assets/default_user.jpg";
import { imgAPIPath } from "../API/imgPath";

export const convertReviewDetail = ({
  author,
  author_details: { avatar_path, rating },
  content,
  created_at,
}) => {
  const date = new Date(created_at).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return {
    author,
    avatar_path: avatar_path ? imgAPIPath + avatar_path : default_user,
    rating: Math.round(rating),
    content: content.split("<em>").join("").split("</em>").join(""),
    created_at: date,
  };
};
