import styled from 'styled-components';

const CallToScroll = styled.div`
  width: 100%;
  height: 100px;
  position: relative;

  background: ${({ bgColor }) => (bgColor ? bgColor : 'white')};

  &::after {
    content: '';
    width: 40px;
    height: 40px;

    transform: rotate(45deg);

    position: absolute;
    bottom: -20px;
    left: calc(50% - 20px);

    background: ${({ bgColor }) => (bgColor ? bgColor : 'white')};

    z-index: 9;
  }

  ${({ theme }) => theme.media.above.m} {
    display: none;
  }
`;

export default CallToScroll;
