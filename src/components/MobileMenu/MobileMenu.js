import React from 'react';
import PropTypes from 'prop-types';

import MenuLink from './MenuLink';
import MenuWrapper from './MenuWrapper';
import MenuLinksWrapper from './MenuLinksWrapper';
import { StyledLink } from './styled';

const menuItems = [
  { name: 'Home', slug: '/' },
  { name: 'Galeria', slug: '/galeria-inspiracji' },
  { name: 'Kontakt', slug: '/' },
  { name: 'Oferta', slug: '/' },
];

const MobileMenu = ({ isOpen }) => (
  <MenuWrapper isOpen={isOpen}>
    <MenuLinksWrapper>
      {menuItems.map(item => (
        <MenuLink isOpen={isOpen} key={item.name}>
          <StyledLink to={item.slug}>{item.name}</StyledLink>
        </MenuLink>
      ))}
    </MenuLinksWrapper>
  </MenuWrapper>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
