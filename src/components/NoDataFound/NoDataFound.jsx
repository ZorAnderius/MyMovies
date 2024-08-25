import styles from "./NoDataFound.module.css";

const NoDataFound = ({ query, children }) => {
  return (
    <div className={styles.notFoundContainer}>
      {query ? (
        <p>
          {" "}
          Movies with<span> "{query}" </span>have been not found.
        </p>
      ) : (
        <p>{children}</p>
      )}
    </div>
  );
};

export default NoDataFound;
