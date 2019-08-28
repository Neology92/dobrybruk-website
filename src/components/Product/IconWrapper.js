import styled from 'styled-components';

const IconWrapper = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: transparent;

  > div {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => theme.media.above.s} {
      height: 80px;
    }

    ${({ theme }) => theme.media.above.m} {
      height: 80px;
    }

    ${({ theme }) => theme.media.above.l} {
      height: 90px;
    }

    ${({ theme }) => theme.media.above.xl} {
      height: 120px;
    }
  }

  ${({ theme }) => theme.media.above.m} {
    h4 {
      color: ${({ theme }) => theme.color.lightGreen};
    }

    &:hover h4 {
      color: ${({ theme }) => theme.color.green};
    }
    &:focus {
      outline: #4d90fe solid 1px;
    }
  }
`;

export default IconWrapper;
