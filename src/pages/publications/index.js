import React from 'react';

import Layout from '../../components/layout/layout';
import Publications from '../../components/publications/publications-container';
import SEO from '../../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Publications />
  </Layout>
);

export default IndexPage;
