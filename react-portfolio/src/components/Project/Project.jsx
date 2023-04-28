import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import OpenInNewTwoToneIcon from "@mui/icons-material/OpenInNewTwoTone";

import styles from "../../styles/Project.module.scss";

export default function Project({ name, descr, stack }) {
  return (
    <div className={styles.project}>
      <FolderOutlinedIcon
        className={styles["icon-folder"]}
        sx={{ fontSize: 70 }}
      />
      <OpenInNewTwoToneIcon
        className={styles["icon-link"]}
        sx={{ fontSize: 50, position: "absolute", right: "10px" }}
      />
      <div className={styles["project__info"]}>
        <h3 className={styles["project__info-title"]}>{name}</h3>
        <p className={styles["project__info-descr"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam
          architecto tempora. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <ul className={styles["project__info-stack"]}>
          {stack.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
