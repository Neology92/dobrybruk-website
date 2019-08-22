import styled from 'styled-components';

const OfferBlock = styled.div`
  padding: 50px 10px;
  margin: 0;

  background: ${({ theme }) => theme.color.greyL3};

  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export default OfferBlock;
