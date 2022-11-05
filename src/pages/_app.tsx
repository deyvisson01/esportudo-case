import React from 'react'
import type { AppProps } from 'next/app'

//styles
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  </>
)

export default App
