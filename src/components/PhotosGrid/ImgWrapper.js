import styled from 'styled-components';

const ImgWrapper = styled.div`
  width: 100%;
  margin: 3px 0;

  ${({ theme }) => theme.media.above.s} {
    margin: 10px;
  }

  ${({ theme }) => theme.media.above.m} {
    width: calc(calc(100% / 2) - 20px);
  }

  ${({ theme }) => theme.media.above.xl} {
    width: calc(calc(100% / 3) - 20px);
  }

  ${({ theme }) => theme.media.above.xxxl} {
    margin: 15px;
    width: calc(calc(100% / 3) - 30px);
  }
`;

export default ImgWrapper;
