import React from 'react';
import styled from 'styled-components';

import gear from 'assets/images/gear.svg';
import { MainLayout } from 'layouts';
import { SEO, Icon } from 'components';
import { rotate } from 'assets/styles/keyframes';

const GaleriaInspiracji = () => (
  <MainLayout style={{ background: '#D3D3D3' }}>
    <SEO title="Galeria Inspiracji" />
    <div style={{ height: '50px' }} />
    <h1 style={{ textAlign: 'center' }}>Galeria Inspiracji</h1>
    <h2 style={{ textAlign: 'center' }}> Strona w budowie </h2>
    <StyledSmallGear src={gear} />
    <StyledBigGear src={gear} />
  </MainLayout>
);

const StyledSmallGear = styled(Icon)`
  width: 30px;
  height: 30px;
  margin: 100px auto 0;
  padding: 0 40px 0 0;

  svg {
    width: 30px;
    fill: ${({ theme }) => theme.color.darkGreen};
    animation: ${rotate} 6s 0.1s infinite linear reverse;
  }
`;

const StyledBigGear = styled(Icon)`
  width: 60px;
  margin: -22px auto;
  padding: 0 0 0 32px;
  svg {
    width: 100%;
    fill: ${({ theme }) => theme.color.darkGreen};
    animation: ${rotate} 6s infinite linear;
  }
`;

export default GaleriaInspiracji;
