import React from 'react';
import styled from 'styled-components';

import telephone from 'assets/images/telephone.svg';
import mail from 'assets/images/mail.svg';
import fb from 'assets/images/fb.svg';

import ContactHeading from './ContactHeading';
import ContactSubheading from './ContactSubheading';
import InfoName from './InfoName';
import Addres from './Addres';
import { StyledA, StyledIcon } from './styled';

const ContactSection = () => {
  return (
    <SectionWrapper>
      <ContactHeading>Kontakt</ContactHeading>
      <InfoWrapper>
        <ContactSubheading>Iwona Legner</ContactSubheading>

        <InfoSection>
          <div>
            <StyledIcon src={telephone} /> <InfoName>Telefon:</InfoName>
          </div>
          <div>
            <StyledA href="tel:+48501435152">+48 501 435 152</StyledA>
          </div>
        </InfoSection>

        <InfoSection>
          <div>
            <StyledIcon src={mail} /> <InfoName>E-mail:</InfoName>
          </div>
          <div>
            <StyledA href="mailto:iwonalegner@gmail.com">
              iwonalegner@gmail.com
            </StyledA>
          </div>
        </InfoSection>

        <InfoSection>
          <div>
            <StyledIcon src={fb} />
            <InfoName>Facebook:</InfoName>
          </div>
          <div>
            <StyledA className="mobile" href="fb://page/460969323954657">
              /Dobrybruk
            </StyledA>
            <StyledA
              href="https://facebook.com/Dobrybruk"
              target="_blank"
              rel="noreferrer noopener"
              className="desktop"
            >
              /Dobrybruk
            </StyledA>
          </div>
        </InfoSection>
        <Addres />
      </InfoWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  width: 100%;
  padding: 80px 0 50px;
  background: ${({ theme }) => theme.color.greyL2};
`;

const InfoWrapper = styled.div`
  width: calc(100% - 30px);
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoSection = styled.div`
  width: 100%;
  margin: 40px 0 0;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .desktop {
    display: none;
  }
  ${({ theme }) => theme.media.above.m} {
    .desktop {
      display: inherit;
    }

    .mobile {
      display: none;
    }
  }
`;

export default ContactSection;
