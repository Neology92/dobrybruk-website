import styled from 'styled-components';

const OfferHeading = styled.h3`
  font-weight: 500;
  font-size: 3.6rem;
  color: ${({ theme }) => theme.color.darkGreen};

  margin: 50px 0 10px 15px;
  padding: 0;

  ${({ theme }) => theme.media.above.l} {
    margin: 50px 0 10px 45px;
  }
`;

export default OfferHeading;
