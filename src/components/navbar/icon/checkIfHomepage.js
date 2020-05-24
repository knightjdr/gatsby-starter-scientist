const checkIfHomepage = (env, href, siteUrl) => (
  (env === 'development' && (href === 'http://localhost:8000/'))
  || (href === siteUrl || href === `${siteUrl}/`)
);

export default checkIfHomepage;
