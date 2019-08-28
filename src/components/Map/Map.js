import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import CityName from './CityName';

const Map = ({ googleMapsApiKey }) => {
  const location = { lat: 51.112471, lng: 17.541196 };

  const center = [51.1138, 17.541877];

  const cityNameCoords = { lat: 51.1147, lng: 17.541877 };

  const zoom = 16;

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={location.lat} lng={location.lng} text="DobryBruk " />
        <CityName
          lat={cityNameCoords.lat}
          lng={cityNameCoords.lng}
          name="Karwiniec"
        />
      </GoogleMapReact>
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

Map.propTypes = {
  googleMapsApiKey: PropTypes.string.isRequired,
};

export default Map;
