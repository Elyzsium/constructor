import Layout from '@/app/layout'
import '@/app/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  
      <Component {...pageProps} />
 
  )
}

export default MyApp