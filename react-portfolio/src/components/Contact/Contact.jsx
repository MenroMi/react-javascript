import { useState } from "react";
import Button from "@mui/material/Button";

import styles from "../../styles/Contact.module.scss";

export default function Contact() {
  const [contact, setContact] = useState([
    { name: "E-mail", link: "mailto:k.shchasny@gmail.com", id: 1 },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kiryl-shchasny-5b40a81b2/",
      id: 2,
    },
    { name: "GitHub", link: "https://github.com/MenroMi", id: 3 },
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100010338481544",
      id: 4,
    },
  ]);

  return (
    <section className={styles.contact}>
      <h2 className={styles["contact__title"]}>Contact Me</h2>
      <div className={styles["contact__list"]}>
        {contact.map(({ name, link, id }) => (
          <Button variant="outlined" key={id}>
            <a target="_blank" href={link}>
              {name}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
