import GlobalStyle from '../src/components/GlobalStyles'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import {BrowserRouter as Router} from 'react-router-dom'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
  layout: 'fullscreen',
}

export const decorators =[
  Story => (
    <>
    <Router>
      <GlobalStyle />
      <Story />
    </Router>
    </>
  ),
]