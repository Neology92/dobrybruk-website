import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 15px;
  position: absolute;
  z-index: 999;
  &:active {
    outline: blue;
  }
  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.media.above.m} {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  width: 28px;
  height: 22px;
`;
const Burger = styled.div`
  position: relative;
  transform: rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')})
    translateY(${({ isOpen }) => (isOpen ? '9px' : '0%')})
    translateX(${({ isOpen }) => (isOpen ? '-4px' : '0%')});
  &,
  &::after,
  &::before {
    content: '';
    width: 28px;
    height: 2px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  &::after {
    left: 0px;
    top: 18px;
    transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0')})
      translateX(${({ isOpen }) => (isOpen ? '-18px' : '0%')});
  }
  &::before {
    left: 0px;
    top: 9px;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    transform: translateX(${({ isOpen }) => (isOpen ? '9px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }
`;

const Hamburger = ({ isOpen, ...props }) => (
  <HamburgerWrapper {...props}>
    <InnerWrapper>
      <Burger isOpen={isOpen} />
    </InnerWrapper>
  </HamburgerWrapper>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
