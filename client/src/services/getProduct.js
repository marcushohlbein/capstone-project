import axios from 'axios'

export const getProduct = async styleId => {
  const { data } = await axios.get(`/api/v1/products/${styleId}`)
  return data
}
