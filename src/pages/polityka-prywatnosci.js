import React from 'react';

import { MainLayout } from 'layouts';
import { SEO } from 'components';
import styled from 'styled-components';

const PolitykaPrywatnosci = () => (
  <MainLayout>
    <SEO title="Polityka Prywatnosci" />
    <div style={{ height: '50px' }} />
    <Wrapper>
      <h1 style={{ textAlign: 'center' }}>Polityka Prywatnosci</h1>
      <h2>Ciasteczka (cookies)</h2>
      <p>
        Na naszej stronie wykorzystywane są pliki cookies. Są to pliki
        zapisywane przez serwer na urządzeniach użytkowników ułatwiające
        wyświetlanie strony, sprawdzeniu w jaki sposób użytkownik korzysta z
        naszej strony. Dodatkowo w ramach usługi Google Analytics zbierane są
        statystyki związane z użytkownikami odwiedzającymi naszego bloga. W
        każdej chwili użytkownik może usunąć pliki ciasteczek ze swojego
        urządzenia lub skonfigurować swoją przeglądarkę, aby nie zapisywała
        żadnych plików.
      </p>
    </Wrapper>
  </MainLayout>
);

const Wrapper = styled.section`
  width: 90vw;
  margin: auto;

  ${({ theme }) => theme.media.above.m} {
    width: 70vw;
  }
`;

export default PolitykaPrywatnosci;
