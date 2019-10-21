import styled from 'styled-components';

const CallToScroll = styled.div`
  width: 100%;
  height: 40px;
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
    height: 0px;

    &::after {
      content: '';
      width: 80px;
      height: 80px;

      transform: rotate(45deg);

      position: absolute;
      bottom: -40px;
      left: calc(50% - 40px);

      background: ${({ theme, bgColor }) =>
        bgColor ? bgColor : theme.color.greyL2};

      z-index: 9;
    }
    display: ${props => (props.display ? props.display : 'block')};
  }
`;

export default CallToScroll;
