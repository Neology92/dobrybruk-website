import styled from 'styled-components';

const Info = styled.p`
  color: ${({ theme }) => theme.color.greyL3};
  font-size: 1.5rem;

  padding: 4px 10px 4px 10px;
  font-weight: 400;

  text-align: left;
  margin: 15px auto;

  width: 90vw;
  background: rgba(${({ theme }) => theme.color.rgb.green}, 0.3);
  border-radius: 2px;

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.8rem;
    width: 70vw;
  }

  ${({ theme }) => theme.media.above.l} {
    background: rgba(${({ theme }) => theme.color.rgb.green}, 0.1);
    padding: 8px 10px 8px 10px;
    margin: 25px auto;
    font-size: 2rem;
    width: 50vw;
  }

  ${({ theme }) => theme.media.above.xl} {
    font-size: 2.1rem;
    padding: 8px 20px 8px 20px;
    margin: 25px auto;
  }

  ${({ theme }) => theme.media.above.xxl} {
    font-size: 2.2rem;
    width: 45vw;
  }
`;

export default Info;
