import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';

import 'assets/styles/fontsSansation.css';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Header, Footer } from 'components';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const MainLayout = ({ children, ...props }) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-158823669-1"
          />
          <script>
            {`window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-158823669-1');`}
          </script>
        </Helmet>
        <GlobalStyle />
        <CookieConsent
          location="bottom"
          buttonText="Akceptuję"
          flipButtons
          cookieName="gatsby-gdpr-google-analytics"
          style={{
            background: theme.color.darkGreen,
            color: theme.color.white,
          }}
          buttonStyle={{
            color: theme.color.white,
            background: theme.color.green,
            fontSize: '14px',
            borderRadius: '5px',
          }}
        >
          Używamy ciasteczek, aby polepszyć Twoje doświadczenia!
        </CookieConsent>
        <Header {...props} />
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
