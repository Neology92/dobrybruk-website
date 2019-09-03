import styled from 'styled-components';

import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  display: block;
`;

const StyledImg = styled.img`
  width: 100%;

  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.04);
  }
`;

export { StyledLink, StyledImg };
