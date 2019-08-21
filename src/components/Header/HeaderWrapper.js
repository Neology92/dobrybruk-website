import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.color.darkGreen};

  ${({ theme }) => theme.media.above.m} {
    justify-content: space-between;
  }
`;

export default HeaderWrapper;
