import React from 'react';
import styled from 'styled-components';

const Modal = () => {
  return (
    <Wrapper>
      <div />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  margin: 15px;

  background: ${({ theme }) => theme.color.greyL1};

  display: flex;
`;

export default Modal;
