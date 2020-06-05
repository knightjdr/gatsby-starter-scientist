const sortMarkdown = (entries, sortFields = []) => {
  if (sortFields.length === 0) {
    return entries;
  }

  const compare = (a, b) => {
    if (a.node.frontmatter[sortFields[0]] < b.node.frontmatter[sortFields[0]]) {
      return -1;
    } if (a.node.frontmatter[sortFields[0]] > b.node.frontmatter[sortFields[0]]) {
      return 1;
    } if (
      sortFields.length >= 2
      && a.node.frontmatter[sortFields[1]] < b.node.frontmatter[sortFields[1]]
    ) {
      return -1;
    } if (
      sortFields.length >= 2
      && a.node.frontmatter[sortFields[1]] > b.node.frontmatter[sortFields[1]]
    ) {
      return 1;
    }
    return 0;
  };

  entries.sort(compare);
  return entries;
};

export default sortMarkdown;
