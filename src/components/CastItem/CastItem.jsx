import { Item } from './CastItem.styled';
import defaultImage from '../../images/no-poster.png';
import PropTypes from 'prop-types';

export const CastItem = ({ name, character, profile_path }) => {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : `${defaultImage}`;
  return (
    <Item>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>Character : {character}</p>
    </Item>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};
