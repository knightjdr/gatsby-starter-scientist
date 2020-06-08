import { useStaticQuery, graphql } from 'gatsby';

const useLinks = () => {
  const query = useStaticQuery(
    graphql`
      query {
        people: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/people/" } }) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      publications(list: {elemMatch: {title: {regex: "/.*/"}}}) {
          list{
            title
          }
        }
      }
    `,
  );

  const links = [];

  if (query.people.edges.length > 0) {
    links.push('people');
  }
  if (query.publications) {
    links.push('publications');
  }

  return links;
};

export default useLinks;
