import { useStaticQuery, graphql } from 'gatsby';

const useLinks = () => {
  const query = useStaticQuery(
    graphql`
      query {
        publications(list: {elemMatch: {title: {regex: "/^(?!(dummy)$).*$/"}}}) {
          list{
            title
          }
        }
      }
    `,
  );

  const links = [];

  if (query.publications) {
    links.push('publications');
  }

  return links;
};

export default useLinks;
