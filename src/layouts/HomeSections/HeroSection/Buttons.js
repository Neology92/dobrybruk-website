import React from 'react';
import styled from 'styled-components';

import { Button } from 'components';

const Buttons = () => (
  <Wrapper>
    <Button to="/">Poznaj ofertę</Button>
    <Button to="/" isTransparent>
      Kontakt
    </Button>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 300px;
  margin: 35px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.media.above.s} {
    width: 300px;
    padding: 0 40px 0 0;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 400px;
    padding: 0 150px 0 0;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 500px;
    padding: 0 100px 0 0;
    margin: 30px 0 0 20%;
  }

  ${({ theme }) => theme.media.above.xl} {
    width: 600px;
    margin: 30px 0 0 20%;
  }
`;

export default Buttons;
