import ProviderStore from '@/provider/ProviderStore'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ProviderStore>
      <Component {...pageProps} />
    </ProviderStore>
  ) 
}
