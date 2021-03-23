import ShopListItem from './ShopListItem'

export default {
  title: 'ShopListItem',
  component: ShopListItem,
}

const Template = args => <ShopListItem {...args} />

export const Primary = Template.bind({})

Primary.args = {
  price: '79,99€',
  shopName: 'Brooklyn',
  shopLogo: 'brooklyn',
  shopUrl:
    'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025',
}
