/* eslint-disable react/no-danger */

import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import './about.css';

const About = ({
  author,
  html,
  image,
}) => (
  <section className="about">
    <h2>
      About
      {' '}
      {author}
    </h2>
    <div className="about__inner">
      <Image
        alt={`Portrait of ${author}`}
        className="about__portrait"
        fluid={image}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </section>
);

About.propTypes = {
  author: PropTypes.string.isRequired,
  html: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default About;
