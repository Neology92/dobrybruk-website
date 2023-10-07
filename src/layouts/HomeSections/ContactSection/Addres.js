import React from 'react';
import styled from 'styled-components';

import pin from 'assets/images/pin.svg';
import { Icon, Map } from 'components';
import { StyledButton } from './styled';

const Addres = () => (
  <Wrapper>
    <Map
      address={{ lat: 51.11242713334476, lng: 17.541121244430542 }}
      googleMapsApiKey="AIzaSyA81c-s9eSyUzOBMTdeeJ5RUbEzXzFLABQ"
    />
    <InnerWrapper>
      <Icon src={pin} />
      <div>Karwiniec 22b</div>
      <div>56-420 Bierutów</div>
      <StyledButton
        to="https://www.google.com/maps/place/DobryBruk.pl+%7C+Kostka+Brukowa+IWONA+LEGNER/@51.112427,17.5389322,17z/data=!3m1!4b1!4m5!3m4!1s0x4710196655d3496d:0x6ca99ccf33df16a6!8m2!3d51.112427!4d17.5411209"
        isOutsideLink
        isWhite
      >
        Pokaż na mapie
      </StyledButton>
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 90%;
  margin: 60px 0 0;
  padding: 10px;
  background: ${({ theme }) => theme.color.green};

  ${({ theme }) => theme.media.above.s} {
    width: 70%;
    margin: 100px 0 0;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const InnerWrapper = styled.div`
  padding: 50px 30px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.color.white};
  font-size: 2.4rem;
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

  ${({ theme }) => theme.media.above.m} {
    padding: 70px 30px;
  }

  ${({ theme }) => theme.media.above.l} {
    padding: 90px 30px;
  }

  ${({ theme }) => theme.media.above.xl} {
    padding: 120px 30px;
  }
`;

export default Addres;

