const getDbQuery = (urlParams = '') => {
  const query = {}
  const { q: searchString } = urlParams

  query['shops.0'] = { $exists: true }

  if (searchString) {
    query['model'] = { $regex: RegExp(`.*${searchString}.*`, 'i') }
    return query
  }
  return query
}

module.exports = getDbQuery
