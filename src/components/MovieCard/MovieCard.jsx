import { CardDescription, Wrap } from './MovieCard.styled';
import defaultImage from '../../images/no-poster.png';
import PropTypes from 'prop-types';

export const MovieCard = ({
  title,
  poster_path,
  overview,
  vote_average,
  genres,
}) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : `${defaultImage}`;
  const genresItem = genres.map(item => item.name).join(' ');

  return (
    <Wrap>
      <img src={imageUrl} alt={title} />
      <CardDescription>
        <h2>{title}</h2>
        <p>User score {Math.ceil(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genresItem}</p>
      </CardDescription>
    </Wrap>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.string.isRequired,
};
