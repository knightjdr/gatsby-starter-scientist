import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Publications from './publications';

import sortArticles from './sort-articles';

const PublicationsContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        publications(list: {elemMatch: {title: {regex: "/.*/"}}}) {
          list{
            authors
            journal
            issue
            pages
            pmid
            title
            volume
            year
          }
        }
      }
    `,
  );

  const publicationsByYear = query.publications && query.publications.list.length > 0
    ? sortArticles(query.publications.list)
    : null;

  return (
    publicationsByYear
    && <Publications publications={publicationsByYear} />
  );
};

export default PublicationsContainer;
