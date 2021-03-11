import ProductList from './ProductList'

export default {
  title: 'ProductList',
  component: ProductList,
}

const Template = args => <ProductList {...args} />

export const Primary = Template.bind({})
export const onSale = Template.bind({})

Primary.args = {
  img: 'https://source.unsplash.com/random/280x200',
  brand: 'Nike',
  model: 'Air Force 1',
  price: '79,99',
}

onSale.args = {
  img: 'https://source.unsplash.com/random/200x200',
  brand: 'Nike',
  model: 'Air Force 1',
  price: '79,99',
  sale: true,
}
