import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  whiteGray: '#FBFBFB',
  gray: '#7B7B7B',
  text: '#111111'
}

export const breakpoints = {
  desktop: '1023px',
  tablet: '767px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Inter;
    font-weight: 400;
    /* list-style: none; */
    text-decoration: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.text};
  }

  p {
    font-size: 18px;
    line-height: 150%;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 14px;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`
