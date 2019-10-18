import styled from 'styled-components';

const Header = styled.h2`
  font-size: 2.5rem;

  margin: 0;
  padding: 25px 0 0 15px;

  color: ${({ theme }) => theme.color.lightGreen};
  justify-content: left;

  ${({ theme }) => theme.media.above.m} {
    font-size: 2.6rem;
    padding: 40px 0 0 15vw;
  }

  ${({ theme }) => theme.media.above.l} {
    padding: 40px 0 0 220px;
    font-size: 2.9rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    font-size: 3.2rem;
  }

  ${({ theme }) => theme.media.above.xxl} {
    font-size: 3.6rem;
  }
`;

export default Header;
