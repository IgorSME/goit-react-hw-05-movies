export const MovieCard = ({
  title,
  poster_path,
  overview,
  vote_average,
  genres,
}) => {
  const imageUrl =
    poster_path && `https://image.tmdb.org/t/p/w300/${poster_path}`;
  const genresItem = genres.map(item => item.name).join(' ');
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>User score {Math.ceil(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genresItem}</p>
      </div>
    </div>
  );
};
