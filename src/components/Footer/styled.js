import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;

  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
`;

export { StyledLink };
