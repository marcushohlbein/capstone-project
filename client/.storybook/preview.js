import GlobalStyle from '../src/components/GlobalStyles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators =[
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
]