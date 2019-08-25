import styled from 'styled-components';

const ContactHeading = styled.h2`
  margin: 0;
  padding: 0;

  font-size: 3.6rem;
  color: ${({ theme }) => theme.color.darkGreen};
  font-weight: 500;
  text-align: center;

  ${({ theme }) => theme.media.above.m} {
    height: 90px;
    width: 80%;
    margin: 0 0 0 auto;

    background: ${({ theme }) => theme.color.green};

    font-size: 2.7rem;
    color: ${({ theme }) => theme.color.white};

    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0 0 20%;

    position: relative;

    &::after {
      content: '';
      width: 180px;
      height: 180px;
      background: ${({ theme }) => theme.color.darkGreen};
      transform: rotate(45deg);

      position: absolute;
      top: calc(50% - 90px);
      right: -90px;
    }
  }
  ${({ theme }) => theme.media.above.l} {
    width: 66%;
  }
`;

export default ContactHeading;
