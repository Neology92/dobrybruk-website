import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useClickOutside } from 'utils';
import PopUp from '../PopUp/PopUp';
import Modal from '../Modal/Modal';

import IconWrapper from './IconWrapper';
import Text from './Text';
import { StyledIcon } from './styled';

const Product = ({ children, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const switchModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useClickOutside(modalRef, () => {
    if (isModalOpen) {
      setIsModalOpen(!isModalOpen);
    }
  });

  return (
    <>
      <IconWrapper onClick={switchModal}>
        <div>
          <StyledIcon src={icon} />
        </div>
        <Text>{children}</Text>
      </IconWrapper>

      <Shutter isModalOpen={isModalOpen} />
      <PopUp isModalOpen={isModalOpen} ref={modalRef}>
        <Modal />
      </PopUp>
    </>
  );
};

const Shutter = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.l} {
    display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};

    background: rgb(${({ theme }) => theme.color.rgb.darkGreen}, 0.6);

    width: 100%;
    height: calc(100% - 80px);
    position: fixed;
    left: 0;
    top: 80px;
    z-index: 9999;
  }
`;

Product.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Product;
