import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import Contact from './Contact';

const Sections = ({ ...props }) => {
  return (
    <Flex>
      <Description {...props} />
      <Contact />
    </Flex>
  );
};

const Flex = styled.div`
  height: 68%;
  width: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: row;
`;
export default Sections;
