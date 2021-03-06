import styled from 'styled-components';

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;

  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;

  ${({ theme }) => theme.media.above.m} {
    height: 90%;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export default TextWrapper;
