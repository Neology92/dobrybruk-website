import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import 'assets/styles/fontsSansation.css';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Header, Footer } from 'components';

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
`;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
