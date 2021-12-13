import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Placeholder from '../../images/people/placeholder.inline.svg';

const Portrait = ({
  name,
  image,
}) => (
  image
    ? (
      <GatsbyImage
        alt={name}
        className="people__list-image"
        image={image.childImageSharp.gatsbyImageData}
      />
    )
    : (
      <div className="people__list-image">
        <Placeholder />
      </div>
    )
);

Portrait.defaultProps = {
  image: null,
};

Portrait.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape({}),
    }),
  }),
  name: PropTypes.string.isRequired,
};

export default Portrait;
