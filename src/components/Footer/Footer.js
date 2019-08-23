import React from 'react';

import logoBW from 'assets/images/logoBW.png';
import FooterWrapper from './FooterWrapper';
import TextWrapper from './TextWrapper';
import { StyledLink } from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <img src={logoBW} alt="DobryBruk logo" />
      <TextWrapper>
        <div>© 2019 Dobrybruk</div>
        <StyledLink to="/polityka-prywatnosci">Polityka prywatności</StyledLink>
      </TextWrapper>
    </FooterWrapper>
  );
};

export default Footer;
