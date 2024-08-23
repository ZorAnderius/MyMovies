import { useId, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import styles from "./SearchBox.module.css";

const SearchBox = ({ onSubmit, param }) => {
  const searchId = useId();
  const [query, setQuery] = useState(param || '');

  const handleChange = ({ target: { value } }) => { 
    setQuery(value)
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieTitle.value.trim();
    if (!query) {
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={searchId}>Movie title: </label>
      <input
        id={searchId}
        type="text"
        name="movieTitle"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">
        <RiSearch2Line />
      </button>
    </form>
  );
};

export default SearchBox;
