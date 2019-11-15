import React from 'react';
import PropTypes from 'prop-types';

import MenuWrapper from './MenuWrapper';
import MenuItem from './MenuItem';
import { StyledLink } from './styled';

const menuItems = [
  { name: 'Home', slug: '/#home' },
  { name: 'Galeria inspiracji', slug: '/galeria-inspiracji' },
  { name: 'Kontakt', slug: '/#kontakt' },
  { name: 'Oferta', slug: '/#oferta' },
];

const DesktopMenu = ({ isNews }) => {
  return (
    <MenuWrapper>
      {isNews ? (
        <MenuItem>
          <StyledLink to="/#news">Aktualności</StyledLink>
        </MenuItem>
      ) : null}
      {menuItems.map(item => (
        <MenuItem key={item.name}>
          <StyledLink to={item.slug}>{item.name}</StyledLink>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

DesktopMenu.propTypes = {
  isNews: PropTypes.number,
};

DesktopMenu.defaultProps = {
  isNews: 0,
};

export default DesktopMenu;
