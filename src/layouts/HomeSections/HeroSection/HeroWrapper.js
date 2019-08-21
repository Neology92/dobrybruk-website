import styled from 'styled-components';

import mobileHeroGrid from 'assets/images/mobileHeroGrid.svg';
import desktopHeroGrid from 'assets/images/desktopHeroGrid.svg';

const HeroWrapper = styled.section`
  width: 100%;
  height: 520px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.greyL1};
  background-image: url(${mobileHeroGrid});
  background-position: center;

  ${({ theme }) => theme.media.above.m} {
    height: 650px;
    background-image: url(${desktopHeroGrid});
  }
`;

export default HeroWrapper;
