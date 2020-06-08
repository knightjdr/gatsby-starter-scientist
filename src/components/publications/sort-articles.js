const sortByYear = (articles) => (
  Object.entries(articles).reduce((accum, [year, arr]) => ({
    ...accum,
    [year]: arr.sort((a, b) => (a.pmid < b.pmid ? 1 : -1)),
  }), {})
);

const sortArticles = (articles) => {
  const articlesByYear = articles.reduce((accum, article) => {
    if (accum[article.year]) {
      return {
        ...accum,
        [article.year]: [
          ...accum[article.year],
          article,
        ],
      };
    }
    return {
      ...accum,
      [article.year]: [article],
    };
  }, {});

  return sortByYear(articlesByYear);
};

module.exports = sortArticles;
