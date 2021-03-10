import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  text: 'zum shop',
  url: 'https://www.43einhalb.com/p/nike-challenger-og-gruen-schwarz-504025',
}
