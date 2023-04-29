// basic
import { useEffect } from "react";

// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Me from "../Me/Me";
import About from "../About/About";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import Contact from "../Contact/Contact";

// preloader
import PreloaderComponent from "../PreloaderComponent/PreloaderComponent";

// styles
import styles from "../../styles/Home.module.scss";
import { useState } from "react";

export default function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 2000);
  }, []);

  return load ? (
    <PreloaderComponent />
  ) : (
    <div className={styles.app}>
      <Header />
      <div className={styles.sections}>
        <Me />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
