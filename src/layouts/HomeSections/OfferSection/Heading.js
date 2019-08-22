import styled from 'styled-components';

const Heading = styled.h2`
  width: 100%;
  height: 90px;
  padding: 0;
  margin: 0;

  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  font-size: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.color.green};
`;

export default Heading;
