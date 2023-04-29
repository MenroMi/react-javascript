import Navigation from "../Navigation/Navigation";
// styles
import styles from "../../styles/Header.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
