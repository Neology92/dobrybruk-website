import styled from 'styled-components';

const OrnamentsRight = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.l} {
    display: block;

    width: 75px;
    height: 75px;

    position: absolute;
    right: 40px;
    top: 40px;
    z-index: 2;

    transform: rotate(45deg);

    background: ${({ theme }) => theme.color.green};

    ::after {
      content: '';
      width: 55px;
      height: 55px;
      position: absolute;

      bottom: -75px;
      right: -25px;

      background: ${({ theme }) => theme.color.green};
    }
    ::before {
      content: '';
      width: 33px;
      height: 33px;
      position: absolute;

      bottom: -100px;
      left: -10px;

      /* background: red; */
      background: ${({ theme }) => theme.color.green};
    }
  }
/* 
  ${({ theme }) => theme.media.above.xl} {
    left: -75px;
    top: 38px;
  } */
`;

export default OrnamentsRight;
