import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Icon from './icon';

import checkIfHomepage from './checkIfHomepage';

const IconContainer = ({
  location,
}) => {
  const { file, site } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "favicon.png" }) {
          childImageSharp {
            fixed(height: 34, width: 34) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `,
  );

  const isHomePage = checkIfHomepage(process.env.NODE_ENV, location.href, site.siteMetadata.siteUrl);

  return (
    <Icon
      image={file.childImageSharp.fixed}
      isHomePage={isHomePage}
    />
  );
};

IconContainer.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default IconContainer;
