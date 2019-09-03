import styled from 'styled-components';

const Modal = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.xl} {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    height: 80vh;
    width: calc(80vh * 1.7);

    background: ${({ theme, isGreen }) =>
      isGreen ? theme.color.darkGreen : theme.color.darkGrey};

    position: fixed;
    top: 15%;
    left: calc(10vw * 1.7);

    z-index: 9999999;
  }
`;

export default Modal;
