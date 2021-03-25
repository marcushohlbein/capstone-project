import ShopListItem from './ShopListItem'

export default {
  title: 'ShopListItem',
  component: ShopListItem,
}

const Template = args => <ShopListItem {...args} />

export const Primary = Template.bind({})

/* Primary.args = {
  price: '79,99€',
  shopName: 'Brooklyn',
  shopLogo: 'brooklyn',
  shopUrl:
    'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025',
} */

Primary.args = {
  sizes_eu: [
    '36',
    '36,5',
    '37,5',
    '38',
    '38,5',
    '39',
    '40',
    '40,5',
    '41',
    '42',
  ],
  shopName: '43einhalb',
  price: '149,95',
  productLink: 'https://www.43einhalb.com/p/nike-air-max-270-schwarz-412420',
}
