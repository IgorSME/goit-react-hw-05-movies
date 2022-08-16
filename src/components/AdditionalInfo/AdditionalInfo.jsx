import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
