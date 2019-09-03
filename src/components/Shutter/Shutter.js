import styled from 'styled-components';

const Shutter = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.xl} {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    background: rgb(
      ${({ theme, isDark }) =>
        isDark ? theme.color.rgb.black : theme.color.rgb.darkGreen},
      0.6
    );

    width: 100%;
    height: calc(100% - 80px);
    position: fixed;
    left: 0;
    top: 80px;
    z-index: 9999;
  }
`;

export default Shutter;
