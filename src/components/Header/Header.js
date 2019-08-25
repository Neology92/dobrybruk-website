import React, { useState } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

import Hamburger from '../Hamburger/Hamburger';
import HeaderWrapper from './HeaderWrapper';
import MobileMenu from '../MobileMenu/MobileMenu';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import { StyledLogo } from './styled';

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <InnerDiv>
        <StyledLogo>
          <Link to="/">DobryBruk</Link>
        </StyledLogo>
      </InnerDiv>
      <InnerDiv />
      <InnerDiv>
        <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
        <MobileMenu isOpen={isMenuOpen} />
        <DesktopMenu />
      </InnerDiv>
    </HeaderWrapper>
  );
};

const InnerDiv = styled.div`
  height: 100%;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
