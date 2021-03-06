import React from 'react';

import { MainLayout } from 'layouts';
import { SEO } from 'components';

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <h1>404: Nie znaleziono</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
);

export default NotFoundPage;
