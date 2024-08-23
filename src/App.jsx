import { Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'
import Navigation from './components/Navigation/Navigation'
import Section from './components/Section/Section'
import HomePage from './pages/HomePage/HomePage'
import MoviePage from './pages/MoviePage/MoviePage'
import Header from './components/Header/Header'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'

function App() {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Section>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/movies" element={<MoviePage />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
                <Route path='casts' element={<MovieCast />} />
                <Route path='reviews' element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App
