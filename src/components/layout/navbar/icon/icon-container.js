import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Icon from './icon';

import checkIfHomepage from './checkIfHomepage';

const IconContainer = ({
  location,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
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
    <Icon isHomePage={isHomePage} />
  );
};

IconContainer.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default IconContainer;
