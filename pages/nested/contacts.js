import React from 'react'
import { Stack, Typography } from '@mui/material'
import Head from 'next/head'


const contacts = () => {
  return (
    <Stack spacing={5} mt={10} mb={20}>
       <Head>
        <title>Next | Contacts</title>
      </Head>
      <Typography variant='h3'>Contacts</Typography>
      <Typography color='grey'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
    </Stack>)
}

export default contacts