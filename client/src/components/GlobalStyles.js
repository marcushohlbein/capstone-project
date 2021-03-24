import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-darkblue: #2c3e50;
    --color-red: #E74C3C;
    --color-lightgrey: #f0f0f0;
    --color-grey: #6f7172;
    --color-darkgrey: #464646;
  }

  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: Source Sans Pro, sans-serif;
  }
`
