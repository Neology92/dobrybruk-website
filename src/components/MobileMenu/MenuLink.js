import styled from 'styled-components';

const MenuLink = styled.li`
  margin-bottom: 31px;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.atma};
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  line-height: 39px;
  font-weight: 400;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s 0.2s ease-in-out;
`;

export default MenuLink;
