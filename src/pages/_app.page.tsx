import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Toaster />
  </>
)

export default MyApp
