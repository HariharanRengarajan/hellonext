import { Button,Box, Chip, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PageNotFound = () => { 

    const router = useRouter();
    useEffect(() => { 
        const id = setTimeout(()=>{
            router.push('/')
        },3000)

        return () => clearTimeout(id)
    },[])
    return (
        <Box sx={{ margin: 20 }}>
            <Typography variant='h5'>Whoops! Page Not Found</Typography>
            <Link legacyBehavior href='/ '><a><Button variant='text'>Go to Home</Button> </a></Link>
        </Box>
    )
}

export default PageNotFound