import React from 'react';
import styled from 'styled-components';

const Decorations = () => <Wrapper />;

const Wrapper = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  display: none;

  ${({ theme }) => theme.media.above.l} {
    display: block;
  }
`;

export default Decorations;
