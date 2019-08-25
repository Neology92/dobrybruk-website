import styled from 'styled-components';

const ContactSubheading = styled.h3`
  padding: 5px 0 0;
  margin: 0;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 500;
  text-align: center;

  ${({ theme }) => theme.media.above.m} {
    margin: 110px 0 15px 0;
    width: 90%;
    text-align: left;
    font-size: 2.7rem;
  }
`;

export default ContactSubheading;
