import { ItemRev } from './ReviewsItem.styled';
import { Text } from './ReviewsItem.styled';
import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, content }) => {
  return (
    <ItemRev>
      <h3>Author : {author}</h3>
      <Text>{content}</Text>
    </ItemRev>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
