import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Chip, Stack, Typography, Box } from '@mui/material'

import styles from '../styles/Home.module.css'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box sx={{ marginBottom: 20 }}>
      <Head>
        <title>Next | Home</title>
      </Head>
      <Stack alignItems='center' justifyContent='center'>
        <Image src='/next.svg' alt='home' width={500} height={200} margintop={20}></Image>
        <Stack alignSelf='flex-start' spacing={5} mt={10} mb={20}>
          <Typography variant='h3'>Home</Typography>
          <Typography color='grey'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
         
        </Stack>
        <Link legacyBehavior href='/nested '>
            <a> <Chip label='Go to Users'></Chip></a></Link>
      </Stack>
    </Box>

  )
}
