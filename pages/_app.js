import { Container } from '@mui/material'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Layout><Container maxWidth='md'><Component {...pageProps} /></Container>
  </Layout>
}
