import Logo from "../Logo/Logo";

// styles
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import styles from "../../styles/Navigation.module.scss";

const btnsArr = [
  { label: "About", id: 1 },
  { label: "projects", id: 2 },
  { label: "my Stack", id: 3 },
  { label: "contact", id: 4 },
];

export default function Navigation() {
  return (
    <nav className={styles["nav__cells"]}>
      <Logo />
      <Stack direction="row" spacing={3}>
        {btnsArr.map(({ label, id }) => {
          return (
            <Button className={styles.Button} key={id} variant="text">
              {label}
            </Button>
          );
        })}
      </Stack>
    </nav>
  );
}
