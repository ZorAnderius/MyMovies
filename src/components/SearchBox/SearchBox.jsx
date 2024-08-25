import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import styles from "./SearchBox.module.css";

const SearchBox = ({ onSubmit, param }) => {
  const [query, setQuery] = useState(param || "");

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieTitle.value.trim();
    if (!query) {
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="movieTitle"
        placeholder="Search movie ..."
        autoComplete="off"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className={styles.btnSubmit}>
        <RiSearch2Line />
      </button>
    </form>
  );
};

export default SearchBox;
