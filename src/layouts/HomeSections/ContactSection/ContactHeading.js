import styled from 'styled-components';

const ContactHeading = styled.h2`
  margin: 0;
  padding: 0;

  font-size: 3.6rem;
  color: ${({ theme }) => theme.color.darkGreen};
  font-weight: 500;
  text-align: center;
`;

export default ContactHeading;
