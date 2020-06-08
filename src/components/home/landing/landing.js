import PropTypes from 'prop-types';
import React from 'react';

import Hero from './hero-container';
import Links from './links';

import './landing.css';

const Landing = ({
  author,
  description,
  links,
}) => (
  <Hero
    className="home__landing"
    Tag="section"
  >
    <div>
      <h1>
        The Lab of Dr.
        {' '}
        {author}
      </h1>
      <p className="home__landing-description">
        {description}
      </p>
      <Links links={links} />
    </div>
  </Hero>
);

Landing.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Landing;
