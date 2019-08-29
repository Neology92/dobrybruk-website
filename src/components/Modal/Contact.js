import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return <Wrapper />;
};

const Wrapper = styled.section`
  width: calc(50% - 20px);
  height: calc(100% - 20px);
  margin: 10px;

  background: ${({ theme }) => theme.color.greyL3};
`;

export default Contact;
