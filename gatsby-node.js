const crypto = require('crypto');

const getPublications = require('./scripts/publications/index');

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    schema.buildObjectType({
      name: 'FooterLink',
      fields: {
        link: 'String',
        text: 'String',
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        email: 'String',
        name: 'String',
        order: 'Int',
        title: 'String',
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'MarkdownRemark',
      fields: {
        frontmatter: 'Frontmatter',
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'Publication',
      fields: {
        authors: '[String]',
        journal: 'String',
        issue: 'String',
        pages: 'String',
        pmid: 'Int',
        title: 'String',
        volume: 'String',
        year: 'Int',
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'Publications',
      fields: {
        list: {
          type: '[Publication]',
          resolve: (source) => source.list || [],
        },
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'SiteMetadata',
      fields: {
        footerLinks: {
          type: '[FooterLink]',
        },
        publications: {
          type: '[Int]',
          resolve: (source) => source.primaryLinks || [],
        },
        primaryLinks: {
          type: '[String]',
          resolve: (source) => source.primaryLinks || [],
        },
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'Site',
      fields: {
        siteMetadata: 'SiteMetadata',
      },
      interfaces: ['Node'],
    }),
  ];
  createTypes(typeDefs);
};

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

  const publications = siteMetadata.publications && siteMetadata.publications.length > 0
    ? await getPublications(siteMetadata.publications)
    : [];

  createNode({
    id: 'publications',
    parent: null,
    list: publications,
    internal: {
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(publications))
        .digest('hex'),
      type: 'Publications',
    },
  });
};
