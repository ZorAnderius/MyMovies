import Container from '../Container/Container';
import styles from './Header.module.css';

const Header = ({children}) => {
  return (
    <header className={styles.header}>
      <Container>{children}</Container>
    </header>
  );
}

export default Header