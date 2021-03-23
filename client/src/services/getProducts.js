import axios from 'axios'

export const getProducts = async () => {
  const { data } = await axios.get(`/api/v1/products`)
  return data
}
