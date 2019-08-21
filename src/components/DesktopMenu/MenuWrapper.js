import styled from 'styled-components';

const MenuWrapper = styled.nav`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export default MenuWrapper;
