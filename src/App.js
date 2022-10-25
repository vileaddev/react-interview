import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import MovieCard from './components/pages/movie/MovieCard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieCard />} />
      </Routes>
    </>
  );
}

export default App;
