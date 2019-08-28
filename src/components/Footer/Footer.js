import React from 'react';
import styled from 'styled-components';

import logoBW from 'assets/images/logoBW.svg';
import FooterWrapper from './FooterWrapper';
import TextWrapper from './TextWrapper';
import Icon from '../Icon/Icon';
import { StyledLink } from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledIcon src={logoBW} alt="DobryBruk logo" />
      <TextWrapper>
        <div>© 2019 Dobrybruk</div>
        <StyledLink to="/polityka-prywatnosci">Polityka prywatności</StyledLink>
      </TextWrapper>
    </FooterWrapper>
  );
};

const StyledIcon = styled(Icon)`
  svg {
    width: 122px;
    height: 113px;
  }
`;

export default Footer;
