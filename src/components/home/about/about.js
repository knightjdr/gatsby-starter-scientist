/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import './about.css';

const About = ({
  html,
  image,
  title,
}) => (
  <section className="about">
    <h2>{title}</h2>
    <div className="about__inner">
      <GatsbyImage
        alt={title}
        className="about__portrait"
        image={image}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </section>
);

About.propTypes = {
  html: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default About;
