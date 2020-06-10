import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Placeholder from '../../images/people/placeholder.inline.svg';

const Portrait = ({
  name,
  image,
}) => (
  image
    ? (
      <Image
        alt={name}
        className="people__list-image"
        fluid={image.childImageSharp.fluid}
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
  image: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
};

export default Portrait;
