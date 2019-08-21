import React from 'react';

import MenuWrapper from './MenuWrapper';
import MenuItem from './MenuItem';
import { StyledLink } from './styled';

const menuItems = [
  { name: 'Home', slug: '/' },
  { name: 'Galeria inspiracji', slug: '/galeria-inspiracji' },
  { name: 'Kontakt', slug: '/' },
  { name: 'Oferta', slug: '/' },
];

const DesktopMenu = () => {
  return (
    <MenuWrapper>
      {menuItems.map(item => (
        <MenuItem key={item.name}>
          <StyledLink to={item.slug}>{item.name}</StyledLink>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default DesktopMenu;
