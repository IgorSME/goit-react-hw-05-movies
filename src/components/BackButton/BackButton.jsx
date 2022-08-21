import { StyledLink } from 'pages/MovieDetails/MovieDetails.styled';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function BackButton() {
  const location = useLocation();
  const page = useRef(location.state?.from);
  //   console.log(page);
  const prevPage = page.current || '/';
  const backLinkHref = location.state?.from ?? prevPage;

  return <StyledLink to={backLinkHref}>Go back</StyledLink>;
}
