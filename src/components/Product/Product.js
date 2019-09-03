import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useClickOutside } from 'utils';
import PopUp from '../PopUp/PopUp';
import Modal from '../Modal/Modal';
import Shutter from '../Shutter/Shutter';

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

      <Shutter isOpen={isModalOpen} />
      <PopUp isOpen={isModalOpen} ref={modalRef}>
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

Product.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo1: PropTypes.object.isRequired,
  photo2: PropTypes.object.isRequired,
};

export default Product;
