import styled from 'styled-components';

const Header = styled.h2`
  font-size: 2.5rem;

  margin: 0;
  padding: 25px 0 0 15px;

  color: ${({ theme }) => theme.color.lightGreen};
  justify-content: left;
`;

export default Header;
