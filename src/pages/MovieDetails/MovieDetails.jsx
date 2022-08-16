import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { apiMovieSearchById } from 'services/apiMovies';

export const MovieDetails = () => {
  const [movieItem, setMovieItem] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    async function fetch() {
      try {
        const response = await apiMovieSearchById(movieId);
        await setMovieItem(response.data);
      } catch (error) {}
    }
    fetch();
  }, [movieId]);
  if (!movieItem) {
    return;
  }
  const { title, poster_path, overview, vote_average, genres } = movieItem;
  return (
    <>
      <MovieCard
        title={title}
        poster_path={poster_path}
        overview={overview}
        vote_average={vote_average}
        genres={genres}
      />
      <AdditionalInfo />
      <Outlet />
    </>
  );
};
