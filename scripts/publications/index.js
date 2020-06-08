const fetchArticles = require('./fetch-articles');

const getPublications = async (ids) => fetchArticles(ids);

module.exports = getPublications;
