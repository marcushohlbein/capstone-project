import GlobalStyle from '../src/components/GlobalStyles'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import {BrowserRouter as Router} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600,
      refetchOnWindowFocus: false,
    },
  },
})

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
    <QueryClientProvider client={queryClient}>
    <Router>
      <GlobalStyle />
      <Story />
    </Router>
    </QueryClientProvider>

  ),
]