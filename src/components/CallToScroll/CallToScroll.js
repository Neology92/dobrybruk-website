import styled from 'styled-components';

const CallToScroll = styled.div`
  width: 100%;
  height: 100px;
  position: relative;

  background: ${({ color }) => (color ? color : 'white')};

  &::after {
    content: '';
    width: 40px;
    height: 40px;

    transform: rotate(45deg);

    position: absolute;
    bottom: -20px;
    left: calc(50% - 20px);

    background: ${({ color }) => (color ? color : 'white')};

    z-index: 999999;
  }
`;

export default CallToScroll;
