import styled from 'styled-components';

const OrnamentsLeft = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.l} {
    display: block;

    width: 150px;
    height: 150px;

    position: absolute;
    left: -90px;
    top: 20px;
    z-index: 2;

    transform: rotate(45deg);

    background: ${({ theme }) => theme.color.green};

    ::after {
      content: '';
      width: 100px;
      height: 100px;
      position: absolute;

      top: -65px;
      right: -115px;

      background: ${({ theme }) => theme.color.green};
    }
    ::before {
      content: '';
      width: 115px;
      height: 115px;
      position: absolute;

      top: 35px;
      right: -115px;

      /* background: red; */
      background: ${({ theme }) => theme.color.darkGreen};
    }
  }

  ${({ theme }) => theme.media.above.xl} {
    left: -75px;
    top: 38px;
  }
`;

export default OrnamentsLeft;
