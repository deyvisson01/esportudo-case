import React from 'react'
import type { AppProps } from 'next/app'

//styles
import GlobalStyles from '../styles/globals'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
)

export default App
