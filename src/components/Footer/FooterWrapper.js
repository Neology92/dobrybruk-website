import styled from 'styled-components';

const FooterWrapper = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.color.darkGreen};

  ${({ theme }) => theme.media.above.m} {
    padding: 25px;
    flex-direction: row-reverse;
  }
`;

export default FooterWrapper;
