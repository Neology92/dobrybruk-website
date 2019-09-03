import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useClickOutside } from 'utils';

import { StyledButton, StyledImg } from './styled';
import ImgWrapper from './ImgWrapper';
import ModalPhoto from './ModalPhoto';
import PopUp from '../PopUp/PopUp';
import Shutter from '../Shutter/Shutter';

const Photo = ({ node }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const popupRef = useRef(null);

  const switchModal = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  useClickOutside(popupRef, () => {
    if (isLightboxOpen) {
      setIsLightboxOpen(!isLightboxOpen);
    }
  });

  const titleCase = str => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    //! Titles repeating
    // console.log(splitStr.join(' '));

    return splitStr.join(' ');
  };

  return (
    <>
      <ImgWrapper>
        <StyledButton onClick={switchModal}>
          <StyledImg src={node.image.url} alt={titleCase(node.name)} />
        </StyledButton>
      </ImgWrapper>

      <Shutter isOpen={isLightboxOpen} isDark />
      <PopUp isOpen={isLightboxOpen} ref={popupRef} isGreen>
        <ModalPhoto
          src={node.image.url}
          name={titleCase(node.name)}
          category={node.category}
        />
      </PopUp>
    </>
  );
};

Photo.propTypes = {
  node: PropTypes.node.isRequired,
};

export default Photo;
