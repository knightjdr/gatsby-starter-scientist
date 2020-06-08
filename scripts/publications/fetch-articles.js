const { request } = require('gaxios');

const parseAuthors = (authors) => authors.map((author) => author.name);

const parseYear = (date) => Number(date.split(' ')[0]);

const parseArticles = (dataWithUIDs) => {
  const data = dataWithUIDs;
  delete data.uids;
  const articles = Object.entries(data).map(([pmid, datum]) => ({
    authors: parseAuthors(datum.authors),
    journal: datum.source,
    issue: datum.issue,
    pages: datum.pages,
    pmid: Number(pmid),
    title: datum.title,
    volume: datum.volume,
    year: parseYear(datum.pubdate),
  }));
  return articles;
};

const fetchArticles = async (ids) => {
  const idParam = ids.join(',');
  const response = await request({
    url: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${idParam}`,
  });
  return parseArticles(response.data.result);
};

module.exports = fetchArticles;
