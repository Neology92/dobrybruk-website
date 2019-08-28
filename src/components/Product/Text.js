import styled from 'styled-components';

const Text = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  padding: 0;
  margin: 5px auto 0;

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.8rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    font-size: 2.1rem;
  }
`;

export default Text;
