import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import 'assets/styles/fontsSansation.css';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Header } from 'components';

const MainLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <StyledMain>{children}</StyledMain>
      </>
    </ThemeProvider>
  </>
);

const StyledMain = styled.main`
  width: 66vw;
`;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
