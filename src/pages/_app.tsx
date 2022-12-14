import type { AppProps } from 'next/app'

import AppProvider from '../components/AppProvider'

import '@fontsource/varela-round'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
