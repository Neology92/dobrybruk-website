import styled from 'styled-components';

const InfoName = styled.h4`
  padding: 0;
  margin: 0;

  color: ${({ theme }) => theme.color.darkGrey};
  text-align: left;
  font-size: 2.2rem;
  font-weight: 500;

  ${({ theme }) => theme.media.above.m} {
    font-size: 2.7rem;
  }
`;

export default InfoName;
