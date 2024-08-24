import { forwardRef, useEffect, useMemo } from "react";
import styles from "./HeaderObserver.module.css";

const HeaderObserver = forwardRef(({ setVisible }, ref) => {
  const handleEntries = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  const option = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 1,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleEntries, option);
    const currentTarget = ref.current;
    currentTarget && observer.observe(currentTarget);

    return () => {
      currentTarget && observer.unobserve(currentTarget);
    };
  }, [option, ref]);
  return <div className={styles.headerObserve}></div>;
});

export default HeaderObserver;
