import React from 'react';
import styled from 'styled-components';

const Map = () => {
  return <MapWrapper />;
};

const MapWrapper = styled.div`
  background: ${({ theme }) => theme.color.greyL3};
  width: 60%;
`;

export default Map;
