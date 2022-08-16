import { Link } from 'react-router-dom';

export const MovieItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`/movies/${id}`} key={id}>
        {title}
      </Link>
    </li>
  );
};
