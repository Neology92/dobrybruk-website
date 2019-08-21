import React from 'react';
import styled from 'styled-components';

import logo from 'assets/images/logo.png';

const Logo = () => (
  <Wrapper>
    <StyledImg src={logo} />
  </Wrapper>
);

const StyledImg = styled.img`
  width: 90px;

  ${({ theme }) => theme.media.above.m} {
    width: 150px;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 200px;
  }

  ${({ theme }) => theme.media.above.xl} {
    width: 200px;
  }
`;

const Wrapper = styled.div`
  margin: 85px 0 0 5%;

  ${({ theme }) => theme.media.above.s} {
    margin: 85px 10% 0;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 550px;
    margin: 180px auto 0;
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 140px 0 0 20%;
  }
`;

export default Logo;
