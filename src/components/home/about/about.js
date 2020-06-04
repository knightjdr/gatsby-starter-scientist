import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import './about.css';

const About = ({
  author,
  image,
}) => (
  <section className="about">
    <h2>
      About
      {' '}
      {author}
    </h2>
    <div>
      <Image
        alt={`Portrait of ${author}`}
        className="about__portrait"
        fluid={image}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec
        adipiscing. Adipiscing enim eu turpis egestas pretium aenean pharetra. Pretium
        lectus quam id leo in vitae turpis massa sed. Sed viverra ipsum nunc aliquet
        bibendum enim facilisis. Velit scelerisque in dictum non. In metus vulputate eu
        scelerisque. Ipsum dolor sit amet consectetur adipiscing elit duis. Nec ullamcorper
        sit amet risus nullam eget felis eget. Congue mauris rhoncus aenean vel elit
        scelerisque. Urna nec tincidunt praesent semper feugiat nibh. Maecenas ultricies mi
        eget mauris. In est ante in nibh mauris cursus mattis. Rhoncus aenean vel elit
        scelerisque mauris pellentesque pulvinar pellentesque. Feugiat sed lectus vestibulum
        mattis ullamcorper velit.
      </p>
    </div>
  </section>
);

About.propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default About;
