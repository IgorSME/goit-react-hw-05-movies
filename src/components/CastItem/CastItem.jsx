export const CastItem = ({ name, character, profile_path }) => {
  const imageUrl =
    profile_path && `https://image.tmdb.org/t/p/w200/${profile_path}`;
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>Character : {character}</p>
    </li>
  );
};
