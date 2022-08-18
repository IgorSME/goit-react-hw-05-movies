import { useEffect } from 'react';
import { useState } from 'react';

import { apiMovieTrennding } from 'services/apiMovies';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Container } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await apiMovieTrennding();
        await setMovies(response.data.results);
      } catch (error) {}
    }
    fetch();
  }, []);

  if (movies.length === 0) {
    return;
  }

  return (
    <Container>
      {movies.map(({ id, title }) => (
        <MovieItem key={id} id={id} title={title}></MovieItem>
      ))}
    </Container>
  );
}
