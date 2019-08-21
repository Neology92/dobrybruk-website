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

const MainStyledH2 = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkGreen};
  margin: 0 0 45px;
  padding: 0;
  text-align: left;

  ${({ theme }) => theme.media.above.m} {
    margin: 0 0 40px;
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 0 0 20px;
  }
`;

const SecondStyledH2 = styled(MainStyledH2)`
  margin: 0;
  text-align: right;
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: 2.7rem;

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.above.m} {
    text-align: center;
  }
  ${({ theme }) => theme.media.above.l} {
    flex-direction: row;

    & span {
      padding: 0 8px 0 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 300px;
  margin: 20px auto;

  ${({ theme }) => theme.media.above.s} {
    margin: 30px auto;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 550px;
    margin: 35px auto 0;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 550px;
    margin: 45px 0 0 20%;
  }
`;

export default Heading;
