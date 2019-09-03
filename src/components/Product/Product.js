import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useClickOutside } from 'utils';
import PopUp from '../PopUp/PopUp';
import Modal from '../Modal/Modal';

import IconWrapper from './IconWrapper';
import Text from './Text';
import { StyledIcon } from './styled';

const Product = ({ children, icon, name, photo1, photo2 }) => {
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
        <span tabIndex="-1">
          <div>
            <StyledIcon src={icon} />
          </div>
          <Text>{name}</Text>
        </span>
      </IconWrapper>

      <Shutter isModalOpen={isModalOpen} />
      <PopUp isModalOpen={isModalOpen} ref={modalRef}>
        <Modal
          name={name}
          icon={icon}
          photo1={photo1}
          photo2={photo2}
          setIsModalOpen={setIsModalOpen}
        >
          {children}
        </Modal>
      </PopUp>
    </>
  );
};

const Shutter = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.xl} {
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
  name: PropTypes.string.isRequired,
  photo1: PropTypes.object.isRequired,
  photo2: PropTypes.object.isRequired,
};

export default Product;
