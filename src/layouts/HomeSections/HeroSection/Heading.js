import React from 'react';
import styled from 'styled-components';

const Heading = () => (
  <Wrapper>
    <MainStyledH2>Wstąp do nas,</MainStyledH2>
    <SecondStyledH2>
      <span>a pokochasz wakacje</span>
      <span>we własnym ogrodzie</span>
    </SecondStyledH2>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 290px;
  margin: 25px auto;

  ${({ theme }) => theme.media.above.s} {
    width: 320px;
    margin: 25px auto;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 550px;
    margin: 15px auto 0;
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 15px 0 0 20%;
  }
`;
const MainStyledH2 = styled.h2`
  font-size: 3.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkGreen};
  margin: 0 0 50px;
  padding: 0;
  text-align: left;

  ${({ theme }) => theme.media.above.m} {
    font-size: 4rem;
    margin: 0 0 6px;
  }
`;

const SecondStyledH2 = styled(MainStyledH2)`
  margin: 0;
  text-align: right;
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: 2.4rem;

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.above.m} {
    font-size: 2.7rem;
    text-align: center;
    flex-direction: row;
    & span {
      padding: 0 8px 0 0;
    }
  }
`;

export default Heading;
