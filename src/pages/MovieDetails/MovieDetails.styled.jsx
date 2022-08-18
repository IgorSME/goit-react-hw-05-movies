import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0 33px;
  &:hover {
    color: blue;
    transform: scale(1.1);
    font-weight: bold;
  }
`;
