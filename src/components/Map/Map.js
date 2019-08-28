import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import CityName from './CityName';

class Map extends Component {
  constructor(props) {
    super(props);

    this.googleMap = React.createRef();

    this.state = {
      defaultZoom: 16,
      zoom: 16,
    };
  }

  render() {
    const { googleMapsApiKey } = this.props;
    const { defaultZoom, zoom } = this.state;

    const location = { lat: 51.112471, lng: 17.541196 };
    const center = [51.1138, 17.541877];
    const cityNameCoords = { lat: 51.1147, lng: 17.541877 };

    const handleApiLoaded = map => {
      map.addListener('zoom_changed', () => {
        this.setState({
          zoom: map.getZoom(),
        });
      });
    };

    return (
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={center}
          defaultZoom={defaultZoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
        >
          <Marker
            lat={location.lat}
            lng={location.lng}
            text="DobryBruk "
            zoom={zoom}
          />
          <CityName
            lat={cityNameCoords.lat}
            lng={cityNameCoords.lng}
            name="Karwiniec"
            zoom={zoom}
          />
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

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
