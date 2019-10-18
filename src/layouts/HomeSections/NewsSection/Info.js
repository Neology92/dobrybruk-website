import styled from 'styled-components';

const Info = styled.p`
  color: ${({ theme }) => theme.color.greyL3};
  font-size: 1.5rem;

  text-align: center;
  padding: 30px 0 0 0;
  margin: 0;
  font-weight: 400;

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.8rem;
  }

  ${({ theme }) => theme.media.above.l} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    font-size: 2.3rem;
  }

  ${({ theme }) => theme.media.above.xxl} {
    font-size: 2.6rem;
  }
`;

export default Info;
