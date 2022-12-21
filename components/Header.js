import { AppBar, Stack, styled, Toolbar, Typography } from '@mui/material'
import { flexbox } from '@mui/system'
import Link from 'next/link'
import React from 'react'

const StyledToolbar= styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  background:'black'

})

const Header = () => {
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Typography variant='h5'>Next</Typography>
        <Stack direction='row' spacing={10}>
          <Link legacyBehavior href='/'><a>Home</a></Link>
          <Link legacyBehavior href='/about'><a>About</a></Link>
          <Link legacyBehavior  href='/nested/contacts'><a>Contacts</a></Link>

        </Stack>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header