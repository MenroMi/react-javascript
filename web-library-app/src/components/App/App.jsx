// basics
import { lazy, Suspense } from "react";
import Nav from "../reusabilityComponents/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Pages */
import { MainPage } from "../pages/index";

// styles
import "./App.scss";

const MangaPage = lazy(() => import("../pages/MangaPage"));
const SingleMangaPage = lazy(() => import("../pages/SingleMangaPage"));
const Page404 = lazy(() => import("../pages/404"));

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="mangas"
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <MangaPage />
              </Suspense>
            }
          />
          <Route
            path="mangas/:mangaId"
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <SingleMangaPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <Page404 />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
