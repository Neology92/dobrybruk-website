import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import truck from 'assets/images/truck.svg';
import paving from 'assets/images/paving.svg';

import { Product } from 'components';

import OfferHeading from './OfferHeading';
import OfferBlock from './OfferBlock';

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      truckPhoto1: file(relativePath: { eq: "offer/truckPhoto1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      truckPhoto2: file(relativePath: { eq: "offer/truckPhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      pavingPhoto1: file(relativePath: { eq: "offer/pavingPhoto1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pavingPhoto2: file(relativePath: { eq: "offer/pavingPhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <OfferHeading>Usługi</OfferHeading>
      <OfferBlock>
        <Product
          icon={truck}
          name="Transport HDS"
          photo1={data.truckPhoto1.childImageSharp.fluid}
          photo2={data.truckPhoto2.childImageSharp.fluid}
        >
          <p>Wycena indywidualna</p>
        </Product>
        <Product
          icon={paving}
          name="Brukarstwo"
          photo1={data.pavingPhoto1.childImageSharp.fluid}
          photo2={data.pavingPhoto2.childImageSharp.fluid}
        >
          <p>Wycena indywidualna</p>
        </Product>
      </OfferBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  &::before {
    display: none;
  }

  ${({ theme }) => theme.media.above.l} {
    &::before {
      display: none;
      display: block;
      content: '';
      width: 2px;
      height: 60%;
      background: ${({ theme }) => theme.color.white};

      position: absolute;
      top: 30%;
      left: -1px;
    }
  }
  ${({ theme }) => theme.media.above.xl} {
    & > div {
      padding-right: 5vw;
    }
  }
`;

export default Services;

