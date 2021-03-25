import ProductDetail from './ProductDetail'

export default {
  title: 'ProductDetail',
  component: ProductDetail,
}

const Template = args => <ProductDetail {...args} />

export const Primary = Template.bind({})

Primary.args = {
  brand: 'Nike',
  shoe: 'Air Force 1',
  styleId: '82834-100',
  media: {
    imageUrl:
      'https://stockx.imgix.net/Nike-Air-Force-1-Low-Colin-Kaepernick-TD-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1578691530',
  },
  shops: [
    {
      price: '79,99€',
      shopName: 'Brooklyn',
      shopLogo: 'brooklyn',
      shopUrl:
        'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025',
    },
    {
      price: '69,99€',
      shipping: 'ab 4,90€ Versand',
      shopName: 'Asphaltgold',
      shopLogo: 'brooklyn',
      shopUrl:
        'https://www.asphaltgold.com/de/product/nike-air-max-90-og-iii-prm-white-white-black-bright-crimson/',
    },
  ],
  text: 'zum shop',
}
