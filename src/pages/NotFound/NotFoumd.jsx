import { Link } from 'react-router-dom';
import { Box } from './NotFound.styled';

export default function NotFound() {
  return (
    <Box>
      <h2>404 page not found!</h2>
      <Link to={'/'}>Go to Homepage</Link>
    </Box>
  );
}
