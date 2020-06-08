import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons';

import Link from '../../../link/link';

const getLinks = (links) => {
  const linkComponents = {
    people: (
      <Link key="people" to="/people">
        <FontAwesomeIcon icon={faUsers} />
        People
      </Link>
    ),
    publications: (
      <Link key="publications" to="/publications">
        <FontAwesomeIcon icon={faBook} />
        Publications
      </Link>
    ),
  };

  return (
    <>
      {links.map((link) => linkComponents[link])}
    </>
  );
};

export default getLinks;
