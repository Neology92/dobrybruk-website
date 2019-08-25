import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;

  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;

  ${({ theme }) => theme.media.above.m} {
    text-decoration: none;
    padding: 5px 0 0;

    color: ${({ theme }) => theme.color.greyL3};

    & :hover {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export { StyledLink };
