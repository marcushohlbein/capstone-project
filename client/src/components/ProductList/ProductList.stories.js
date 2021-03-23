import ProductList from './ProductList'

export default {
  title: 'ProductList',
  component: ProductList,
}

const Template = args => <ProductList {...args} />

export const Primary = Template.bind({})
export const onSale = Template.bind({})

Primary.args = {
  product: {
    media: {
      imageUrl: 'https://source.unsplash.com/random/280x200',
    },

    brand: 'Nike',
    shoe: 'Air Force 1',
    retailPrice: '79,99',
    sale: false,
  },
}

onSale.args = {
  product: {
    media: {
      imageUrl: 'https://source.unsplash.com/random/280x200',
    },

    brand: 'Adidas',
    shoe: 'Continental 80',
    retailPrice: '59,99',
    sale: true,
  },
}
