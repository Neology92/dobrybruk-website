import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import 'assets/styles/fontsSansation.css';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Header, Footer } from 'components';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const MainLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </>
    </ThemeProvider>
  </>
);

const StyledMain = styled.main`
  width: 100%;
  margin-top: 80px;
  min-height: calc(100vh);
`;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
