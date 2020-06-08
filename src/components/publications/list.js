import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Link from '../link/link';

const createAuthorSeparator = (index, numberOfAuthors) => {
  if (numberOfAuthors === 1 || index === numberOfAuthors - 1) {
    return '';
  } if (index < numberOfAuthors - 2) {
    return ', ';
  }
  return ' and ';
};

const formatAuthors = (authors, title) => {
  const numberOfAuthors = authors.length;
  return authors.map((author, index) => {
    return (
      <Fragment key={`${author}-${title}`}>
        {author}
        {createAuthorSeparator(index, numberOfAuthors)}
      </Fragment>
    );
  });
};

const formatPages = (article) => {
  if (article.volume && article.issue && article.pages) {
    return `, ${article.volume}(${article.issue}): ${article.pages}`;
  } if (article.volume && article.pages) {
    return `, ${article.volume}: ${article.pages}`;
  } if (article.pages) {
    return `, ${article.pages}`;
  }
  return '';
};

const formatTitle = (title) => title.replace(/&lt;.+?&gt;/g, '');

const formatItem = (article) => (
  <li key={article.title}>
    {formatAuthors(article.authors, article.title)}
    .
    {' '}
    <strong>{formatTitle(article.title)}</strong>
    {' '}
    <em>{article.journal}</em>
    .
    {' '}
    {article.year}
    {formatPages(article)}
    .
    {' '}
    <Link to={`https://www.ncbi.nlm.nih.gov/pubmed/${article.pmid}`}>
      PMID:
      {' '}
      {article.pmid}
    </Link>
    .
  </li>
);

const PublicationList = ({
  publications,
}) => {
  const yearOrder = Object.keys(publications).sort((a, b) => (Number(a) < Number(b) ? 1 : -1));

  return (
    <>
      <div className="publications__links-year">
        {
          yearOrder.map((year) => (
            <Link
              key={year}
              to={`/publications/#${year}`}
            >
              {year}
            </Link>
          ))
        }
      </div>
      {
        yearOrder.map((year) => {
          const items = publications[year].map((article) => formatItem(article));
          return (
            <div key={year}>
              <h2 id={year}>{year}</h2>
              <ul>{items}</ul>
            </div>
          );
        })
      }
    </>
  );
};

PublicationList.propTypes = {
  publications: PropTypes.shape({}).isRequired,
};

export default PublicationList;
