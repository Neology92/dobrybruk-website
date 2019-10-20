import React from 'react';
import PropTypes from 'prop-types';

import { CallToScroll } from 'components';

import SectionWrapper from './SectionWrapper';
import Header from './Header';
import Info from './Info';
import OrnamentsLeft from './OrnamentsLeft';
import OrnamentsRight from './OrnamentsRight';

const NewsSection = ({ edges }) => (
  <>
    <SectionWrapper>
      <OrnamentsLeft />
      <OrnamentsRight />
      <Header>Aktualności</Header>
      {edges.map(({ node }) => (
        <Info key={node.id}>{node.info}</Info>
      ))}
    </SectionWrapper>
    <CallToScroll bgColor={({ theme }) => theme.color.white} />
  </>
);

NewsSection.propTypes = {
  edges: PropTypes.object.isRequired,
};

export default NewsSection;
