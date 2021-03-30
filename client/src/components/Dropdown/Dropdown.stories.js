import Dropdown from './Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
}

const Template = args => <Dropdown {...args} />

export const Primary = Template.bind({})

Primary.args = {
  sizes_eu: [
    '36 2/3',
    '36',
    '38 2/3',
    '38,5',
    '39 1/3',
    '40 2/3',
    '41 1/3',
    '41 2/3',
    '41,5',
    '42',
    '45 1/3',
    '46 2/3',
  ],
}
