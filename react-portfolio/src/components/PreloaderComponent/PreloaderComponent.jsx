import Image from "next/image";
import loader from "../../../public/ripple-loader.svg";

import styles from "../../styles/PreloaderComponent.module.scss";

export default function PreloaderComponent() {
  return (
    <Image
      className={styles.loader}
      src={loader}
      width={300}
      height={300}
      alt="screen loader"
    />
  );
}
