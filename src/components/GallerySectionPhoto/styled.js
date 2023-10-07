import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const StyledImg = styled(GatsbyImage)`
  margin: 25px 0 5px 0;
  width: 75%;

  box-shadow: 10px 10px 0px -5px ${({ theme }) => theme.color.greyL3};

  ${({ theme }) => theme.media.above.m} {
    width: 50vw;
    ${({ isLeft, theme }) =>
      isLeft
        ? `box-shadow:  -7vw 0px 0px 10px ${theme.color.greyL3};
      margin: 25px 0 25px 7vw;
      `
        : `box-shadow: 7vw 0px 0px 10px ${theme.color.greyL3};
      margin: 25px 7vw 25px 0;
      `}
  }
  ${({ theme }) => theme.media.above.xl} {
    width: 40vw;
  }
`;

export { StyledImg };
