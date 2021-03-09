import ProductListing from './ProductListing'

export default {
  title: 'ProductListing',
  component: ProductListing,
}

const Template = args => <ProductListing {...args} />

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
