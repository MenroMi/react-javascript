import Image from "next/image";
import Button from "@mui/material/Button";

import styles from "../../styles/About.module.scss";
import myImg from "../../../public/myImage.jpg";

export default function About() {
  return (
    <section className={styles.about}>
      <Image src={myImg} alt="man" className={styles["main-photo"]} />

      <div className={styles.info}>
        <h2 className={styles["info__title"]}>About me:</h2>
        <p className={styles["info__descr"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nisi,
          harum quod quasi officia totam, ut, numquam quaerat rerum fuga
          deserunt corporis provident qui maiores. Quam quos minima doloremque
          ut? Perspiciatis omnis, nostrum in quae repellendus nihil quisquam
          harum minima optio esse, nisi quas repudiandae laborum soluta,
          recusandae eos hic dolorem! Enim neque modi dolores, commodi iste
          quasi quidem aliquam!
        </p>

        <Button variant="outlined" className={styles["info__resume"]}>
          <a href="https://drive.google.com/u/0/uc?id=1afNEJdZuCEnLMhwQvsE7T9DdDP7vVSU2&export=download">
            Get my Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
