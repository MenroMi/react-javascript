// basic
import Image from "next/image";

// images
import iconCSS from "../../assets/icons-technologies/css.svg";
import iconJS from "../../assets/icons-technologies/js.svg";
import iconReact from "../../assets/icons-technologies/react.svg";
import iconRedux from "../../assets/icons-technologies/redux.svg";
import iconTS from "../../assets/icons-technologies/ts.svg";
import iconHTML from "../../assets/icons-technologies/html.svg";
import iconSASS from "../../assets/icons-technologies/sass.svg";
import iconGIT from "../../assets/icons-technologies/git.svg";

// styles
import styles from "../../styles/TechStack.module.scss";

const stack = [
  {
    tech: "JavaScript",
    pic: iconJS,
    id: 1,
  },
  {
    tech: "TypeScript",
    pic: iconTS,
    id: 2,
  },
  { tech: "REACT", pic: iconReact, id: 3 },
  { tech: "REDUX", pic: iconRedux, id: 4 },
  { tech: "HTML5", pic: iconHTML, id: 5 },
  { tech: "CSS3", pic: iconCSS, id: 6 },
  { tech: "SASS", pic: iconSASS, id: 7 },
  { tech: "GIT", pic: iconGIT, id: 8 },
];

export default function TechStack() {
  return (
    <section id="stack" className={styles["stack"]}>
      <div className={styles["stack__info"]}>
        <h2>My Tech Stack</h2>
        <ul>
          {stack.map(({ tech, id, pic }) => (
            <li key={id}>
              <Image
                src={pic}
                width={80}
                height={80}
                alt={tech}
                draggable={false}
              />
              <h3>{tech}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
