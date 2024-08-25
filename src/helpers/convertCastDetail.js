import menTemplate from "../assets/man_template.jpg";
import womenTemplate from "../assets/women_template.jpg";
import { imgAPIPath } from "../API/imgPath";

export const convertCastDetail = ({
  id,
  name,
  profile_path,
  popularity,
  gender,
  character,
}) => {
  const genderImg = gender === 1 ? womenTemplate : menTemplate;
  return {
    id,
    name,
    character,
    profile_path: profile_path ? imgAPIPath + profile_path : genderImg,
    popularity: popularity?.toLocaleString("en-US") || "0",
  };
};
