import axios from 'axios'

export const getProducts = async (queryParams = '') => {
  const { data } = await axios.get(`/api/v1/products/${queryParams}`)
  return data
}
