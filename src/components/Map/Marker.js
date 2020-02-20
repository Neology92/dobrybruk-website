import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pulsate } from 'assets/styles/keyframes';

const Marker = ({ text, zoom }) => {
  // console.log(zoom);
  return (
    <>
      <Pin />
      <Pulse />
      {zoom > 15 && <Text>{text}</Text>}
    </>
  );
};

const Pin = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: ${({ theme }) => theme.color.red};
  position: absolute;
  transform: rotate(-45deg);
  left: 0;
  top: -15px;
  margin: -20px 0 0 -20px;

  &:after {
    content: '';
    width: 14px;
    height: 14px;
    margin: 8px 0 0 8px;
    background: rgb(${({ theme }) => theme.color.rgb.black}, 0.4);
    position: absolute;
    border-radius: 50%;
  }
`;

const Pulse = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  left: 0;
  top: -15px;
  margin: 11px 0px 0px -12px;
  transform: rotateX(55deg);
  z-index: -2;

  &:after {
    content: '';
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    margin: -13px 0 0 -13px;
    animation: ${pulsate} 1s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    filter: alpha(opacity=0);
    box-shadow: 0 0 1px 2px ${({ theme }) => theme.color.red};
    animation-delay: 1.1s;
  }
`;

const Text = styled.h2`
  position: absolute;
  top: -85px;
  left: -52px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.white};

  width: 100px;
  height: 30px;
  background: ${({ theme }) => theme.color.darkGreen};

  display: flex;
  justify-content: center;
  align-items: center;
`;

Marker.propTypes = {
  text: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Marker;
