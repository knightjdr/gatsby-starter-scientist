import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import './publications.css';
import PublicationList from './list';

const Publications = ({ publications }) => (
  <div className="publications">
    <section>
      <header>
        <h1>
          Publications
        </h1>
        <FontAwesomeIcon icon={faBook} size="2x" />
      </header>
      <PublicationList publications={publications} />
    </section>
  </div>
);

Publications.propTypes = {
  publications: PropTypes.shape({}).isRequired,
};

export default Publications;
