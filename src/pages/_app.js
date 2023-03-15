import Layout from '@/components/Layout'
import '@/styles/output.css'
import '@/styles/sass/global.css'

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
