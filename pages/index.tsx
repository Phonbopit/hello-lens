import type { NextPage } from 'next'
import Head from 'next/head'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import ExploreProfiles from '../components/ExploreProfiles'

const Home: NextPage = () => {
  return (
    <div className="container max-w-6xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hello Lens Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="my-8">
        <ConnectButton accountStatus="address" chainStatus="name" />

        <ExploreProfiles />
      </section>
    </div>
  )
}

export default Home
