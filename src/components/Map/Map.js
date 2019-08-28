import React from 'react';
import styled from 'styled-components';

const Map = () => {
  return (
    <MapWrapper>
      <div />
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    background: ${({ theme }) => theme.color.greyL3};
    width: 60%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Map;
