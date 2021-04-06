const getDbQuery = (urlParams = '') => {
  const query = {}
  const subQuery = {}

  const { q: searchString, size } = urlParams
  query['shops.0'] = { $exists: true }

  if (searchString) {
    query['model'] = { $regex: RegExp(`.*${searchString}.*`, 'i') }
  }
  if (size) {
    subQuery['$in'] = []
    const sizeArray = size.split(',')
    subQuery['$in'] = sizeArray
    query['shops.sizes_eu'] = subQuery
  }
  return query
}

module.exports = getDbQuery
