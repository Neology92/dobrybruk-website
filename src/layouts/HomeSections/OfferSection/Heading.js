import styled from 'styled-components';

const Heading = styled.div`
  width: 100%;
  height: 90px;

  color: ${({ theme }) => theme.color.white};
  font-size: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.color.darkGreen};
`;

export default Heading;
