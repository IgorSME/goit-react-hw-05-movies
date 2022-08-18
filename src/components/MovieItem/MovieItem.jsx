import { useLocation } from 'react-router-dom';
import { Item, StyledLink } from './MovieItem.styled';
import PropTypes from 'prop-types';

export const MovieItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <Item>
      <StyledLink to={`/movies/${id}`} key={id} state={{ from: location }}>
        {title}
      </StyledLink>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
