import React from 'react';

import MenuWrapper from './MenuWrapper';
import MenuItem from './MenuItem';
import { StyledLink } from './styled';

const menuItems = [
  { name: 'Home', slug: '/#hero' },
  { name: 'Galeria inspiracji', slug: '/galeria-inspiracji' },
  { name: 'Kontakt', slug: '/#contact' },
  { name: 'Oferta', slug: '/#offer' },
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
