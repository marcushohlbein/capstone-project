export default function getProducts() {
  return fetch('/api/v1/products').then(res => res.json())
}
