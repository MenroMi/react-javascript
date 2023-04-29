import Logo from "../Logo/Logo";

// styles
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import styles from "../../styles/Navigation.module.scss";
import { useEffect, useRef, useState } from "react";

const btnsArr = [
  { label: "About", link: "about", id: 1 },
  { label: "projects", link: "projects", id: 2 },
  { label: "my Stack", link: "stack", id: 3 },
  { label: "contact", link: "contact", id: 4 },
];

export default function Navigation() {
  return (
    <nav className={styles["nav__cells"]}>
      <Logo />
      <Stack direction="row" spacing={3}>
        {btnsArr.map(({ label, link, id }) => {
          return (
            <Button className={styles.Button} key={id} variant="text">
              <a href={`#${link}`}>{label}</a>
            </Button>
          );
        })}
      </Stack>
    </nav>
  );
}
