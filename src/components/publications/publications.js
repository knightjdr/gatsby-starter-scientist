/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import './publications.css';

const Publications = ({
  markdown,
}) => (
  <div className="publications">
    <section>
      <header>
        <h1>
        Publications
        </h1>
        <FontAwesomeIcon icon={faBook} size="2x"/>
      </header>
      <ul className="publications__list">{
        markdown.map((publications) => (
          <li key={publications.node.frontmatter.title}>
            <h2>{publications.node.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: publications.node.html }} />
          </li>
        ))
      }
      </ul>
    </section>
  </div>
);

export default Publications;