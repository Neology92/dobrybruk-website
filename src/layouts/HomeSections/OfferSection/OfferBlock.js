import styled from 'styled-components';

const OfferBlock = styled.div`
  padding: 50px 10px;
  margin: 0;

  background: ${({ theme }) => theme.color.greyL2};

  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 30px 0px;

  ${({ theme }) => theme.media.above.s} {
    grid-gap: 30px;
  }

  ${({ theme }) => theme.media.above.l} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    grid-gap: 5vw;
    grid-auto-flow: column;
    padding: 50px 5vw;
  }

  ${({ theme }) => theme.media.above.xl} {
    padding: 100px 5vw;
  }

  ${({ theme }) => theme.media.above.xxl} {
    padding: 100px 6vw;
  }
`;

export default OfferBlock;
