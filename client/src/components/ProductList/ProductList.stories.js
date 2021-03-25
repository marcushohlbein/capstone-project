import ProductList from './ProductList'

export default {
  title: 'ProductList',
  component: ProductList,
}

const Template = args => <ProductList product={args} />

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

Primary.args = {
  _id: { $oid: '60561b945832181de3b4d445' },
  sale: false,
  styleId: 'BQ5448-007',
  brand: 'Nike',
  model: 'Court Borough Low 2',
  color: 'Black/University Red/White',
  gender: 'child',
  releaseDate: { $date: '2021-07-16T00:00:00.000Z' },
  retailPrice: 65,
  shops: [
    {
      sizes_eu: ['36.0', '36.5', '37.5', '38.0', '38.5', '39.0', '40.0'],
      _id: { $oid: '6057cb0716fa5d427da96db1' },
      shopName: 'brooklyn',
      salesPrice: '',
      regularPrice: '50,00',
      productLink:
        'https://brooklyn-shop.de/collections/schuhe/products/nike-court-borough-low-2-gs-bq5448-007-schwarz-rot',
    },
  ],
  media: {
    imageUrl:
      'https://images.stockx.com/images/Nike-Court-Borough-Low-2-Black-University-Red-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614886339',
    thumbUrl:
      'https://images.stockx.com/images/Nike-Court-Borough-Low-2-Black-University-Red-GS.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614886339',
  },
  createdAt: { $date: '2021-03-20T15:58:12.340Z' },
  updatedAt: { $date: '2021-03-21T22:39:03.533Z' },
}
