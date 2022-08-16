import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container } from 'pages/Home/Home.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiMovieSearch } from 'services/apiMovies';
import { MovieItem } from '../../components/MovieItem/MovieItem';

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetch() {
      try {
        const response = await apiMovieSearch(query);
        await setMovie(response.data.results);
      } catch (error) {}
    }
    fetch();
  }, [query]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmit} />
      {movie.length === 0 ? (
        <p> Enter movie name</p>
      ) : (
        movie.map(({ id, title }) => (
          <MovieItem key={id} id={id} title={title}></MovieItem>
        ))
      )}
    </Container>
  );
};
