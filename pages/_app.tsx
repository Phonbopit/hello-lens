import type { AppProps } from 'next/app'

import RainbowKitProvider from '../components/RainbowKitProvider'

import '@fontsource/comfortaa'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RainbowKitProvider>
      <Component {...pageProps} />
    </RainbowKitProvider>
  )
}

export default MyApp
