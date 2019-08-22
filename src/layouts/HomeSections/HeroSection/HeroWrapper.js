import styled from 'styled-components';

import mobileHeroGrid from 'assets/images/mobileHeroGrid.svg';
import desktopHeroGrid from 'assets/images/desktopHeroGrid.svg';

const HeroWrapper = styled.section`
  width: 100%;
  height: 600px;

  background-color: ${({ theme }) => theme.color.greyL1};
  background-image: url(${mobileHeroGrid});
  background-position: center;

  & > div:first-of-type {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.above.m} {
    height: 724px;
    background-image: url(${desktopHeroGrid});
    & > div:first-of-type {
      padding-top: 0;
    }
  }
`;

export default HeroWrapper;
