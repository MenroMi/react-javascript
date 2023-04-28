import Image from "next/image";
import myImg from "../../../public/myImage.jpg";

import styles from "../../styles/Me.module.scss";

export default function Me() {
  return (
    <section className={styles.me}>
      <div className={styles.info}>
        <div className={styles["info__lvl"]}>
          <span>JUNIOR</span>
        </div>
        <div className={styles["info__pos"]}>
          FRONT<span>-</span>END
          <br />
          DEVELOPER
        </div>
        <div className={styles["info__descr"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deserunt
          maxime sint rem facere, ducimus ipsam ipsa eos numquam temporibus
          esse? Dicta vitae eligendi, deleniti non animi veritatis natus quas?
        </div>
      </div>
      <Image src={myImg} alt="man" className={styles["main-photo"]} />
    </section>
  );
}
