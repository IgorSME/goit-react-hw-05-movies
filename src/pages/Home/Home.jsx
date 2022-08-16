import { useEffect } from 'react';
import { useState } from 'react';

import { apiMovieTrennding } from 'services/apiMovies';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Container } from './Home.styled';

export const Home = () => {
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

  return (
    movies && (
      <Container>
        {movies.map(({ id, title }) => (
          <MovieItem key={id} id={id} title={title}></MovieItem>
        ))}
      </Container>
    )
  );
};
