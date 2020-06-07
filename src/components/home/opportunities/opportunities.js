/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './opportunities.css';

const Opportunities = ({
  html,
}) => (
  <section className="opportunities">
    <h2>
      <FontAwesomeIcon icon={faSearch} />
      Opportunities
    </h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </section>
);

Opportunities.propTypes = {
  html: PropTypes.node.isRequired,
};

export default Opportunities;
