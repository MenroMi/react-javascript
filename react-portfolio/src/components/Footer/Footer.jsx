import CopyrightIcon from "@mui/icons-material/Copyright";

import styles from "../../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.foo}>
      <div className={styles["foo__author"]}>
        <CopyrightIcon sx={{ fontSize: 25 }} />
        <div>Kiryl Shchasny </div>
      </div>
      <div className={styles["foo__mail"]}>k.shchasny@gmail.com</div>
    </footer>
  );
}
