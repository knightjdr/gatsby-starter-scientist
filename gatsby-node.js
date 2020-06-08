const crypto = require('crypto');

const getPublications = require('./scripts/publications/index');

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-proposal-optional-chaining'),
  });
};

exports.sourceNodes = async ({
  actions: { createNode },
  getNode,
}) => {
  const { siteMetadata } = getNode('Site');

  const publicationDummy = {
    authors: [''],
    journal: '',
    issue: '',
    pages: '',
    pmid: 0,
    title: 'dummy',
    volume: '',
    year: 0,
  };

  const publications = siteMetadata.publications && siteMetadata.publications.length > 0
    ? await getPublications(siteMetadata.publications)
    : [];

  createNode({
    id: 'publications',
    parent: null,
    list: publications.length > 0 ? publications : [publicationDummy],
    internal: {
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(publications))
        .digest('hex'),
      type: 'Publications',
    },
  });
};
