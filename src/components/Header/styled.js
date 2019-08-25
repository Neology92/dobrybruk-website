import styled from 'styled-components';

const StyledLogo = styled.h2`
  a {
    text-decoration: none !important;
    font-weight: bold;
    font-size: 2.7rem;
    color: white;
  }
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.media.above.m} {
    padding: 0 35px;
  }
`;

export { StyledLogo };
