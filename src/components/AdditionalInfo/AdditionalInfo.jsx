import { AddInfo, StyledLink, Title } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <AddInfo>
      <Title>Additional information</Title>
      <ul>
        <li>
          <StyledLink to={'cast'}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={'reviews'}>Reviews</StyledLink>
        </li>
      </ul>
    </AddInfo>
  );
};
