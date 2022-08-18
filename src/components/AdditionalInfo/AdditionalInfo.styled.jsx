import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AddInfo = styled.div`
  padding: 0 34px;
`;
export const Title = styled.h3`
  margin: 0;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: tomato;
    font-weight: bold;
  }
`;
