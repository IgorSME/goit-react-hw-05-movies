import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  /* padding: 24px; */
`;
export const Header = styled.header`
  min-height: 48px;
  border-bottom: 1px solid black;
  padding: 10px 20px;
  z-index: 99;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: tomato;
  top: 0;
  left: 0;
  position: sticky;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 15px;

  &.active {
    color: white;
    font-weight: bold;
  }
`;
