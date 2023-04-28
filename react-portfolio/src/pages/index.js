import Me from "@/components/Me/Me";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import Contact from "@/components/Contact/Contact";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.sections}>
      <Me />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}
