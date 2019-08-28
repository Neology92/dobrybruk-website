import React from 'react';
import styled from 'styled-components';

import telephone from 'assets/images/telephone.svg';
import mail from 'assets/images/mail.svg';
import fb from 'assets/images/fb.svg';

import ContactHeading from './ContactHeading';
import ContactSubheading from './ContactSubheading';
import InfoName from './InfoName';
import Addres from './Addres';
import Decorations from './Decorations';
import { StyledA, StyledIcon } from './styled';

const ContactSection = () => {
  return (
    <>
      <Decorations />
      <SectionWrapper id="kontakt">
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
    </>
  );
};

const SectionWrapper = styled.section`
  overflow: hidden;

  width: 100%;
  padding: 80px 0 50px;
  background: ${({ theme }) => theme.color.greyL2};

  ${({ theme }) => theme.media.above.m} {
    padding: 150px 0 80px;
    > div {
      width: 80%;
      margin: 0 0 0 auto;
      padding: 0;
    }
  }

  ${({ theme }) => theme.media.above.l} {
    padding: 150px 0 100px;
    > div {
      width: 66%;
    }
  }
`;

const InfoWrapper = styled.div`
  width: calc(100% - 30px);
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.above.m} {
    align-items: flex-end;
  }
`;

const InfoSection = styled.div`
  width: 220px;
  margin: 40px auto 0;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .desktop {
    display: none;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 90%;
    margin: 5px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .desktop {
      display: inherit;
    }

    .mobile {
      display: none;
    }
  }
`;

export default ContactSection;
