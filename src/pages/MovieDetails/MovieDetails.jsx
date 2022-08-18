import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { apiMovieSearchById } from 'services/apiMovies';
import { StyledLink } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieItem, setMovieItem] = useState(null);
  const location = useLocation();
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
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <StyledLink to={backLinkHref}>Go back</StyledLink>
      <MovieCard
        title={title}
        poster_path={poster_path}
        overview={overview}
        vote_average={vote_average}
        genres={genres}
      />
      <AdditionalInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
