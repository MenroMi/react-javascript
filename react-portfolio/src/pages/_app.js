import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
