export default function getProduct(styleId) {
  return fetch(`/api/v1/products/${styleId}`).then(res => res.json())
}
