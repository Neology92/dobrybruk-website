import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Header from './Header';
import Sections from './Sections';

const Modal = ({ name, children, icon, photo1, photo2, setIsModalOpen }) => {
  return (
    <Wrapper>
      <Header
        name={name}
        photo1={photo1}
        photo2={photo2}
        setIsModalOpen={setIsModalOpen}
      />
      <Sections icon={icon}>{children}</Sections>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  margin: 15px;

  background: ${({ theme }) => theme.color.greyL1};

  display: flex;
  flex-direction: column;
`;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo1: PropTypes.string.isRequired,
  photo2: PropTypes.string.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal;
