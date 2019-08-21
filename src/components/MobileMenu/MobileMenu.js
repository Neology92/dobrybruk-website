import React from 'react';
import PropTypes from 'prop-types';

import MenuLink from './MenuLink';
import MenuWrapper from './MenuWrapper';
import MenuLinksWrapper from './MenuLinksWrapper';
import { StyledLink } from './styled';

const menuItems = [
  { name: 'Galeria', slug: '/galeria-inspiracji' },
  { name: 'Kontakt', slug: '/' },
  { name: 'Oferta', slug: '/' },
];

const MobileMenu = ({ className, isOpen }) => (
  <MenuWrapper className={className} isOpen={isOpen}>
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
  className: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
