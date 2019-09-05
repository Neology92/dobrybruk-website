import styled from 'styled-components';

const Heading = styled.h1`
  width: 320px;
  height: 70px;

  background: ${({ theme }) => theme.color.green};

  text-align: center;
  line-height: 65px;
  color: ${({ theme }) => theme.color.white};
  font-size: 3.2rem;
  font-weight: 500;

  position: relative;

  ::after {
    content: '';
    width: 32px;
    height: 32px;

    transform: rotate(45deg);
    background: ${({ theme }) => theme.color.green};

    position: absolute;
    bottom: -16px;
    left: calc(50% - 16px);
  }

  ${({ theme }) => theme.media.above.m} {
    width: 240px;
    height: 60px;

    background: ${({ theme }) => theme.color.greyL1};

    text-align: center;
    line-height: 74px;
    color: ${({ theme }) => theme.color.darkGreen};
    font-size: 2.6rem;

    position: absolute;
    top: 80px;
    left: calc(50% - 120px);

    ::after {
      content: '';
      width: 0;
      height: 0;

      transform: rotate(0);
      background: none;

      border-top: 120px solid ${({ theme }) => theme.color.greyL1};
      border-right: 120px solid rgb(0, 0, 0, 0);
      border-bottom: 120px solid transparent;
      border-left: 120px solid transparent;

      position: absolute;
      bottom: -240px;
      left: 0;
    }
  }

  ${({ theme }) => theme.media.above.l} {
    width: 320px;
    height: 70px;

    font-size: 3.2rem;

    left: calc(50% - 160px);

    ::after {
      border-top: 160px solid ${({ theme }) => theme.color.greyL1};
      border-right: 160px solid rgb(0, 0, 0, 0);
      border-bottom: 160px solid transparent;
      border-left: 160px solid transparent;

      bottom: -320px;
    }
  }
`;

export default Heading;
