import React from 'react';
import styled from 'styled-components';

import pin from 'assets/images/pin.svg';
import { Icon } from 'components';

const Addres = () => (
  <Wrapper>
    <Icon src={pin} />
    <div>Karwiniec 22c</div>
    <div>56-420 Bierutów</div>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 60px 40px;
  margin: 100px 0 0;

  background: ${({ theme }) => theme.color.green};

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.color.white};
  font-size: 2.7rem;
  font-weight: 500;
  text-align: left;

  & > div {
    margin-bottom: 10px;
  }

  & > div:first-of-type {
    margin-bottom: 30px;
  }
`;

export default Addres;
