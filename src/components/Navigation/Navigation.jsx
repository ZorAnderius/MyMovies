import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.nav_link, isActive && styles.active);
};

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navContainer}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/movies">
            Movie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
