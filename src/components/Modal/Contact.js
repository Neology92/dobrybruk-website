import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <InfoSection>
        <h1>Więcej informacji pod numerem telefonu:</h1>
        <h2>+48 501 435 152</h2>
      </InfoSection>
      <InfoSection>
        <h1>W punkcie sprzedaży:</h1>
        <h2>
          Karwiniec 22c <br /> 56-420 Bierutów
        </h2>
      </InfoSection>
      <InfoSection>
        <h1>Lub mailowo:</h1>
        <h2>iwonalegner@gmail.com</h2>
      </InfoSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  box-sizing: border-box;
  width: calc(50% - 20px);
  height: calc(100% - 20px);
  margin: 10px;
  padding: 2% 0;

  background: ${({ theme }) => theme.color.greyL3};

  ${({ theme }) => theme.media.above.xxxl} {
    padding: 4% 0;
  }
`;

const InfoSection = styled.address`
  width: 80%;
  margin: 30px 5% 15px 15%;

  & > h1 {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.color.darkGreen};
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
  }

  & > h2 {
    padding: 10px 0 0 20%;
    margin: 0;
    color: ${({ theme }) => theme.color.black};
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
  }

  ${({ theme }) => theme.media.above.xxl} {
    & > h1,
    & > h2 {
      font-size: 2rem;
    }
  }

  ${({ theme }) => theme.media.above.xxxl} {
    & > h1,
    & > h2 {
      font-size: 2.2rem;
    }
  }
`;

export default Contact;
