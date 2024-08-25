import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { LuArrowBigUp } from "react-icons/lu";
import { lazy, Suspense } from "react";

import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviePage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                  <Route path="casts" element={<MovieCast />} />
                  <Route path="reviews" element={<MovieReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Container>
        </Section>
      </main>
      <ScrollToTop
        className={styles.scrollToTop}
        smooth
        component={<LuArrowBigUp size={30} />}
      />
    </>
  );
}

export default App;
