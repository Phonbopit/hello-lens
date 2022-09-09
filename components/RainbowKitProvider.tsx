import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const apiKey = process.env.ALCHEMY_ID

export const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.polygonMumbai,
    chain.rinkeby,
    chain.goerli,
  ],
  [alchemyProvider({ apiKey }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Hello Lens Protocol',
  chains,
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

interface Props {
  children: React.ReactNode
}

const RainbowKitProviderWrapper = ({ children }: Props) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  )
}

export default RainbowKitProviderWrapper
