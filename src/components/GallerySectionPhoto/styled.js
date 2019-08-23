import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  margin: 25px 0 5px;
  width: 75%;

  box-shadow: 10px 10px 0px -5px ${({ theme }) => theme.color.greyL3};
`;

export { StyledImg };
