import React from 'react';
import styled from 'styled-components';

import pin from 'assets/images/pin.svg';
import { Icon, Button } from 'components';

const Addres = () => (
  <Wrapper>
    <Icon src={pin} />
    <div>Karwiniec 22c</div>
    <div>56-420 Bierutów</div>
    <Button
      to="https://www.google.com/maps/place/DobryBruk.pl+%7C+Kostka+Brukowa+IWONA+LEGNER/@51.112427,17.5389322,17z/data=!3m1!4b1!4m5!3m4!1s0x4710196655d3496d:0x6ca99ccf33df16a6!8m2!3d51.112427!4d17.5411209"
      isOutsideLink
      isWhite
    >
      Pokaż na mapie
    </Button>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 60px 40px;
  margin: 60px 0 0;

  background: ${({ theme }) => theme.color.green};

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.color.white};
  font-size: 2.7rem;
  font-weight: 500;
  text-align: left;

  & > div {
    margin-bottom: 10px;
  }

  & > div:first-of-type {
    margin-bottom: 30px;
  }

  a {
    margin-top: 30px;
  }
`;

export default Addres;
