const filterLinks = (links) => (
  links
  && links.length > 0
    ? links.filter((link) => link.link && link.text)
    : []
);

export default filterLinks;
