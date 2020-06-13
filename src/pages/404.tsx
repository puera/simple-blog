import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ops... não tem nada aqui!</p>
  </Layout>
);

export default NotFoundPage;
