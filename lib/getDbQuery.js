const getDbQuery = (urlParam = '') => {
  let query = {}
  query['shops.0'] = { $exists: true }
  if (urlParam) {
    q = urlParam
    query['model'] = '/.*' + q + '*./i'
    return query
  }
  return query
}

module.exports = getDbQuery
