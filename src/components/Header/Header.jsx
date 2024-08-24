import { useRef, useState } from "react";
import Container from "../Container/Container";
import HeaderObserver from "../HeaderObserver/HeaderObserver";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const observeRef = useRef(null);
  return (
    <>
      <HeaderObserver ref={observeRef} setVisible={setVisible} />
      <header className={clsx(styles.header, !isVisible && styles.fixed)}>
        <Container>{children}</Container>
      </header>
    </>
  );
};

export default Header;
