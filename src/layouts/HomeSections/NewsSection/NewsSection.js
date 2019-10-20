import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { CallToScroll } from 'components';

import SectionWrapper from './SectionWrapper';
import Header from './Header';
import Info from './Info';
import OrnamentsLeft from './OrnamentsLeft';
import OrnamentsRight from './OrnamentsRight';

const Scroller = styled.div`
  height: 0;
  width: 0;
  position: absolute;

  top: -81px;
  left: 0;
`;

const NewsSection = ({ edges }) => (
  <>
    {edges.length ? (
      <>
        <SectionWrapper>
          <Scroller id="news" />
          <OrnamentsLeft id="news" />
          <OrnamentsRight />
          <Header>Aktualności</Header>
          {edges.map(({ node }) => (
            <Info key={node.id}>{node.info}</Info>
          ))}
        </SectionWrapper>
        <CallToScroll
          bgColor={({ theme }) => theme.color.white}
          display="none"
        />
      </>
    ) : (
      <CallToScroll bgColor={({ theme }) => theme.color.white} />
    )}
  </>
);

NewsSection.propTypes = {
  edges: PropTypes.object.isRequired,
};

export default NewsSection;
