import PropTypes from 'prop-types';
import React from 'react';

import Hero from './hero-container';
import Link from '../../link/link';

import './landing.css';

const Landing = ({
  author,
  description,
}) => (
  <Hero
    className="home__landing"
    Tag="section"
  >
    <div>
      <h1>
        The Laboratory of Dr.
        {' '}
        {author}
      </h1>
      <p className="home__landing-description">
        {description}
      </p>
      <div className="home__landing-links">
        <Link
          buttonStyle
          nav
          to="/#research"
        >
          Research
        </Link>
        <Link
          buttonStyle
          nav
          to="/opportunities"
        >
          Opportunities
        </Link>
      </div>
    </div>
  </Hero>
);

Landing.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Landing;
